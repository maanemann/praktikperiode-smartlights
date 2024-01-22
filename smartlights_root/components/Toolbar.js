
import ToolbarLi from "./ToolbarLi";
import bulb from "../public/toolbar-icons/bulb.svg"
import home from "../public/toolbar-icons/home.svg"
import settings from "../public/toolbar-icons/settings.svg"

const Toolbar = () => {
  return ( <nav
    className="
      main-nav
      flex
      list-none
      fixed
      bottom-0
      left-[50%]
      translate-x-[-50%]
      w-screen
      justify-center
      gap-12
      p-4
      bg-[#fbf9f8]
      shadow-2xl
    "
    aria-label="Main menu"
  >
    <ToolbarLi
      src={bulb}
      h={25}
    />
    <ToolbarLi
      src={home}
      h={28}
    />
    <ToolbarLi
      src={settings}
      h={28}
    />
  </nav> );
}
 
export default Toolbar;