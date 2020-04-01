import React from "react";

const UserCardList = props => {
  const { usersData } = props;
  return (
    <h1>
      {usersData.length > 0 ? (
        usersData.map(user => {
          return (
            <ul key={user}>
              <li>{/* <UserProfile userProfile={user} /> */}</li>
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
