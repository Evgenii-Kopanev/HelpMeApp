import { useContext, useState } from "react";
import "./App.css";
import Login from "./view/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./view/Main";
import { helpContext } from "./utilities/contexts";
import CompanyPage from "./view/CompanyPage";
import NavBar from "./components/NavBar";
import Menu from "./components/menu";

function App() {
  // const companyInitialValue = {
  //   companyLogo: "A",
  //   companyPhone: 101,
  // };
  const companyList = [
    {
      companyLogo: "A",
      companyPhone: 101,
    },
    {
      companyLogo: "B",
      companyPhone: 100,
    },
    {
      companyLogo: "C",
      companyPhone: 102,
    },
  ];

  const [company, setCompany] = useState(companyList[0]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [id, setId] = useState("");

  return (
    <>
      <helpContext.Provider
        value={{
          name,
          setName,
          password,
          setPassword,
          company,
          setCompany,
          isMenuVisible,
          setIsMenuVisible,
          companyList,
          setId,
          id,
        }}
      >
        {isNavbarVisible ? <NavBar /> : <></>}
        {isMenuVisible ? <Menu /> : <></>}
        <Routes>
          <Route
            path="/"
            element={<Login setIsNavBarVisible={setIsNavbarVisible} />}
          />
          <Route path="/main/:id" element={<Main />} />
          <Route path="/companypage/:id" element={<CompanyPage />} />
        </Routes>
      </helpContext.Provider>
    </>
  );
}

export default App;
