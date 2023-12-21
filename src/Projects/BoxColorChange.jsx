import React, { Component } from "react";

export class BoxColorChange extends Component {
  state = {
    bgColor: "black",
    txtColor: "white",
    fSize: "18px",
      storeColor: "",
      storeTxtColor: "",
      storeFSize:""
    
  };

  changeColor = (e) => {
    this.setState({
      storeColor: e.target.value,
    });
  };
    changeTxtColor = (e) => {
        this.setState({
          storeTxtColor:e.target.value
      })
    }
    changeFSize = (e) => {
        this.setState({
            storeFSize:e.target.value
        })
    }
  setColor = () => {
    this.setState({
        bgColor: this.state.storeColor,
        txtColor: this.state.storeTxtColor,
        fSize:this.state.storeFSize
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.bgColor,
          height: "50vh",
          width: "100%",
        }}
      >
        <h3>Enter Color:</h3>
        <input
          placeholder="Background Color"
          value={this.state.storeColor}
          onChange={this.changeColor}
        />
        <input
          placeholder="Text Color"
          value={this.state.storeTxtColor}
          onChange={this.changeTxtColor}
        />
        <input
          placeholder="Font Size"
          value={this.state.storeFSize}
          onChange={this.changeFSize}
        />
            <br />
        <p style={{color:`${this.state.txtColor}` , fontSize:`${this.state.fSize}`}} >Hello World</p>
        <button onClick={this.setColor}>Change Color</button>
      </div>
    );
  }
}

export default BoxColorChange;
