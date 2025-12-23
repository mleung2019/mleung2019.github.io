import "./Carousel.css";

export const Carousel = (props: {
  carId: string;
  srcMedia: string[];
  isLight: boolean;
}) => {
  const carouselId = "carousel-" + props.carId;
  return (
    <div id={carouselId} className="pt-3 carousel slide">
      <div
        className={`carousel-indicators ${
          props.isLight ? "" : "carousel-black"
        }`}
      >
        {props.srcMedia.map((_, idx) => (
          <button
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={String(idx)}
            className={idx === 0 ? "active" : ""}
            aria-current="true"
            aria-label={String(idx)}
            key={idx}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {props.srcMedia.map((e, idx) => {
          const isVideo = e.endsWith(".mp4");
          const isYt = e.endsWith(".yt");
          const videoId = e.replace(".yt", "")
          const srcString = 
            isVideo ? "https://res.cloudinary.com/dih87mi2g/video/upload/f_auto,q_auto/" + e
            : isYt ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${videoId}`
            : "https://res.cloudinary.com/dih87mi2g/image/upload/f_auto,q_auto/" + e;
          return (
            <div
              className={idx === 0 ? "carousel-item active" : "carousel-item"}
              key={idx}
            >
              {isVideo ? (
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src={srcString}
                    type="video/mp4"
                  />
                </video>
              ) : isYt ? (
                <div className="yt-wrapper">
                  <iframe
                      className="d-block w-100"
                      src={srcString}
                      title="YouTube wrapper"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                </div>
              ) : (
                <img
                  src={srcString}
                  className="d-block w-100"
                  alt={`Carousel item ${idx}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${
            props.isLight ? "" : "carousel-black"
          }`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${
            props.isLight ? "" : "carousel-black"
          }`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
