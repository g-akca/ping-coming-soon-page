import SocialMediaButton from "./SocialMediaButton";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="self-center flex flex-col gap-6 items-center">
      <div className="flex gap-4">
        <SocialMediaButton icon={faFacebookF} />
        <SocialMediaButton icon={faTwitter} />
        <SocialMediaButton icon={faInstagram} />
      </div>

      <p className="text-[12px] leading-base text-gray-400 font-light">© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer;