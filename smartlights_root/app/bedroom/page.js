
import Main from "@/components/Main";
import BedroomContent from "@/components/BedroomContent";

export default function Bedroom() {
  return (
      <Main translate="translate-y-16" animation={"animate-slide"} content={<BedroomContent/>} />
  );
}
