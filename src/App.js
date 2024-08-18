import "./App.css";
import Navbar from "./components/Navbar";
import About2 from "./components/About2";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#171717";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Editor"
          homePage="Home Page"
          mode={mode}
          toggleMode={toggleMode}
          linksPage="About Us"
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about2" element={<About2 mode={mode} />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter Your Text Here"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
