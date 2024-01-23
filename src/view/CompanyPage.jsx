import React, { useState } from "react";
import Request from "../components/Request";
import styles from "../styles/companyPage.module.css";
import CancelAproove from "../components/CancelAproove";
import { useParams } from "react-router-dom";

export default function CompanyPage() {
  const [counter, setCounter] = useState(1);
  const [cancelShow, setCancelShow] = useState(false);
  const { id } = useParams();

  return (
    <>
      <Request />
      {cancelShow ? (
        <CancelAproove id={id} counter={counter} setCounter={setCounter} />
      ) : (
        <></>
      )}
      <button
        onClick={() => setCancelShow((prevState) => !prevState)}
        disabled={counter > 3}
        className={styles.cancelButton}
      >
        CANCEL
      </button>
    </>
  );
}
