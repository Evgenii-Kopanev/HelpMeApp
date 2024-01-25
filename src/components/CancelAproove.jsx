import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { helpContext } from "../utilities/contexts";
import { MainInput } from "./styledComponents/inputs";

export default function CancelAproove(props) {
  const [firstPass, setFirstPass] = useState("");
  const [secondaryPass, setSecondaryPass] = useState("");
  const navigate = useNavigate();
  const { password } = useContext(helpContext);

  const cancel = (e) => {
    const firstCopy = firstPass;
    const secondCopy = secondaryPass;

    console.log("FIRST", firstCopy);
    console.log("APPROVE", secondCopy);
    console.log("ORIGINAL", password);
    console.log(props.counter);

    if (firstCopy === secondCopy && secondCopy === password) {
      navigate(`/main/${props.id}`);
    } else {
      props.setCounter((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          border: "1px solid pink",
          padding: "1rem",
        }}
      >
        <MainInput
          type="text"
          placeholder="Enter password"
          onChange={(e) => setFirstPass(e.target.value)}
        />
        <MainInput
          type="text"
          placeholder="RE ENTER password"
          onChange={(e) => setSecondaryPass(e.target.value)}
        />
        <button
          style={{
            width: "80%",
            border: "1px solid white",
            fontStyle: "italic",
          }}
          disabled={props.counter > 3}
          onClick={cancel}
        >
          cancel
        </button>
      </div>
    </div>
  );
}
