import "./style.scss";
const colors = ["#dfe6e9", "#dfe6e9", "#dfe6e9"];
{colors.map( function (ColorFilter) {
  return (
    <div className="filter-colors">
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
      <div className="filter-colors__item"></div>
    </div>
     style={{ backgroundColor: "#dfe6e9" }}
  );
}
export default FilterColors;
