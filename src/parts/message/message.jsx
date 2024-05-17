import Star from "../../assets/images/star.svg?react";
import Graph2 from "../../assets/images/graph2.svg?react";
export const Message = () => {
  return (
    <section className="h-vh flex items-center">
      <div className="text-center">
        <div className="mb-4">
          <Star />
        </div>
        <h2 className="basic display-1 w-2x3 m-auto mb-3">
          I am excited to <span className="stretch">exploore</span> your needs
          and determine how I can <span className="stretch">brring</span> value
          to your next initiative.
        </h2>
        <div className="mt-3">
          <Graph2 />
        </div>
      </div>
    </section>
  );
};
