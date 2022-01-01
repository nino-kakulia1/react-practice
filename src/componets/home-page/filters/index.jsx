import SizeFilter from "./size-filter";
import PriceFilter from "./price-filter";
import FilterColors from "./color-filter";
import ModelFilter from "./model-filter";

function Filters() {
  return (
    <div className="filters">
      <h3 className="filter-title">Filter by</h3>
      <span className="filters__label">Size:</span>
      <SizeFilter />
      <span className="filters__label">Price:</span>
      <PriceFilter />

      <h4 className="filters__label">Fit:</h4>
      <ModelFilter />

      <span className="filters__label">Colour:</span>
      <FilterColors />
    </div>
  );
}

export default Filters;
