import Logo from "../../assets/logo.svg?react";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Logo height={40} />
          <div>
            <h2 className="stretch">Lucasss Guimarães</h2>
            <span>Based in Brazil</span>
          </div>
        </div>
        <div className="flex">
          <nav>
            <ul className="flex">
              <li className="active">
                <a href="#">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#showcase">showcase</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-column lang">
            <a className="active">en</a>
            <a>pt</a>
          </div>
        </div>
      </div>
    </header>
  );
};
