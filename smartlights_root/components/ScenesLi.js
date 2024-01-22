
import Image from "next/image";
import sceneLight from "../public/room-icons/scene_light.svg"

const ScenesLi = ({ sceneBgColor, sceneTitle }) => {
  return ( <li className={`
    grid
    w-32
    h-12

    text-center
    text-white
    font-medium
    text-xs
    tracking-wide
    rounded-lg
    ${sceneBgColor}
  `}>
    <div className="
      flex
      m-auto
      gap-4
    ">
      <Image
        src={sceneLight}
        width={16}
        height={16}
      />
      <span>
        { sceneTitle }
      </span>
    </div>
  </li> );
}
 
export default ScenesLi;