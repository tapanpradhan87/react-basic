import React from "react";
import "../user/UserComponent.css";
function UserComponent() {
  const userList = [
    {
      firstName: "Talan",
      lastName: "Dias",
      position: "UX Designer",
      isCertified: true,
    },
    {
      firstName: "Talan",
      lastName: "Dias",
      position: "UX Designer",
      isCertified: false,
    },
    {
      firstName: "Talan",
      lastName: "Dias",
      position: "UX Designer",
      isCertified: true,
    },
    {
      firstName: "Talan",
      lastName: "Dias",
      position: "UX Designer",
      isCertified: false,
    },
  ];
  return userList.map((item) => {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <img
            src="https://i.imgur.com/bZBG9PE.jpg"
            alt="ProfileImage"
            className="profile-icon"
          />
          <div className="checkbox-container">
            <div className="round">
              <input
                type="checkbox"
                defaultChecked={item.isCertified}
                id="checkbox-certified"
              />
              <label htmlFor="checkbox-certified"></label>
            </div>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-name">
            {item.firstName} {item.lastName}
          </div>
          <div className="profile-position">{item.position}</div>
        </div>
      </div>
    );
  });
}

export default UserComponent;
