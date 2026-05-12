import SocialMediaButton from "./SocialMediaButton";

function Footer() {
  return (
    <footer className="self-center flex flex-col gap-6 items-center">
      <div className="flex gap-4">
        <SocialMediaButton />
        <SocialMediaButton />
        <SocialMediaButton />
      </div>

      <p className="text-[12px] leading-base text-gray-400 font-light">© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer;