import "./Display.css";
import "./AudioPlayer.css";
import "./MediaComponent/MediaComponent.css";
import logo from "../../images/thicklogo.svg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Marquee from "react-fast-marquee";
import SingleImage from "./SingleImage/SingleImage";
import MediaCompnent from "./MediaComponent/MediaComponent";
import Youtube from "react-youtube";

import React, { useState, useEffect } from "react";

// https://youtu.be/vzHEWLxGIig
// https://www.youtube.com/watch?v=vzHEWLxGIig&ab_channel=SlumpSounds

// vzHEWLxGIig

function Display({ objects }) {
  const [appState, setState] = useState({
    myObjects: objects,
    activeTitle: objects[0].title,
    activeImage: objects[0].image[0].mediaItemUrl,
    activeAudio: objects[0].audio.mediaItemUrl,
    activeMediaUrl: "vzHEWLxGIig&ab",
    activeSubTitle: "null",
    activeSubAudio: "null",
    activeSubMediaUrl: objects[0].items[0].itemurl,
    activeDescription: "",
  });

  const [setVisualOption, changeVisualOption] = useState(false);
  const [setAudioOption, changeAudioOption] = useState(false);
  const [setMediaOption, changeMediaOption] = useState(false);
  const [currIndexVal, setCurrIndexVal] = useState();

  function toggleActive(index, trackIndex) {
    setState({
      ...appState,
      activeTitle: appState.myObjects[index].title,
      activeImage: appState.myObjects[index].image[0].mediaItemUrl,
      activeAudio: appState.myObjects[index].audio.mediaItemUrl,
      activeDescription: appState.myObjects[index].projectDescription,
      activeMediaUrl: appState.myObjects[index].mediastreamurl,
      activeSubTitle: appState.myObjects[index].items[trackIndex].itemtitle,
      activeSubAudio:
        appState.myObjects[index].items[trackIndex].itemaudio.mediaItemUrl,
      activeSubMediaUrl: appState.myObjects[index].items[trackIndex].itemurl,
    });
  }

  function itemTitle(index) {
    if (appState.myObjects[index].title === appState.activeTitle) {
      return "itemTitle active";
    } else {
      return "itemTitle";
    }
  }

  // function subMenu() {
  //   return currIndexVal;
  // console.log(currIndexVal);
  // }

  function itemSubTitle(items, trackIndex) {
    if (
      appState.myObjects[items].items[trackIndex].itemtitle ===
      appState.activeSubTitle
    ) {
      return "itemSubTitle active";
    } else {
      return "itemSubTitle";
    }
  }

  useEffect(() => {
    changeVisualOption(appState.activeImage.includes("null"));
    changeAudioOption(appState.activeSubAudio.includes("null"));
    changeMediaOption(appState.activeSubMediaUrl.includes("null"));
    console.log(appState.mediaItemUrl);
  }, [appState]);

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
                  className={itemTitle(index)}
                  onClick={() => {
                    toggleActive(index, 0);
                    setCurrIndexVal(index);
                  }}
                >
                  {element.title}
                </div>
                <div className={"subMenu"}>
                  {currIndexVal === index
                    ? element.items.map((items, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={itemSubTitle(index, itemIndex)}
                          onClick={() => {
                            toggleActive(index, itemIndex);
                          }}
                        >
                          {items.itemtitle === "null" ? null : items.itemtitle}
                        </div>
                      ))
                    : null}
                </div>
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
            setMediaOption ? (
              <MediaCompnent
                activeMedia={appState.activeMediaUrl}
                activeDescription={appState.activeDescription}
              ></MediaCompnent>
            ) : (
              <MediaCompnent
                activeMedia={appState.activeSubMediaUrl}
                activeDescription={appState.activeDescription}
              ></MediaCompnent>
            )
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
