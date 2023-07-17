import img1 from "../../lib/images/download (1).jpg";
import img2 from "../../lib/images/download.png";
import img3 from "../../lib/images/images (2).jpg";
export default function HomeCarousel() {
  return (
    <div className="">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ width: "100%" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ width: "100%", height: "400px" }}
              src={img1}
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "400px" }}
              src={img2}
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "400px" }}
              src={img3}
              className="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
