import ColorContent from "./ColorContent";
import H2 from "./H2";

const ColorPanel = ({ content, colorContent }) => {
  return ( <section className="
      mb-8
    ">
    <H2 content={ content } />
    <ColorContent colorContent={ colorContent } />
  </ section> );
}

export default ColorPanel;
