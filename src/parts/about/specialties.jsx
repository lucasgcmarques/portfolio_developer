import graph1 from "../../assets/images/graph1.svg";

export const Specialties = () => {
  return (
    <div className="w-3x5 flex flex-column">
      <div className="basic">
        <h2 className="display-2">
          Specialized in landing pages, websites, dashboards and mobile
          applications,
        </h2>
        <h2 className="display-2">
          I turn your concepts into stunning digital experiences.
        </h2>
      </div>

      <div className="flex mt-3 justify-start">
        <div className="graph-rotate w-1x6">
          <img className="rotate-90" src={graph1} alt="" />
        </div>
        <p className="w-3x6">
          For landing pages, I design immersive user experiences, perfectly
          suited for sports, music, or cultural events. Each page offers smooth
          navigation on mobile, providing a seamless mobile experience and
          integrating SEO for optimal performance.
        </p>
      </div>
    </div>
  );
};
