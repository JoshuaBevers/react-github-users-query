import React from "react";

const UserCard = props => {
  const { userCard } = props;
  return (
    <div>
      HELLO THERE! {userCard.login}
      <img src={userCard.url} alt=""></img>
      {console.log(userCard)}
    </div>
  );
};

export default UserCard;
