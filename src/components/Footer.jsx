import SocialMediaButton from "./SocialMediaButton";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 items-center">
      <div className="flex gap-4">
        <SocialMediaButton icon={faFacebookF} platform="Facebook" />
        <SocialMediaButton icon={faTwitter} platform="Twitter" />
        <SocialMediaButton icon={faInstagram} platform="Instagram" />
      </div>

      <p className="text-[12px] leading-base text-gray-400 font-light">© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer;