import "./SocialsMedia.css";
import { socials_info } from "../../../assets/socialsMedia/index";

console.log(socials_info);

export const SocialsMedia = () => {
  return (
    <div className="socials__container">
      {socials_info.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt=""
            onMouseOut={(e) => (e.currentTarget.src = social.icon)}
            className="socials__icon"
          />
        </a>
      ))}
    </div>
  );
};
