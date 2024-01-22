
import Image from "next/image";
import intDown from "../public/room-icons/int_down.svg"
import intUp from "../public/room-icons/int_up.svg"
import Streg from "./Streg";

const Intensity = () => {
  return ( <div className="
    w-full
    flex
  ">
    <Image
      className="inline"
      src={intDown}
      width={16}
      height={16}
    />
    <input
      type="range"      step="1"
      id="intensity"    name="intensity"
      min="0"           max="5"
      className="
        inline
        mx-auto
      "
    />
    <Image
      className="
        inline
        justify-end
      "
      src={intUp}
      width={16}
      height={16}
    />
    <br />
    <div className="
      absolute
      top-[4.6rem]
      flex
      gap-[2.4rem]
      left-[50%]
      translate-x-[-50%]
    ">
      <Streg />
      <Streg />
      <Streg />
      <Streg />
      <Streg />
      <Streg />
    </div>
  </div> );
}

export default Intensity;
