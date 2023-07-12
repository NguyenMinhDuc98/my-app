import React from "react";

export default class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    this.setState({
      x: clientX,
      y: clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
