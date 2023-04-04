import "./PodcastList.scss";
import meow from "../assets/meow.jpeg";

export const PodcastList = () => {
  return (
    <>
      <div className="podcast-list__container">
        <h3 className="podcast-list__title">Share</h3>
        <p className="podcast-list__subheader">Choose a clip</p>
        <div className="podcast-list__sidebar">
          <img className="podcast-list__img" src={meow} alt="analytics-icon" />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">Name of Episode</p>
            <p className="podcast-list__name">Podcast Name</p>
          </div>
        </div>
        <div className="podcast-list__sidebar">
          <img className="podcast-list__img" src={meow} alt="analytics-icon" />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">Name of Episode</p>
            <p className="podcast-list__name">Podcast Name</p>
          </div>
        </div>
        <div className="podcast-list__sidebar">
          <img className="podcast-list__img" src={meow} alt="analytics-icon" />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">Name of Episode</p>
            <p className="podcast-list__name">Podcast Name</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PodcastList;
