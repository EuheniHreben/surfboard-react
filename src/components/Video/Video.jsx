import "./Video.scss";
import { useRef } from "react";
import { useState } from "react";
import videoFile from "../../assets/video/videoplayback.mp4";
import playerPoster from "../../assets/images/player.jpg";
import playIcon from "../../assets/svg/play.svg";
import volumeIcon from "../../assets/svg/volume.svg";

function formatTime(time) {
  if (!Number.isFinite(time) || time < 0) {
    return "0:00";
  }

  const totalSeconds = Math.floor(time);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(10);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const playStop = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (video.volume > 0) {
      setPreviousVolume(video.volume);
      video.volume = 0;
      setVolume(0);
      setIsMuted(true);
    } else {
      video.volume = previousVolume;
      setVolume(previousVolume * 10);
      setIsMuted(false);
    }
  };

  return (
    <section
      className="video section"
      data-section-id="video"
      data-fixed-menu-theme="white"
    >
      <div className="container video-container">
        <h2>Как мы работаем</h2>
        <div className="video__wrapper">
          <div className="video__player">
            <video
              ref={videoRef}
              src={videoFile}
              poster={playerPoster}
              className="video__player-video"
              preload="none"
              onClick={playStop}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={() => {
                setDuration(videoRef.current.duration);
              }}
              onTimeUpdate={() => {
                setCurrentTime(videoRef.current.currentTime);
              }}
            />
            <button
              className={`play video__player-img ${isPlaying ? "video__player-img--active" : ""}`}
              type="button"
              onClick={playStop}
            >
              <img
                src={playIcon}
                alt="video-play"
                className="play video__btn-img"
              />
            </button>
          </div>
          <div className="video__toolbar">
            <div className="duration">
              <button
                type="button"
                className="duration__btn-wrap"
                onClick={playStop}
              >
                <div
                  className={`play duration__img ${isPlaying ? "active" : ""}`}
                ></div>
              </button>
              <div className="duration__time">
                <span>{formatTime(currentTime)}</span>
                <span className="duration__time-separator">/</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="duration__lenght-wrap">
                <input
                  type="range"
                  className="duration__lenght"
                  id="durationLevel"
                  min={0}
                  max={duration}
                  step="any"
                  value={currentTime}
                  onChange={(event) => {
                    videoRef.current.currentTime = event.target.value;
                  }}
                  style={{
                    background: `linear-gradient(90deg, #E5B80B ${progress}%, #999999 ${progress}%)`,
                  }}
                />
              </div>
            </div>
            <div className="sound" id="soundBtn">
              <button
                className={`sound__btn ${isMuted ? "active" : ""}`}
                type="button"
                onClick={toggleMute}
              >
                <img
                  src={volumeIcon}
                  alt="img"
                  className="sound__mic"
                  id="dynamic"
                />
              </button>
              <div className="sound__volume">
                <input
                  type="range"
                  className="duration__lenght duration__lenght--other"
                  id="micLevel"
                  min="0"
                  max="10"
                  step="1"
                  value={volume}
                  onChange={(event) => {
                    const newVolume = Number(event.target.value);

                    setVolume(newVolume);
                    videoRef.current.volume = newVolume / 10;
                    setIsMuted(newVolume === 0);

                    if (newVolume > 0) {
                      setPreviousVolume(newVolume / 10);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
