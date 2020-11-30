import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

const Friends = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("Friends data:", res);
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Delete = (id) => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then((res) => {
        setState(res.data);
      });
  };

  // console.log("this is state", state);
  return (
    <div>
      {state.map((friend) => (
         
        <FriendsList key={friend.id} friend={friend} Delete={Delete} />
      ))}
    </div>
  );
};

export default Friends;