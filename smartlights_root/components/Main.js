
const Main = ({ content, animation, translate }) => {
  return ( <main className={`
    w-full
    h-full
    bg-[#f0eff2]
    p-4
    rounded-t-3xl
    duration-300
    ${translate}
    ${animation}
    `}>
      { content }
  </main> );
}
 
export default Main;