// js
import React from "react";
import YouTube from "react-youtube";
import "./MediaComponent.css";

class MediaCompnent extends React.Component {
  _onReady(event) {
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: "560",
      width: "700",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="media-area">
        <div className="video-box">
          <div className="video-title">SLMP:006</div>

          <YouTube
            videoId={this.props.activeMedia}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className="media-description-area">
          {this.props.activeDescription}
        </div>
      </div>
    );
  }
}

export default MediaCompnent;
