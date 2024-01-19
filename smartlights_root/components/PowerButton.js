
"use client";

import { useState } from "react";

const PowerButton = ({ onClick }) => {

  return ( <div
    onClick={onClick}
    className="
      ml-auto
      text-sm
      bg-white
      text-red-500
      h-6
      aspect-square
      font-medium
      p-1
      text-center
      rounded-full
      -mt-7
      shadow-xl
      cursor-pointer
    ">
      ⏻
    {/* {powered == true ? "TURN OFF" : "TURN ON"} */}
  </div> );
}
 
export default PowerButton;


// Dybt forvirret/forvirrende nonsenskode kopieret inde fra ColorOption.js, tror jeg :

// let colorBody;
  // const [color, setColor] = useState();
  // function redColor() {
  //   colorBody = {"on":true, "sat":254, "bri":254,"hue":0}
  // };

  // const handleColorChange = () => {
  //   setColor(color);

  //   const url = 'https://192.168.8.100/api/iMyb2o8hAAYiGh7vImw1tL7kdAScaszqOAF91G6J/lights/53/state/';
  //   // const body = {"on":true, "sat":254, "bri":254,"hue":0};

  //   fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(colorBody),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Light state was set to:', data);
  //     })
  //     .catch(error => {
  //       console.error('Congratz, you got this error:', error);
  //     });
  // };