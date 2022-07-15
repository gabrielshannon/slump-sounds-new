import "./Display.css";
import "./AudioPlayer.css";
import kindred from "../../images/gifkindred2.gif";
import archie from "../../images/archie.jpg";
import logo from "../../images/thicklogo.svg";
import AudioPlayer from "react-h5-audio-player";
import Marquee from "react-fast-marquee";
import "react-h5-audio-player/lib/styles.css";
import { ReactComponent as playPause } from "../../images/Asset1.svg";
import React, { useState } from "react";
import { objects } from "./Items.js";

function Menu() {
  const [itemState, changeItemState] = useState({
    activeObject: null,
    objects,
  });

  const [trackState, changeTrackState] = useState({
    activeObject: null,
    objects,
  });

  function toggleActiveTrack(index, trackIndex) {
    changeTrackState({
      ...trackState,
      activeObject: trackState.objects[index].items[trackIndex],
    });
  }

  function toggleActive(index, trackIndex) {
    changeItemState({ ...itemState, activeObject: itemState.objects[index] });
    // console.log(itemState);
  }

  function toggleActiveItemStyles(index, trackIndex) {
    if (
      trackState.objects[index].items[trackIndex] === trackState.activeObject
    ) {
      return "display-list-track active2";
    } else {
      return "display-list-track inactive";
    }
  }

  function toggleActiveStyles(index) {
    if (itemState.objects[index] === itemState.activeObject) {
      return "display-item active";
    } else {
      return "display-item inactive";
    }
  }

  function toggleActiveMenu(index) {
    if (itemState.objects[index] === itemState.activeObject) {
      return "display-list-menu activeMenu";
    } else {
      return "display-list-menu";
    }
  }

  return (
    <div className="display-item-menu">
      {itemState.objects.map((elements, index) => (
        <div key={index} className="menu-box">
          <div className={toggleActiveStyles(index)}>{elements.title}</div>

          <div className={toggleActiveMenu(index)}>
            {elements.items.map((track, trackIndex) => (
              <div
                className={toggleActiveItemStyles(index, trackIndex)}
                onClick={() => {
                  toggleActiveTrack(index, trackIndex);
                }}
              >
                {track.item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
