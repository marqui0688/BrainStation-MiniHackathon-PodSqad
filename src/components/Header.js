import bell from "../assets/icons/bell.svg";
import share from "../assets/icons/share.svg";
import threedot from "../assets/icons/threedot.svg";

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
        <img
          className="cover__img"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        ></img>
        <div className="cover__play">
          <p>2</p>
          <p>total plays</p>
        </div>
        <div className="cover__play">
          <p>2</p>
          <p>total plays</p>
        </div>
      </div>
      <p className="header">Helloz</p>
    </>
  );
};

export default Header;
