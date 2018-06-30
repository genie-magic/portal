import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

class Skill extends React.Component {
  render() {
    const fillStyle = {
      width: this.props.rate + '%'
    };
    return (
      <div className="skill">
        <div className="tag">{this.props.label}</div>
        <div className="fill wow slideInLeft animated" style={fillStyle} />
        <span>{this.props.rate}%</span>
      </div>
    );
  }
}
Skill.propTypes = {
  rate: PropTypes.integer,
  label: PropTypes.string
};

Skill.defaultProps = {
  rate: 75,
  label: 'CSS'
};

export default Skill;
