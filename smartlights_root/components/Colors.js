
"use client";

import ColorOption from "./ColorOption";

const Colors = ({ handleRedColor, handleGreenColor, handleCyanColor, handleVioletColor, handleFuchsiaColor, handleOrangeColor }) => {

  return (
    <div className="
      flex
      gap-4
    ">
      <ColorOption
        onClick={handleRedColor}
        className="bg-red-400 cursor-pointer"
      />
      {/* <ColorOption
        onClick={() => {setFarve("bg-red-400")}}
        className="bg-red-400 cursor-pointer"
      /> */}
      <ColorOption
        onClick={handleGreenColor}
        className="bg-green-400 cursor-pointer"
      />
      <ColorOption
        onClick={handleCyanColor}
        className="bg-cyan-500 cursor-pointer"
      />
      <ColorOption
        onClick={handleVioletColor}
        className="bg-violet-500 cursor-pointer"
      />
      <ColorOption
        onClick={handleFuchsiaColor}
        className="bg-fuchsia-400 cursor-pointer"
      />
      <ColorOption
        onClick={handleOrangeColor}
        className="bg-orange-400 cursor-pointer"
      />
      <div className="
        w-6
        aspect-square
        text-blue-950
        rounded-full
        bg-white
        text-center
        leading-snug
        cursor-not-allowed
      ">
        +
      </div>
    </div>
  );
}
 
export default Colors;