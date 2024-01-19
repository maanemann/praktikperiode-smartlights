
import Link from "next/link";
import LightCount from "./LightCount";

const RoomNavLi = ({ caption }) => {
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
        <div className="
          w-10
          aspect-square
          bg-amber-300
          opacity-85
          rounded-md
        "></div>
        <figcaption>
          { caption }
          <LightCount />
        </figcaption>
      </figure>
    </Link>
  </li> );
}
 
export default RoomNavLi;