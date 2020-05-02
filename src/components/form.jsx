import { isEqual } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import isFloat from "validator/lib/isFloat";
import formDataPropertiesTransformer from "../transformers/form-data";
import ValidatingInput from "./validating-input";
import ValidatingMultiselect from "./validating-multiselect";
import SubmitButton from "./submit-button";

const Form = ({
  config,
  initialValues,
  isDisabled,
  label,
  objectId,
  onSave,
  options
}) => {
  // Tracks form state.
  const [formState, setFormState] = React.useState({
    isTouched: false,
    isValid: false
  });

  /* Tracks initial values for all form fields. Used to derive whether a field has been touched. If so,
   * it will have a current value different from the initial value.
   *   - Initial value should be defaulted to null if it will be updated by fetch for the current state
   *     of the persisted value.
   *   - Current values are overwritten when initial values are updated. Use the optional isDisabled prop
   *     to disable the form until the fetch has completed.
   */
  const compileInitialValues = values => {
    const valuesKeys = Object.keys(values);

    if (!valuesKeys.length) {
      return config.reduce(
        (carry, field) => Object.assign(carry, { [field.name]: null }),
        {}
      );
    }

    return Object.keys(values).reduce((carry, key) => {
      return [...carry, { key, value: values[key] }];
    }, []);
  };
  const [initialVOs, setInitialVOs] = React.useState(
    compileInitialValues(initialValues)
  );

  /* Tracks the current state for all form fields. See note above about initial values and how they may overwrite
   * current values on update.
   */
  const populateFor = values => {
    return config.reduce((carry, field) => {
      const { name, type, validationFn } = field;
      return Object.assign({}, carry, {
        [name]: {
          isValid: validationFn ? !validationFn(values[name]) : true,
          name,
          type,
          value: values[name]
        }
      });
    }, {});
  };
  const [properties, setProperties] = React.useState(
    populateFor(initialValues)
  );

  const handleInput = valueObject => {
    const { isValid, name, type, value } = valueObject;

    if (!formState.isTouched) {
      setFormState({ ...formState, isTouched: true });
    }

    const maybeTransform = voValue => {
      if (isValid && type === "number") {
        return isFloat(voValue) ? parseFloat(voValue) : parseInt(voValue, 10);
      }

      return voValue;
    };

    setProperties({
      ...properties,
      [name]: { ...valueObject, value: maybeTransform(value) }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const changedProperties = Object.keys(properties).reduce(
      (carry, propertyKey) => {
        if (
          !isEqual(properties[propertyKey].value, initialValues[propertyKey])
        ) {
          return Object.assign({}, carry, {
            [propertyKey]: properties[propertyKey]
          });
        }
        return carry;
      },
      {}
    );
    const formData = formDataPropertiesTransformer(changedProperties, objectId);

    onSave(formData);
  };

  // Configures and outputs component for a single field config.
  const outputFieldFor = field => {
    const { label, name, type, validationFn } = field;

    switch (type) {
      case "multiselect":
        return (
          <ValidatingMultiselect
            initialValue={
              initialValues[name] !== null ? initialValues[name] : []
            }
            key={`multiselect:${properties[name].name}`}
            label={label}
            onChange={handleInput}
            options={options[name]}
            property={properties[name]}
            type={type}
            validationFn={validationFn}
          />
        );
      default:
        return (
          <ValidatingInput
            initialValue={initialValues[name]}
            key={`input:${properties[name].name}`}
            label={label}
            onChange={handleInput}
            property={properties[name]}
            type={type}
            validationFn={validationFn}
          />
        );
    }
  };

  React.useEffect(() => {
    setInitialVOs(compileInitialValues(initialValues));
    setProperties(populateFor(initialValues));
  }, [initialValues]);

  React.useEffect(() => {
    const compileIsTouched = (valueObjectsToTest, result = false) => {
      if (result || !valueObjectsToTest.length) {
        return result;
      }

      const valueObjectToTest = valueObjectsToTest.shift();
      const getComparisonTerms = () => {
        if (Array.isArray(valueObjectToTest.value)) {
          return [
            valueObjectToTest.value.sort(),
            properties[valueObjectToTest.key].value.sort()
          ];
        }

        return [
          valueObjectToTest.value,
          properties[valueObjectToTest.key].value
        ];
      };

      if (!isEqual(...getComparisonTerms())) {
        result = true;
      }

      return compileIsTouched(valueObjectsToTest, result);
    };
    const isValid = !Object.keys(properties).find(key => {
      return !properties[key].isValid;
    });

    setFormState({
      isTouched: compileIsTouched([...initialVOs]),
      isValid
    });
  }, [properties]);

  return properties ? (
    <form aria-label={label} noValidate onSubmit={handleSubmit}>
      <fieldset disabled={isDisabled}>
        {config.map(field => outputFieldFor(field))}
        <SubmitButton
          isValid={formState.isTouched && formState.isValid}
          label="Save"
        />
      </fieldset>
    </form>
  ) : null;
};

Form.defaultProps = {
  isDisabled: false,
  initialValues: {},
  label: "",
  objectId: null
};

Form.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      validationFn: PropTypes.func.isRequired
    })
  ).isRequired,
  initialValues: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.number,
      PropTypes.string
    ])
  ),
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  objectId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSave: PropTypes.func.isRequired,
  options: PropTypes.object
};

export default Form;
