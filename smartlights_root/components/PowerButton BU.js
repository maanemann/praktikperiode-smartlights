
"use client";

import { useState, useEffect } from "react";

const PowerButton = () => {

  // USEEFFECT SKAL VIST IND I USESTATE (SE MODUL 5,5 (SELVVALGT))

  const [power, setPower] = useState(false);

  useEffect(() => {
    const togglePower = async () => {
      try {
        const response = await fetch('https://192.168.8.100/api/iMyb2o8hAAYiGh7vImw1tL7kdAScaszqOAF91G6J/lights/53/state', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "on": power }),
        });

        if (!response.ok) {
          throw new Error('Error: There was a problem contacting the Philips Hue API');
        }

        // konverterer response til JSON :
        const data = await response.json();
        console.log(data);

        setPower((prevIsOn) => !prevIsOn);
      } catch (error) {
        console.error('Error with fetching data:', error.message);
      }
    };

    // togglePower();
  }, [power]);

  return ( <div
    onClick={() =>
      power == false
        ? setPower(true)
        : setPower(false)
    }
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
    {power == true ? "TURN OFF" : "TURN ON"}
  </div> );
}
 
export default PowerButton;