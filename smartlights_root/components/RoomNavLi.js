
import Link from "next/link";
import Image from "next/image";
import LightCount from "./LightCount";

const RoomNavLi = ({ caption, icon }) => {
  return ( <li className="
    w-32
    aspect-square
    list-none
    bg-[#fbf9f8]
    p-4
    rounded-2xl
    grid
    shadow-md
  ">
    <Link href="/bedroom">
      <figure className="
        grid
        h-full
        w-full
        [&_div]:
        [&_div]:
        [&_figcaption]:self-end
        [&_span]:self-end
      ">
        <Image
          src={icon}
          width={40}
          height={40}
          alt="icon"
        />
        {/* <img
          src="/public/rooms-icons/kitchen.png"
          className="
            w-10
            aspect-square
            opacity-85
            rounded-md
        "></img> */}
        <figcaption>
          { caption }
          <LightCount />
        </figcaption>
      </figure>
    </Link>
  </li> );
}
 
export default RoomNavLi;