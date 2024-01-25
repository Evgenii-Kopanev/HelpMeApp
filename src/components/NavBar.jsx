import React, { useContext } from "react";
import styles from "../styles/navBar.module.css";
import { helpContext } from "../utilities/contexts";

export default function NavBar() {
  const { company, setIsMenuVisible } = useContext(helpContext);
  return (
    <>
      <div className={styles.mainConteiner}>
        <div className={styles.logoSection}>
          <div>{company.companyLogo}</div>
          <div>{company.companyPhone}</div>
        </div>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() => setIsMenuVisible((prevState) => !prevState)}
        >
          menu
        </button>
      </div>
    </>
  );
}
