
const ColorOption = ({ className, onClick }) => {

  return ( <div
    onClick={onClick}
    className={`
      w-6
      aspect-square
      rounded-full
      ${ className }
  `} /> );
}
 
export default ColorOption;