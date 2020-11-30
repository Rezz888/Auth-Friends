import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const AddFriends = (props) => {
  const [state, setState] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });
  const handlechanges = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addAFriend = (e) => {
    e.preventDefault();
    console.log("this is add Friend", state);
    axiosWithAuth()
      .post("/friends", state)
      .then((res) => {
        // console.log('API end point returned new friend data', res);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };
  // console.log(state);
  return (
    <form noValidate autoComplete="off" onSubmit={addAFriend}>
      <div>
        <h1>Add A Friend</h1>
        <input
          id="standard-basic"
          label="Name"
          name="name"
          value={state.name}
          onChange={handlechanges}
        />
    
        <input
          id="standard-basic"
          label="Age"
          name="age"
          value={state.age}
          onChange={handlechanges}
        />
        
        <input
          id="standard-basic"
          label="Email"
          name="email"
          value={state.email}
          onChange={handlechanges}
        />
        
        <button variant="contained" onClick={addAFriend}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default AddFriends;