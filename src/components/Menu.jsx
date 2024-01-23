import React, { useContext } from "react";
import { helpContext } from "../utilities/contexts";
import { useNavigate } from "react-router-dom";
import styles from "../styles/menu.module.css";

export default function Menu() {
  const { company, companyList, id, setIsMenuVisible, setCompany } =
    useContext(helpContext);
  const navigate = useNavigate();

  const placeToMove = (e) => {
    navigate(`/main/${id}`);
    setCompany(e);
    setIsMenuVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
      {companyList.map((company1, index) => (
        <button
          key={index}
          onClick={() => placeToMove(company1)}
          style={
            company.companyPhone === company1.companyPhone
              ? { background: "red" }
              : { background: "transparent" }
          }
        >
          <div>
            <div>{company1.companyLogo}</div>
            <div>{company1.companyPhone}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
