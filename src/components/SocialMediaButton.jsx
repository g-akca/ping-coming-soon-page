import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaButton({ icon }) {
  return (
    <button className="w-8 aspect-square rounded-full border-blue-200 border flex justify-center items-center cursor-pointer hover:border-blue-500 transition-all">
      <FontAwesomeIcon icon={icon} className="text-[15px] text-blue-500" />
    </button>
  )
}

export default SocialMediaButton;