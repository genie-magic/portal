import React from 'react';
import './FlowBackground.css';

class FlowBackground extends React.Component {
  render() {
    return (
      <div className="flow-background">
        {this.props.children}
      </div>
    )
  }
}

export default FlowBackground;