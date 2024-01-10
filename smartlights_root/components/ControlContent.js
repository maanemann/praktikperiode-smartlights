
import H2 from "@/components/H2";
import RoomNavLi from "@/components/RoomNavLi";

const ControlConent = () => {
  return ( <>
    <H2 content="All Rooms" />
      <nav className="
        flex
        flex-wrap
        w-full
        mx-auto
        justify-center
        gap-4
      ">
        <RoomNavLi caption="Bed Room" />
        <RoomNavLi caption="Living room" />
        <RoomNavLi caption="Kitchen" />
        <RoomNavLi caption="Bathroom" />
        <RoomNavLi caption="Outdoor" />
        <RoomNavLi caption="Balcony" />
      </nav>
   </> );
}

export default ControlConent;