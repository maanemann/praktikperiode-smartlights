"use client";

import { useState } from "react";
import ProfilePic from "./ProfilePic";

// Kig ulvetime burger menu states

const Header = () => {
  const [title, setTitle] = useState("Control Panel");

  function updateTitle() {
    setTitle("Bed Room");
  }

  return ( <header className="
    grid
    grid-flow-col
    m-4
    h-fit
  ">
    <h2 onClick={updateTitle}> {title}</h2>
    <ProfilePic />
  </header> );
};

export default Header;
