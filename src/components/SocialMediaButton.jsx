import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaButton({ icon, platform }) {
  return (
    <button
      aria-label={platform}
      className="
        w-8 aspect-square rounded-full border-blue-200 border flex justify-center items-center cursor-pointer 
        hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 group
      "
    >
      <FontAwesomeIcon icon={icon} className="text-[15px] text-blue-500 group-hover:text-white transition-all duration-300" />
    </button>
  )
}

export default SocialMediaButton;