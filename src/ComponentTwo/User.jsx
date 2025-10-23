import React from "react";

function User({ user }) {
  return (
    <>
      <h1>
        My name is : {user.name} and {user.age}
      </h1>
    </>
  );
}
export default User;
