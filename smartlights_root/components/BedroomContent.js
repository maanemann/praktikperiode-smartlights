import ColorPanel from "./ColorPanel";
import Colors from "./Colors";
import Intensity from "./Intensity";
import Lamp from "./Lamp";
import PowerButton from "./PowerButton";
import Scenes from "./Scenes";

const BedroomContent = () => {
  return ( <>
    <Lamp />
    <PowerButton />
    <ColorPanel
      content="Intencity"
      colorContent={<Intensity />}
    />
    <ColorPanel
      content="Colors"
      colorContent={<Colors />}
    />
    <ColorPanel
      content="Scenes"
      colorContent={<Scenes />}
    />
  </> );
}

export default BedroomContent;
