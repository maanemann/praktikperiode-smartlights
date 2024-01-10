
import Main from "@/components/Main";
import ControlConent from "@/components/ControlContent";

export default function Home() {
  return (
      <Main translate="translate-y-16" animation={"animate-slide"} content={<ControlConent/>} />
  );
}
