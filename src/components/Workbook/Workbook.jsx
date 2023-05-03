import HeaderPage from "./Header/HeaderPage";
import "./Workbook.css";
import AfterWatching from "./AfterWatching/AfterWatching";
import BeforeWatching from "./BeforeWatching/BeforeWatching";
import WhileWatching from "./WhileWatching/WhileWatching";
import { useSelector } from "react-redux";
import { useState } from "react";
import Login from "./Login/Login";
import { useEffect } from "react";
const Workbook = function () {
  const state = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogIn = localStorage.getItem("isLoggedIn");
    if (storedLogIn === "1") {
      setIsLoggedIn(true);
    }
  });
  let userName = "";
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    userName = email;
    console.log(email, userName);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="workbook__wrapper">
      <HeaderPage
        userName={userName}
        isLoggedIn={isLoggedIn}
        onLogout={logoutHandler}
      />
      <div className="content__workbook">
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && (
            <>
              <BeforeWatching state={state} />
              <WhileWatching state={state} />
              <AfterWatching state={state} />
              <div style={{ height: "20px" }}></div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Workbook;
