
import H2 from "@/components/H2";
import RoomNavLi from "@/components/RoomNavLi";
import ProfilePic from "./ProfilePic";
import bedroom from "/public/rooms-icons/bedroom.svg";
import livingroom from "/public/rooms-icons/livingroom.svg";
import kitchen from "/public/rooms-icons/kitchen.svg";
import bathroom from "/public/rooms-icons/bathroom.svg";
import outdoor from "/public/rooms-icons/outdoor.svg";
import balcony from "/public/rooms-icons/balcony.svg";

const ControlConent = () => {
  return ( <div className="grid">
    <ProfilePic />
    <H2 content="All Rooms" />
      <nav className="
        flex
        flex-wrap
        w-full
        mx-auto
        justify-center
        gap-4
      ">
        <RoomNavLi icon={bedroom} caption="Bed Room" />
        <RoomNavLi icon={livingroom} caption="Living room" />
        <RoomNavLi icon={kitchen} caption="Kitchen" />
        <RoomNavLi icon={bathroom} caption="Bathroom" />
        <RoomNavLi icon={outdoor} caption="Outdoor" />
        <RoomNavLi icon={balcony} caption="Balcony" />
      </nav>
   </div> );
}

export default ControlConent;