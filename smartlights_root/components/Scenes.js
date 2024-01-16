import ScenesLi from "@/components/ScenesLi";

const Scenes = () => {
  return ( <ul className="
      flex
      flex-wrap
      w-full
      mx-auto
      justify-center
      gap-6
    ">
    <ScenesLi sceneTitle="Birthday" sceneBgColor="bg-red-400" />
    <ScenesLi sceneTitle="Party" sceneBgColor="bg-fuchsia-400" />
    <ScenesLi sceneTitle="Relaxx" sceneBgColor="bg-cyan-400" />
    <ScenesLi sceneTitle="Fun" sceneBgColor="bg-green-400" />
  </ul>);
}

export default Scenes;
