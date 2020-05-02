import React from "react";
import PropTypes from "prop-types";

const Validator = props => {
  const {
    children,
    initialValue,
    isValid,
    onChange,
    type,
    validationFn,
    value
  } = props;
  const [fieldState, setFieldState] = React.useState({
    isBlurred: false,
    isValid: isValid,
    wasValid: validationFn(value)
  });

  React.useEffect(() => {
    setFieldState({
      isBlurred: fieldState.isBlurred,
      isValid,
      wasValid: !fieldState.wasValid && isValid
    });
  }, [isValid]);

  const handleBlur = () => {
    if (!fieldState.isBlurred) {
      setFieldState({ ...fieldState, isBlurred: true });
    }
  };

  const handleChange = (name, newValue) => {
    onChange({
      isValid: !validationFn(newValue),
      name,
      type,
      value: newValue
    });
  };

  return (
    <>
      {children({
        currentValue: value || initialValue,
        errorFeedback: validationFn(value),
        handleBlur,
        handleChange,
        isBlurred: fieldState.isBlurred,
        isValid: fieldState.isValid,
        showFeedback:
          (fieldState.isBlurred && !fieldState.isValid) ||
          (fieldState.wasValid && !fieldState.isValid),
        wasValid: fieldState.wasValid
      })}
    </>
  );
};

Validator.defaultProps = {
  initialValue: null,
  isValid: false,
  required: false,
  value: null
};

Validator.propTypes = {
  children: PropTypes.func.isRequired,
  initialValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.string
  ]),
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  validationFn: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ])
};

export default Validator;
