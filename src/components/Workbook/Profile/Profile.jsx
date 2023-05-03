import { useState } from "react";
import userImg from "../../../assets/user-workbook.png";
import "./Profile.css";

const Profile = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="user__flex">
      <img className="header__user--workbook" src={userImg} alt="" />
      {/* <div className="user__info">
        <p>{props.userName}</p>
        <p>Dima</p>
        <p>score</p>
      </div> */}
    </div>
  );
};

export default Profile;
