import React from "react";
import PropTypes from "prop-types";

const ThemeSettings = ({ children }) => {
  return <div>{children}</div>;
};

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeSettings;
