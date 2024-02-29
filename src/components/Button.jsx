import React from "react";

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 mt-4 px-4 rounded inline-block relative"
    >
      {text}
    </a>
  );
};

export default Button;