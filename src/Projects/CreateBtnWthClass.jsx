import React, { Component } from "react";
import { Button , TextField } from "@mui/material";

export class CreateBtnWthClass extends Component {
  state = {
    bgColor: "",
    createBtn: [{ btn: "red" },{ btn: "orange" },{ btn: "blue" },{ btn: "green" },
    ],
      inputText: "",
  };

  changeBoxColor = (e) => {
    this.setState({
      bgColor: e.target.value,
    });
  };

  addNewColor = () => {
      if (this.state.inputText != "") {
        let findColor = this.state.createBtn.find((val) => {
          return val.btn === this.state.inputText;
        });
        if (findColor) {
          alert("Entered Color Already Exists");
          this.setState({
            bgColor: this.state.inputText,
            inputText: "",
          });
        } else {
          this.state.createBtn.push({ btn: this.state.inputText });
          this.setState({
            bgColor: this.state.inputText,
            inputText: "",
          });
        }
      } else {
          alert("Please Enter A Value");
    }
  };

  render() {
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Click Button To Color The Box</h1>
        <div
          style={{
            backgroundColor: this.state.bgColor,
            height: "250px",
            width: "250px",
            margin: "auto auto",
            borderRadius: "2rem",
          }}
        ></div>
        {this.state.createBtn.map((val) => {
          return (
            <>
              <Button
                onClick={this.changeBoxColor}
                size="large"
                style={{ border: "1px solid black", color: "black" }}
                variant="outlined"
                sx={{ m: 5 }}
                value={val.btn}
              >
                {val.btn}
              </Button>
            </>
          );
        })}{" "}
        <br />
        <TextField
          id="standard-basic"
          label="Add Color"
          variant="standard"
          value={this.state.inputText}
          onChange={(e) => {
            this.setState({ inputText: e.target.value });
          }}
        />
        <Button
          style={{ backgroundColor: "#254061", fontWeight: "bold" }}
          variant="contained"
          sx={{ m: 2 }}
          onClick={this.addNewColor}
        >
          Add Color
        </Button>
      </div>
    );
  }
}

export default CreateBtnWthClass;
