import "./Body.scss";
import play from "../assets/icons/videoplay.png";
import threedot from "../assets/icons/threedot.svg";
import share from "../assets/icons/share.svg";
import arrow from "../assets/icons/arrow.png";
import cover from "../assets/cover.png";

const Body = ({ setModal }) => {
  const shareHandler = () => {
    setModal(true);
  };

  return (
    <>
      <div className="subheader">
        <div className="subheader__episode">
          <p>Episodes</p>
        </div>
        <p>Money</p>
      </div>
      <p className="trailerheader">Podcast trailer</p>
      <div className="trailer-container">
        <div className="trailer-subcontainer">
          <img className="trailer-play" src={play}></img>
          <div>
            <p>Cryptid Creatures (Trailer)</p>
            <p>10 hours ago 00:20</p>
          </div>
        </div>
        <img className="trailer-threedot" src={threedot}></img>
      </div>
      <p className="trailerheader">Podcast trailer</p>

      <div className="episode-container">
        <div className="episode-subcontainer">
          <img className="episode-play" src={cover}></img>
          <div>
            <p>Bigfoot on the Bridge EP.115</p>
            <p>12 hours ago 12:55</p>
          </div>
        </div>
        <div className="episode-icon-container">
          <img className="episode-threedot" src={arrow}></img>
          <img
            onClick={shareHandler}
            className="episode-threedot"
            src={share}
          ></img>
        </div>
      </div>
      <hr></hr>
      <div className="episode-container">
        <div className="episode-subcontainer">
          <img className="episode-play" src={cover}></img>
          <div>
            <p>The Eyes Were Fiery Red EP.117</p>
            <p>17 hours ago 02:10</p>
          </div>
        </div>
        <div className="episode-icon-container">
          <img className="episode-threedot" src={arrow}></img>
          <img
            onClick={shareHandler}
            className="episode-threedot"
            src={share}
          ></img>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Body;
