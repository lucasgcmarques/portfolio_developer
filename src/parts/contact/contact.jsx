/* eslint-disable react/no-unescaped-entities */
import { LineBreak } from "../../components/ui/linebreak";
import LogoOutline from "../../assets/logo-outline.svg?react";

const contactLinks = [
  { name: "Send me a email", url: "#" },
  { name: "Call me", url: "#" },
  { name: "Linkedin", url: "#" },
  { name: "Github", url: "#" },
  { name: "Codepen", url: "#" },
];

export const Contact = () => {
  return (
    <div className="h-vh-2x3 flex flex-column">
      <div className="line bg-primary h-max p-3">Linha</div>
      <div className="m-content flex items-center h-full">
        <div className="contact">
          <div className="contact-title">
            <h2 className="basic display-2">
              Let's make your <LineBreak />
              project a success!
            </h2>
          </div>
          <div className="contact-logo">
            <LogoOutline />
          </div>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a className=".link" key={item.name} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="contact-description">
            If my projects have inspired you, let's work together to make your
            web development dreams a reality!
            <LineBreak size={"1rem"} />
            Get in touch and follow me on social media to stay updated on all my
            future projects.
          </div>
        </div>
      </div>
    </div>
  );
};
