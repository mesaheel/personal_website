import linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Vercel from "../assets/vercel.png";
import Facebook from "../assets/facebook.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sahil-ali-990639119/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[2.1rem]"
        href="https://github.com/mesaheel"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Github" className="rounded-sm" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[30px]"
        href="https://vercel.com/mesaheel"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Vercel} alt="Vercel" className="rounded-sm" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[30px]"
        href="https://www.facebook.com/mesahel"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Facebook} alt="Facebook" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
