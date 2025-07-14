import React from "react";

export default function BusinessCard({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.description}</p>
      <div>
        <h3>Intrests</h3>
        {user.intrests.map((intrest) => {
          return <div>{intrest}</div>;
        })}
      </div>
      <div>
        <h3>Intrests</h3>
        {user.socialMedia.map((social) => {
          return <button>{social}</button>;
        })}
      </div>
    </div>
  );
}
