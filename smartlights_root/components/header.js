"use client"

import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState('Control Panel')

  function updateTitle() {
    setTitle("Bed Room")
  }
  
  return (
    <h2 onClick={updateTitle}> { title }</h2>
  );
}
 
export default Header;