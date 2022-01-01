import "./style.scss";

function PriceFilter() {
  return (
    <div className="filter-price">
      <div className="filter-price__range">
        <div className="filter-price__start">$45</div>
        <div className="filter-price__end">$1536</div>
      </div>

      <input className="filter-price__slider" type="range" />
    </div>
  );
}

export default PriceFilter;
