import React from "react";

const ShowPet = ({ imgpet }) => {
  return (
    <div className="mt-12 mx-10">
      <img src={imgpet} className="w-80 h-96 m-auto" alt="img" />
    </div>
  );
};

export default ShowPet;
