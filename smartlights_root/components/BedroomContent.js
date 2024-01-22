
"use client"

import ColorPanel from "./ColorPanel";
import Colors from "./Colors";
import Intensity from "./Intensity";
import Lamp from "./Lamp";
import PowerButton from "./PowerButton";
import Scenes from "./Scenes";
import { useState } from "react";

const BedroomContent = () => {
  const [farve, setFarve] = useState(null)
  const [powered, setPowered] = useState();

  let body = { on: powered };

  const handlePowerToggle = () => {
    setPowered(!powered);
    const url = 'https://192.168.8.100/api/MERbL3HD4ichJSQKq4TXtazG7tEPsyCWDl73HJDR/lights/53/state/';

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
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
    <Lamp farve={farve} />
    <PowerButton onClick={handlePowerToggle} />
    <ColorPanel
      content="Intencity"
      colorContent={<Intensity />}
    />
    <ColorPanel
      content="Colors"
      colorContent={
        <Colors
          setFarve={setFarve}
          handleRedColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":65000};
            handlePowerToggle();
          }}
          handleGreenColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":17000};
            handlePowerToggle();
          }}
          handleCyanColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":35000};
            handlePowerToggle();
          }}
          handleVioletColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":48000};
            handlePowerToggle();
          }}
          handleFuchsiaColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":60000};
            handlePowerToggle();
          }}
          handleOrangeColor={() => {
            body = {"on":true, "sat":254, "bri":254,"hue":3000};
            handlePowerToggle();
          }}
      />}
    />
    <ColorPanel
      content="Scenes"
      colorContent={<Scenes />}
    />
  </> );
}

export default BedroomContent;
