const Lamp = ({ farve }) => {
  return ( <div className="
    grid
    fixed
    top-[-9.5rem]
    right-6 
  ">

    <div className="
      w-1
      h-12
      mx-auto
      bg-stone-200
    "></div>

    <div className="
      absolute
      right-4
      top-14
      w-1
      h-8
      -rotate-12
      bg-slate-400/70
      z-10
    "></div>

    <div style={{
      height: "3rem",
      width: "6rem",
      clipPath: 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 100%, 0% 100%)',
      backgroundColor: 'rgb(231, 229, 228)',
      borderRadius: '7px',
      zIndex: '10'
    }}></div>

    <div className={`
      w-6
      aspect-square
      border-2
      border-stone-400
      ${farve}
      bg-gradient-radial
      mx-auto
      -mt-3
      rounded-full
      drop-shadow-[0_0_1rem_white]
    `}></div>
  </div> );
}
 
export default Lamp;