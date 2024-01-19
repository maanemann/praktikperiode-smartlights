import ToolbarLi from "./ToolbarLi";

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
      gap-10
      p-4
      bg-[#fbf9f8]
      shadow-2xl
    "
    aria-label="Main menu"
  >
    <ToolbarLi />
    <ToolbarLi />
    <ToolbarLi />
  </nav> );
}
 
export default Toolbar;