import React, { useContext } from "react";
import styles from "../styles/request.module.css";
import { helpContext } from "../utilities/contexts";
import { useParams } from "react-router-dom";

export default function Request() {
  const { company } = useContext(helpContext);
  const { id } = useParams();

  let currentCompany;
  switch (company.companyLogo) {
    case "A":
      currentCompany = "AMBULANCE";
      break;
    case "B":
      currentCompany = "POLICE";
      break;
    case "C":
      currentCompany = "FIREMAN";
      break;
    default:
      break;
  }

  return (
    <div className={styles.mainConteiner}>
      <div className={styles.secondConteiner}>
        <div>{currentCompany}</div>
        <div>{company.companyPhone}</div>
        <div>{"CLIENT NAME: " + id}</div>
      </div>
    </div>
  );
}
