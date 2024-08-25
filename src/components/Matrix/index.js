import React, { Component } from "react";
import Box from "../Box";
import "./index.css";

class Matrix extends Component {
  state = {
    boxes: Array(9).fill(""),
    clickOrder: [],
  };

  handleClick = (index) => {
    const { boxes, clickOrder } = this.state;

    if (clickOrder.length < 9 && !boxes[index]) {
      const newBoxes = [...boxes];
      newBoxes[index] = "green";

      this.setState(
        {
          boxes: newBoxes,
          clickOrder: [...clickOrder, index],
        },
        this.checkForLastBox
      );
    }
  };

  checkForLastBox = () => {
    const { clickOrder } = this.state;
    if (clickOrder.length === 9) {
      setTimeout(this.changeAllToOrange, 500);
    }
  };

  changeAllToOrange = () => {
    const { clickOrder, boxes } = this.state;
    let newBoxes = [...boxes];

    clickOrder.forEach((index, order) => {
      setTimeout(() => {
        newBoxes[index] = "orange";
        this.setState({ boxes: [...newBoxes] });
      }, order * 500);
    });
  };

  render() {
    const { boxes } = this.state;

    return (
      <div className="bg-container">
        <div className="matrix">
          {boxes.map((color, index) => (
            <Box
              key={index}
              index={index}
              color={color}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Matrix;
