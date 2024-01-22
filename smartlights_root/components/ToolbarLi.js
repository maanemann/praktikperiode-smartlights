
import Image from "next/image";

const ToolbarLi = ({ src, h }) => {
  return ( <li className="
    h-7
  ">
    <Image
      src={ src }
      width="auto"
      height={h}
    />
  </li> );
}
 
export default ToolbarLi;