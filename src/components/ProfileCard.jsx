import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  }; 

  return (
    <div style={styles}>
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum
        asperiores alias magnam vel soluta cumque, maiores nam quae amet
        corporis exercitationem, assumenda, itaque modi delectus sapiente
        mollitia ipsum voluptas.
      </p>
    </div>
  );
};

export default ProfileCard;
