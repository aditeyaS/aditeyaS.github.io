import Contact from "@/types/contact";
import USER from "./user";
import {
  SiGithub,
  SiLeetcode,
  SiLeetcodeHex,
  SiSpotify,
  SiSpotifyHex,
  SiTrakt,
  SiTraktHex,
  SiUnsplash,
  SiX,
} from "@icons-pack/react-simple-icons";
import Linkedin from "@/components/icons/linkedin";

const CONTACT: Contact[] = [
  {
    title: "Github",
    url: USER.github.url,
    icon: <SiGithub />,
    color: "",
  },
  {
    title: "Leetcode",
    url: USER.leetcode,
    icon: <SiLeetcode />,
    color: SiLeetcodeHex,
  },
  {
    title: "Linkedin",
    url: USER.social.linkedin,
    icon: <Linkedin />,
    color: "#0a66c2",
  },
  {
    title: "Twitter",
    url: USER.social.twitter,
    icon: <SiX />,
    color: "",
  },
  {
    title: "Unsplash",
    url: USER.social.unsplash,
    icon: <SiUnsplash />,
    color: "",
  },
  {
    title: "Trakt",
    url: USER.social.trakt,
    icon: <SiTrakt />,
    color: SiTraktHex,
  },
  {
    title: "Spotify",
    url: USER.social.spotify,
    icon: <SiSpotify />,
    color: SiSpotifyHex,
  },
];

export default CONTACT;
