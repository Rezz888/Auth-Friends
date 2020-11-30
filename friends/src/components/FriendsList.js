import React from "react";


const FriendsList = (props) => {
    
    // console.log(props.friend);

    return (
        <div>
          
            <p>{props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
              <button
                onClick={() => {
                  props.Delete(props.friend.id);
                }}
              >
                Delete
              </button>
          
        </div>
      ); 

}

export default FriendsList;