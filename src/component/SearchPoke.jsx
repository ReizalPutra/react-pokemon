import React from "react";

function SearchPoke() {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="border-2 border-black rounded p-2 justify-center align-middle w-1/2 my-4"
        placeholder="Find Pokemon, example...pikachu"
      
      ></input>
    </div>
  );
}

export default SearchPoke;
