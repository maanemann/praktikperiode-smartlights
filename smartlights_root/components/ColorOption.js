const ColorOption = ({ color }) => {
  return ( <div className={`
    w-6
    aspect-square
    rounded-full
    ${ color }
  `} /> );
}
 
export default ColorOption;