const ScenesLi = ({ sceneBgColor, sceneTitle }) => {
  return ( <li className={`
    grid
    w-32
    h-12

    text-center
    text-orange-950/70
    font-medium
    tracking-wide
    rounded-lg
    ${sceneBgColor}
  `}>
    <span className="m-auto">
      { sceneTitle }
    </span>
  </li> );
}
 
export default ScenesLi;