import "./Body.scss";
import play from "../assets/icons/videoplay.png";
import threedot from "../assets/icons/threedot.svg";
import share from "../assets/icons/share.svg";
import arrow from "../assets/icons/arrow.png";

const Body = () => {
  return (
    <>
      <div className="subheader">
        <div className="subheader__episode">
          <p>Episodes</p>
        </div>
        <p>Episodes</p>
      </div>
      <p className="trailerheader">Podcast trailer</p>
      <div className="trailer-container">
        <div className="trailer-subcontainer">
          <img className="trailer-play" src={play}></img>
          <div>
            <p>HelloZ Trailer</p>
            <p>18 hours ago 00:03</p>
          </div>
        </div>
        <img className="trailer-threedot" src={threedot}></img>
      </div>
      <p className="trailerheader">Podcast trailer</p>

      <div className="episode-container">
        <div className="episode-subcontainer">
          <img
            className="episode-play"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          ></img>
          <div>
            <p>HelloZ episode</p>
            <p>18 hours ago 00:03</p>
          </div>
        </div>
        <div className="episode-icon-container">
          <img className="episode-threedot" src={arrow}></img>
          <img className="episode-threedot" src={share}></img>
        </div>
      </div>
      <hr></hr>
      <div className="episode-container">
        <div className="episode-subcontainer">
          <img
            className="episode-play"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          ></img>
          <div>
            <p>HelloZ episode</p>
            <p>18 hours ago 00:03</p>
          </div>
        </div>
        <div className="episode-icon-container">
          <img className="episode-threedot" src={arrow}></img>
          <img className="episode-threedot" src={share}></img>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Body;
