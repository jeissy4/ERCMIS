import img1 from "../assets/M.jpg";
import img2 from "../assets/a1.jpg";
import img3 from "../assets/Farming.jpg";
import img4 from "../assets/Trans.jpg";
import img5 from "../assets/city.jpg";
import img6 from "../assets/s1.jpg";
import img7 from "../assets/f6.jpg";
import '../App.css'

export default function Carroussel() {
  return (
    <>
      {/* Slideshow Section */}
      <div
        id="financeCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} classname="d-block w-100" alt="slide 1" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} classname="d-block w-100" alt="slide 2" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} classname="d-block w-100" alt="slide 3" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} classname="d-block w-100" alt="slide 4" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} classname="d-block w-100" alt="slide 5" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img6} classname="d-block w-100" alt="slide 6" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img7} classname="d-block w-100" alt="slide 7" />
            <div className="carousel-caption d-none d-md-block slide-caption">
              <h3>Revenue Collection</h3>
              <p>Efficient and transparent systems</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#financeCarousel"
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
          data-bs-target="#financeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
