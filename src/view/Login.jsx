import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { helpContext } from "../utilities/contexts";
import styles from "../styles/login.module.css";

export default function Login(props) {
  const { name, setName, password, setPassword, setId } =
    useContext(helpContext);

  const [nameErrorShowed, setNameErrorShowed] = useState(false);
  const [passErrorShowed, setPassErrorShowed] = useState(false);
  const navigate = useNavigate();

  //contains at least one number
  const containsNumbers = (string) => /[0-9]/.test(string);
  //contains at least one letter
  const containsLetters = (string) => /[a-zA-Z]/.test(string);

  useEffect(() => {
    const nameCopy = name;
    const passwordCopy = password;
    let namePass = false;
    let passPass = false;

    if (
      nameCopy.length > 3 &&
      nameCopy.length != 0 &&
      !containsNumbers(nameCopy)
    ) {
      setNameErrorShowed(false);
      namePass = true;
    } else {
      setNameErrorShowed(true);
      namePass = false;
    }

    if (passValidation(passwordCopy)) {
      setPassErrorShowed(false);
      passPass = true;
    } else {
      setPassErrorShowed(true);
      passPass = false;
    }

    if (namePass && passPass) {
      props.setIsNavBarVisible(true);
      setId(name);
      navigate(`/main/${name}`);
    }
  }, [name, password]);

  //Contains at least one letter or one number = return boolean
  const passValidation = (string) => {
    if (string.length < 8) {
      return false;
    } else if (containsNumbers(string) && containsLetters(string)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className={styles.sign}>Sign-Up</div>
      <div className={styles.name}>
        {nameErrorShowed ? (
          <span style={{ color: "red" }}>wrong name</span>
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.name}>
        {passErrorShowed ? (
          <span style={{ color: "red" }}>wrong password</span>
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          fontSize: "x-large",
          display: "flex",
          justifyContent: "center",
        }}
      >
        helpMe
      </div>
    </div>
  );
}
