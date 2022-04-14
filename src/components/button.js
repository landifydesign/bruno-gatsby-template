import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, link, size }) => (
  <a
    className={`button flex items-center justify-center rounded-full bg-primary-600 text-white font-semibold  ${
      size === "lg" ? "px-6 py-4 text-body-sm" : "px-4 py-2.5 text-body-xs"
    }`}
    href={link}>
    {label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;
