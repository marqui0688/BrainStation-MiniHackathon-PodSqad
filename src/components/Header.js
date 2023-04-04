import bell from "../assets/icons/bell.svg";
import share from "../assets/icons/share.svg";
import threedot from "../assets/icons/threedot.svg";
import cover from "../assets/cover.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="icon__container">
        <img className="icon" src={bell}></img>
        <img className="icon" src={share}></img>
        <img className="icon" src={threedot}></img>
      </div>
      <div className="cover">
        <img className="cover__img" src={cover}></img>
        <div className="cover__play">
          <p>355</p>
          <p>total plays</p>
        </div>
        <div className="cover__play">
          <p>237</p>
          <p>total plays</p>
        </div>
      </div>
      <p className="header">Cryptid Creatures</p>
    </>
  );
};

export default Header;
