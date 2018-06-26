import React from 'react';
import PropTypes from 'prop-types';
import './HoverButton.css';

class HoverButton extends React.Component{
  render() {
    const { label, handleOnClick } = this.props;

    return(
      <div onClick={handleOnClick} className="hover-button">
        {label}
        <i className="icon fa fa-angle-right"/>
      </div>
    );
  }
}

HoverButton.propTypes = {
  label: PropTypes.string,
  onClickButton: PropTypes.func,
};

export default HoverButton;