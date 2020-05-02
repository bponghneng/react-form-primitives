import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import RequiredIcon from "./required-icon";
import Validator from "./validator";

const ValidatingInput = props => {
  const {
    initialValue,
    label,
    onChange,
    property,
    required,
    validationFn
  } = props;
  const { isValid, name, type, value } = property;

  return (
    <Validator
      initialValue={initialValue}
      isValid={isValid}
      onChange={onChange}
      required={required}
      type={type}
      validationFn={validationFn}
      value={value}
    >
      {({
        currentValue,
        errorFeedback,
        handleBlur,
        handleChange,
        showFeedback
      }) => (
        <div className="form-control">
          <label htmlFor={name}>
            {label}
            {required && <RequiredIcon />}
          </label>
          <input
            className={classNames({ "is-invalid": !isValid && showFeedback })}
            name={name}
            onBlur={handleBlur}
            onChange={({ target: { name, value } }) =>
              handleChange(name, value)
            }
            type={type}
            value={currentValue}
          />
          {showFeedback && (
            <div className="error-feedback">{errorFeedback}</div>
          )}
        </div>
      )}
    </Validator>
  );
};

ValidatingInput.defaultProps = {
  initialValue: null,
  isValid: false,
  required: false,
  type: "text"
};

ValidatingInput.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  property: PropTypes.shape({
    isValid: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  }),
  required: PropTypes.bool,
  type: PropTypes.string,
  validationFn: PropTypes.func.isRequired
};

export default ValidatingInput;
