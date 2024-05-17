import Project1 from "../../assets/projects/project1.png";

const GalleryItem = () => {
  return (
    <div className="gallery-item">
      <div className="gallery-image ">
        <img className="active" src={Project1} alt="" />
      </div>
      <div className="gallery-description">
        <h2>Titulo</h2>
        <p>descricao</p>
      </div>
    </div>
  );
};
export const Portfolio = () => {
  return (
    <div className="h-vh flex">
      <div className="mt-auto mb-auto flex w-full m-content justify-between w-full">
        <div className="mb-auto w-1x2">
          <h2 className="stretch display-2">Portfooolio</h2>
        </div>
        <div className="gallery">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </div>
    </div>
  );
};
