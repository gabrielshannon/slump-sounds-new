import "./SingleImage.css";

function SingleImage({ activeImage, activeDescription }) {
  return (
    <div className="media-item">
      <div className="media-image-box">
        <div className="media-title-box">
          <div className="media-title">SLMP:006</div>
        </div>
        <img className="temp-photo" src={activeImage}></img>
      </div>
      <div className="media-description">{activeDescription}</div>
    </div>
  );
}

export default SingleImage;
