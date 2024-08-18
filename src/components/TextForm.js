import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    // console.log("Button is Clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Your Text Converted into Uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Button is Clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Your Text Converted into Lowercase", "success");
  };
  const handleClrClick = () => {
    // console.log("Button is Clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Your Text is cleared now", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your Text is Copied", "info");
  };
  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="text_area"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          type="submit"
        >
          Make Uppercase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleLowClick}
          type="submit"
        >
          Make Lowercase
        </button>
        <button
          className="btn btn-dark "
          onClick={handleClrClick}
          type="submit"
        >
          Clear Text
        </button>
        <button
          className="btn btn-info mx-3"
          onClick={handleCopyClick}
          type="text"
        >
          Copy To Clipboard
        </button>
        <button
          className="btn btn-success"
          onClick={handleExtraSpacesClick}
          type="text"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} Words, {text.length} Chracters
        </p>
        <p>Takes {0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the above box to preview it here"}
        </p>
      </div>
    </>
  );
}
