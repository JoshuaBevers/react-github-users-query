import React from "react";
import UserCard from "./UserCard";

const UserCardList = props => {
  const { usersData } = props;
  return (
    <h1>
      {usersData.length > 0 ? (
        usersData.map(user => {
          return (
            <ul key={user.id}>
              <li>
                <UserCard userCard={user} />
              </li>
            </ul>
          );
        })
      ) : (
        <p> You got jack in that ternary, bud.</p>
      )}
    </h1>
  );
};

export default UserCardList;
