import vector1 from "../../assets/images/vector1.svg";
import graph1 from "../../assets/images/graph1.svg";

export const Intro = () => {
  return (
    <section className=" h-full flex flex-column">
      <div className="flex my-3">
        <div className="w-full flex items-center justify-center">
          <img className="h-5x6" src={vector1} alt="vector" />
        </div>
        <div className="w-full text-end flex flex-column items-center justify-center m-content">
          <h2 className="pb-3">
            Hi! Im Lucas, a 28-year-old web developer based in Brasília.
            Passionate about technology, Im always looking for challenges to
            push myself with every project.
          </h2>
          <h2>
            My approach is focused on creating efficient solutions, with clean
            design and optimized code, ensuring the best user experience.
          </h2>
        </div>
      </div>
      <div className="m-content h-1x5 ">
        <div className="flex items-center gap-2">
          <span className="display-2">react.js x next x css x</span>
          <img className="mt-1" src={graph1} alt="" />
          <a
            href=""
            className="uppercase border-p mt-1 px-2 py-1 small flex items-center text-primary"
          >
            Open to work
          </a>
        </div>
        <h1 className="display-0 stretch">Weeb Develooper</h1>
      </div>
    </section>
  );
};
