export const Carousel = (props: { srcMedia: string[] }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {props.srcMedia.map((_, idx) => (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={String(idx)}
            className={idx === 0 ? "active" : ""}
            aria-current="true"
            aria-label={String(idx)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {props.srcMedia.map((e, idx) => (
          <div className={idx === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={e} className="d-block w-100" alt={String(idx)} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
