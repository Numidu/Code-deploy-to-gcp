import React, { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GetUser() {
  const [user, getUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8084/user/get")
      .then((response) => {
        getUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  }, []);

  return (
    <div>
      {user.length == 0 ? (
        <p>No user Found</p>
      ) : (
        user.map((usr) => (
          <li key={usr.id}>
            Name: {usr.name}, Email: {usr.email}
          </li>
        ))
      )}
    </div>
  );
}
