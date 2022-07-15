// js
import React from "react";
import YouTube from "react-youtube";

class MediaCompnent extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: "560",
      width: "700",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div className="media-area">
        <YouTube
          videoId={this.props.activeMedia}
          opts={opts}
          onReady={this._onReady}
        />
        <div className="media-description-area">
          {this.props.activeDescription}
        </div>
      </div>
    );
  }
}

export default MediaCompnent;
