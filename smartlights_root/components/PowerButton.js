
"use client";

import { useState } from "react";

const PowerButton = () => {

  const [powered, setPowered] = useState(false);

  const handlePowerToggle = () => {
    setPowered(!powered);

    const url = 'https://192.168.8.100/api/iMyb2o8hAAYiGh7vImw1tL7kdAScaszqOAF91G6J/lights/53/state/';
    const body = !powered;

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({on: body}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Light state was set to:', data);
      })
      .catch(error => {
        console.error('Congratz, you got this error:', error);
      });
  };

  return ( <div
    onClick={handlePowerToggle}
    className="
      ml-auto
      text-sm
      bg-emerald-900
      text-lime-200/90
      w-28
      font-medium
      py-1
      px-3
      text-center
      rounded-xl
      cursor-pointer
    ">
    {powered == true ? "TURN OFF" : "TURN ON"}
  </div> );
}
 
export default PowerButton;