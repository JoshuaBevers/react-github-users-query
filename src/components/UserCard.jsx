import React from "react";

const UserCard = props => {
  const { userCard } = props;
  return (
    <div>
      HELLO THERE! {userCard.login}
      <br></br> <img src={userCard.avatar_url} alt=""></img>
      {console.log(userCard)}
    </div>
  );
};

export default UserCard;
