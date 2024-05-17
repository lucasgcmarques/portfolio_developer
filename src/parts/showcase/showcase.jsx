import { LineBreak } from "../../components/ui/linebreak";
import Vector3 from "../../assets/images/vector3.svg?react";
const filters = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
];

export const Showcase = () => {
  return (
    <section className="h-vh m-content flex items-center ve">
      <div className="showcase h-4x5 w-full">
        <div className="showcase-left">
          <div className="showcase-filter">
            {filters.map((item) => (
              <a key={item.id} href="" className="filter">
                {item.name}
              </a>
            ))}
          </div>
          <div className="showcase-items"></div>
        </div>
        <div className="showcase-right">
          <div className="showcase-title">
            <h2 className="stretch display-1">
              Shoow <LineBreak /> Caase
            </h2>
          </div>
          <div className="showcase-description">
            Take a journey through my showcase of web development projects
            effortlessly and select the technologies used in each project by
            simply clicking on the options provided.
            <LineBreak />
            Come together to create stunning websites and interactive web
            applications.
          </div>

          <Vector3 />
        </div>
      </div>
    </section>
  );
};
