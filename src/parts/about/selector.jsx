import xgraph from "../../assets/images/xgraph.svg";

export const Selector = () => {
  return (
    <div className="w-2x5 relative h-full">
      <div className="selector">
        <div className="list uppercase">
          <h3 className="my-2">
            <a href="">Landing Pages</a>
          </h3>
          <h3 className="my-2">
            <a href="">Dashboards</a>
          </h3>
          <h3 className="my-2">
            <a href="">Websites</a>
          </h3>
          <h3 className="my-2">
            <a href="">Mobile App</a>
          </h3>
        </div>
      </div>
      <img className="xgraph" src={xgraph} alt="xgraph" />
    </div>
  );
};
