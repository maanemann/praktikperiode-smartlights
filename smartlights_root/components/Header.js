"use client";

import { useState } from "react";
import ProfilePic from "./ProfilePic";
import Link from "next/link";

// Kig ulvetime burger menu states

const Header = () => {
  const [title, setTitle] = useState("Control Panel");

  function updateTitle() {
    setTitle("");
  }

  return ( <header className="
    grid
    grid-flow-col
    m-4
    h-fit
  ">
    <Link href="/">
      <h1 onClick={() =>
          title == "Control Panel"
            ? setTitle("Bed Room")
            : setTitle("Control Panel")
      }>
        { title }
      </h1>
    </Link>
    <ProfilePic />
  </header> );
};

export default Header;
