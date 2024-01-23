import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/main.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { helpContext } from "../utilities/contexts";

export default function Main() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { password } = useContext(helpContext);

  return (
    <>
      <div className={styles.buttonConteiner}>
        <button
          className={styles.helpButton}
          onClick={() => navigate(`/companypage/${id}`)}
        >
          הצילו
        </button>
      </div>
      <h1 className={styles.bottom}>helpMe</h1>
    </>
  );
}
