import React, { useContext } from "react";
import styles from "../styles/main.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { helpContext } from "../utilities/contexts";
import { StyledCentricContainer } from "../components/styledComponents/containers";
import { H2 } from "../components/styledComponents/titles";

export default function Main() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { password } = useContext(helpContext);

  return (
    <>
      <StyledCentricContainer>
        <div className={styles.buttonConteiner}>
          <button
            className={styles.helpButton}
            onClick={() => navigate(`/companypage/${id}`)}
          >
            הצילו
          </button>
        </div>
        <H2>HelpMe Application</H2>
      </StyledCentricContainer>
    </>
  );
}
