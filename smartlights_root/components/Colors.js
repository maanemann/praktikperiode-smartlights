
"use client";

import { useState } from "react";
import ColorOption from "./ColorOption";

const Colors = () => {

  let colorBody;
  const [color, setColor] = useState();
  function redColor() {
    colorBody = {"on":true, "sat":254, "bri":254,"hue":0}
  };

  const handleColorChange = () => {
    setColor(color);

    const url = 'https://192.168.8.100/api/iMyb2o8hAAYiGh7vImw1tL7kdAScaszqOAF91G6J/lights/53/state/';
    // const body = {"on":true, "sat":254, "bri":254,"hue":0};

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(colorBody),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Light state was set to:', data);
      })
      .catch(error => {
        console.error('Congratz, you got this error:', error);
      });
  };

  return ( <>
    <div className="
      flex
      gap-4
    ">
      <div
        onClick={redColor}
      >
      {/* <div
        onClick={handleColorChange; colorBody = {"on":true, "sat":254, "bri":254,"hue":0}}
      > */}
        <ColorOption
          color="bg-red-400"
        />
      </div>
      <ColorOption color="bg-green-400" />
      <ColorOption color="bg-cyan-500" />
      <ColorOption color="bg-violet-500" />
      <ColorOption color="bg-fuchsia-400" />
      <ColorOption color="bg-orange-400" />
      <div className="
        w-6
        aspect-square
        text-lime-200/90
        rounded-full
        bg-emerald-900
        text-center
        leading-snug
      ">
        +
      </div>
    </div>
  </> );
}
 
export default Colors;