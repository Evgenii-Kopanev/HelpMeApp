import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { helpContext } from "../utilities/contexts";

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
      <input
        type="text"
        placeholder="Enter password"
        onChange={(e) => setFirstPass(e.target.value)}
      />
      <input
        type="text"
        placeholder="RE ENTER password"
        onChange={(e) => setSecondaryPass(e.target.value)}
      />
      <button disabled={props.counter > 3} onClick={cancel}>
        cancel
      </button>
    </div>
  );
}
