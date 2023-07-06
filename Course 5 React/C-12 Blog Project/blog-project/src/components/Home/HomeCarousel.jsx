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
              src="https://img.freepik.com/premium-vector/breaking-news-planet-background_213860-743.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "400px" }}
              src="https://img.freepik.com/premium-vector/breaking-news-template-design_23-2148502088.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "400px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXELJIG-RPJ2usEijf_wIi_dk_LhZHBqrSC0iSwA0wi2aPQ0-SWq_4lLLkuXbsT8CZD8&usqp=CAU"
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
