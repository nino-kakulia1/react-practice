import "./style.scss";

import Filters from "./filters";
import Bradcrumb from "../common/bradcrumb/index";
import Card from "../common/card";

import trousers from "../../assets/trousers-1.png";
import trouser from "../../assets/trousers-2.png";
import section2 from "../../assets/feature-section1.png";
import section3 from "../../assets/feature-section2.png";
import section4 from "../../assets/feature-section3.png";

const colors = ["#dfe6e9", "#dfe6e9", "#dfe6e9"];

const mockData = [
  {
    url: trousers,
    title: "stretch wool chino trousers",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Trousers",
    price: 199,
  },

  {
    url: section2,
    title: "Bags",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Leather Travel Bag",
    price: 121,
  },

  {
    url: section3,
    title: "Coats and Jackets",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Zipped water-repellent coat",
    price: 424,
  },

  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
  {
    url: section4,
    title: "Shirts",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
  nunc nibh, in posuere arcu malesuada.`,
    category: "Cotton melange shirt",
    price: 243,
  },
];

function HomePage() {
  return (
    <div className="shop-page-wrapper">
      <div className="filter-section">
        <Bradcrumb />
        <Filters />
      </div>

      <div
        className="shop-page-products"
        style={{ backgroundColor: "#dfe6e9" }}
      >
        {mockData.map(function (cardData) {
          return (
            <Card
              imageUrl={cardData.url}
              title={cardData.title}
              description={cardData.description}
              price={cardData.price}
              category={cardData.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
