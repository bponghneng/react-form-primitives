import React from "react";
import PropTypes from "prop-types";

const SubmitButton = props => {
  const { icon, label } = props;
  const [isValid, setIsValid] = React.useState(props.isValid);

  React.useEffect(() => {
    setIsValid(props.isValid);
  }, [props.isValid]);

  return (
    <div className="form-control form-control--actions">
      <button className="wph-button" disabled={!isValid} type="submit">
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;

SubmitButton.defaultProps = {
  icon: null,
  isValid: false
};

SubmitButton.propTypes = {
  icon: PropTypes.node,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired
};
