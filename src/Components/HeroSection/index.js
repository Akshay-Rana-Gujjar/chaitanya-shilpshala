import "../../assets/css/slick/slick.css";
import "../../assets/css//slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.css";
import CommercialImg from "../../assets/Images/Landing/COMMERCIAL/commercial.jpg";
import CorporateImg from "../../assets/Images/Landing/CORPORATE/office.jpeg";
import HealthcareImg from "../../assets/Images/Landing/HEALTHCARE/health.jpg";
import HousingImg from "../../assets/Images/Landing/HOUSING/housing.jpg";
import InstitutialImg from "../../assets/Images/Landing/INSTITUTIONAL/institutional.png";
import ResidentialImg from "../../assets/Images/Landing/RESIDENTIAL/residential.jpg";
import RetailImg from "../../assets/Images/Landing/RETAIL/retail.jpg";
import UrbanImg from "../../assets/Images/Landing/URBAN/urban.jpg";

export default function HeroSection() {
  const heroData = [
    {
      img: CommercialImg,
      name: "Commercial",
    },
    {
      img: CorporateImg,
      name: "Corporate Offices",
    },
    {
      img: HealthcareImg,
      name: "Health Care",
    },
    {
      img: HousingImg,
      name: "Housing",
    },
    {
      img: InstitutialImg,
      name: "Institutional",
    },
    {
      img: ResidentialImg,
      name: "Residential",
    },
    {
      img: RetailImg,
      name: "Retails",
    },
    {
      img: UrbanImg,
      name: "Urban",
    },
  ];

  return (
    <div className="hero-section-container">
      <Slider>
        {heroData.map((hero) =><div>
          <div
            className="hero-carousel-slide"
            style={{
              backgroundImage: `linear-gradient(to bottom, #00000080, #00000080), url(${hero.img})`,
            }}
          >
            <h2 className="hero-name align-items-center d-flex display-1 font-weight-bold h-100 justify-content-center text-white">
              {hero.name}
            </h2>
          </div>
        </div>)}
      </Slider>
    </div>
  );
}
