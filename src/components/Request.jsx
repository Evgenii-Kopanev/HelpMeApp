import React, { useContext } from "react";
import styles from "../styles/request.module.css";
import { helpContext } from "../utilities/contexts";
import { useParams } from "react-router-dom";
import { StyledCentricContainer } from "./styledComponents/containers";
import { H2 } from "./styledComponents/titles";

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
        <H2>{currentCompany}</H2>
        <H2>{company.companyPhone}</H2>
        <h3 style={{ color: "black" }}>{"CLIENT NAME: " + id}</h3>
      </div>
    </div>
  );
}
