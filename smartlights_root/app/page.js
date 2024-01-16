
import Main from "@/components/Main";
import ControlConent from "@/components/ControlContent";

export default function Home() {
  return (
      <Main translate="translate-y-0" animation={"animate-slideReverse"} content={<ControlConent/>} />
  );
}
