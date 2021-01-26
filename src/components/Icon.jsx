import Discord from "assets/svg/discord.svg";
import Instagram from "assets/svg/instagram.svg";
import Facebook from "assets/svg/facebook.svg";
import Twitter from "assets/svg/twitter.svg";
import ChevronLeft from "assets/svg/chevron-left.svg";

const Icon = ({ name = "" }) => {
  switch (name.toLowerCase()) {
    case "discord":
      return <Discord />;
    case "instagram":
      return <Instagram />;
    case "facebook":
      return <Facebook />;
    case "twitter":
      return <Twitter />;
    case "chevronleft":
      return <ChevronLeft />;
    default:
      return <img src={"http://placehold.it/50"} />;
  }
};

export default Icon;
