import "./Display.css";
import "./AudioPlayer.css";
import logo from "../../images/thicklogo.svg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Marquee from "react-fast-marquee";

import React, { useState, useEffect } from "react";
import SingleImage from "./SingleImage/SingleImage";
import MediaCompnent from "./MediaComponent/MediaComponent";

function Display({ objects }) {
  const [appState, changeState] = useState({
    activeTitle: "null",
    activeImage: objects[0].image[0].mediaItemUrl,
    activeAudio: "null",
    activeSubAudio: "null",
    activeMediaUrl: "null",
    activeSubMediaUrl: "null",
    myObjects: objects,
  });

  const [tempAudio, setTempAudio] = useState("mario");

  const [setAudioOption, changeAudioOption] = useState(false);
  const [setVisualOption, changeVisualOption] = useState(false);
  const [setMediaOption, changeMediaOption] = useState(false);

  function toggleActive(index, trackIndex) {
    changeState({
      ...appState,
      activeTitle: appState.myObjects[index].title,
      activeImage: appState.myObjects[index].image[0].mediaItemUrl,
      activeDescription: appState.myObjects[index].projectDescription,
      activeMediaUrl: appState.myObjects[index].mediastreamurl,
      activeSubMediaUrl: appState.myObjects[index].items[trackIndex].itemurl,
      activeAudio: appState.myObjects[index].audio.mediaItemUrl,
      activeSubAudio:
        appState.myObjects[index].items[trackIndex].itemaudio.mediaItemUrl,
      activeSubTrack: appState.myObjects[index].items[trackIndex].itemtitle,
    });

    changeAudioOption(appState.activeSubAudio.includes("null"));
    changeVisualOption(appState.activeImage.includes("null"));
    changeMediaOption(appState.activeSubMediaUrl.includes("null"));

    setTempAudio(appState.activeAudio);
  }

  function toggleActiveHeading(index) {
    if (appState.myObjects[index].title === appState.activeTitle) {
      return "display-item active";
    } else {
      return "display-item inactive";
    }
  }

  function toggleActiveSubHeading(index) {
    if (appState.myObjects[index].title === appState.activeTitle) {
      return "display-item-menu activeMenu";
    } else {
      return "display-item-menu ";
    }
  }

  function toggleActiveItem(index, trackIndex) {
    if (
      appState.myObjects[index].items[trackIndex].itemtitle ===
      appState.activeSubTrack
    ) {
      return "display-list-track active";
    } else {
      return "display-list-track";
    }
  }

  useEffect(() => {
    // console.log(tempAudio);
  }, []);

  return (
    <div className="display-main">
      <div className="outer-grid">
        <div className="left-grid">
          <div className="display-title">
            <img className="logo-item" src={logo}></img>
          </div>
          <div className="display-heading-menu">
            {appState.myObjects.map((element, index) => (
              <>
                <div
                  key={index}
                  className={toggleActiveHeading(index)}
                  onClick={() => {
                    toggleActive(index, 0);
                  }}
                >
                  {element.title}
                </div>
                {element.items.map((items, itemIndex) => (
                  <div className={toggleActiveSubHeading(index)}>
                    <div
                      key={itemIndex}
                      className={toggleActiveItem(index, itemIndex)}
                      onClick={() => {
                        toggleActive(index, itemIndex);
                      }}
                    >
                      {items.itemtitle === "null" ? null : items.itemtitle}
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
          <div className="display-current-title">
            <Marquee speed={25} gradient={false}>
              <div className="scrolling-display">
                <mark>{appState.activeTitle}</mark>
              </div>
            </Marquee>
          </div>
          <div className="content-player">
            {setAudioOption ? (
              <AudioPlayer autoPlay={false} src={appState.activeAudio} />
            ) : (
              <AudioPlayer autoPlay={false} src={appState.activeSubAudio} />
            )}
          </div>
        </div>
        <div className="right-grid">
          {setVisualOption ? (
            <MediaCompnent
              activeMedia={appState.activeMediaUrl}
              activeDescription={appState.activeDescription}
            ></MediaCompnent>
          ) : (
            <SingleImage
              activeImage={appState.activeImage}
              activeDescription={appState.activeDescription}
            ></SingleImage>
          )}
        </div>
      </div>
    </div>
  );
}

export default Display;
