import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import RequiredIcon from "./required-icon";
import Validator from "./validator";
import Select from "react-select";

const Multiselect = props => {
  const {
    initialValue,
    label,
    onChange,
    options,
    placeholder,
    property,
    required,
    validationFn
  } = props;
  const customStyles = {
    control: (
      {
        alignItems,
        display,
        flexWrap,
        justifyContent,
        position,
        transition,
        boxSizing
      },
      { isFocused }
    ) => ({
      alignItems,
      borderBottom: isFocused ? "2px solid blue" : "2px solid black",
      borderRadius: "0",
      boxSizing,
      display,
      flexWrap,
      justifyContent,
      padding: "0.75em 0",
      position,
      transition
    }),
    multiValue: provided => ({
      ...provided,
      fontSize: "1.5em",
      padding: "0.5em"
    })
  };
  const { isValid, name, value } = property;
  const transformedOptions = options.map(({ id, label }) => ({
    label,
    value: id
  }));

  return (
    <Validator
      initialValue={initialValue}
      isValid={isValid}
      onChange={onChange}
      required={required}
      validationFn={validationFn}
      value={value}
    >
      {({
        currentValue,
        errorFeedback,
        handleBlur,
        handleChange,
        showFeedback
      }) => {
        const compiledValue = transformedOptions.filter(({ value }) =>
          currentValue.includes(value)
        );

        return (
          <div className="form-control">
            <label htmlFor={name}>
              {label}
              {required && <RequiredIcon />}
            </label>
            <Select
              className={classNames({
                "is-invalid": !isValid && showFeedback
              })}
              isMulti
              name={name}
              onBlur={handleBlur}
              onChange={selected =>
                handleChange(
                  name,
                  Array.isArray(selected)
                    ? selected.map(({ value }) => value)
                    : selected
                )
              }
              options={transformedOptions}
              placeholder={placeholder}
              styles={customStyles}
              value={compiledValue}
            />
            {showFeedback && (
              <div className="error-feedback">{errorFeedback}</div>
            )}
          </div>
        );
      }}
    </Validator>
  );
};

Multiselect.defaultProps = {
  initialValue: [],
  isValid: false,
  options: [],
  required: false,
  type: "text"
};

Multiselect.propTypes = {
  initialValue: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  property: PropTypes.shape({
    isValid: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string)
  }),
  required: PropTypes.bool,
  validationFn: PropTypes.func.isRequired
};

export default Multiselect;
