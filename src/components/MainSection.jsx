import dashboardImg from "/images/illustration-dashboard.png";
import logoImg from "/images/logo.svg";

function MainSection() {
  return (
    <main className="flex flex-col gap-18">
      <div className="px-2 flex flex-col gap-10">
        <div className="flex flex-col gap-10 items-center">
          <img src={logoImg} alt="Logo image" className="h-4" />

          <div className="flex flex-col gap-2 text-center font-light">
            <h2 className="text-gray-400">We are launching <strong className="text-blue-950 font-bold">soon!</strong></h2>

            <p className="text-[12px] leading-base">Subscribe and get notified</p>
          </div>
        </div>

        <form className="px-2.5 flex flex-col gap-2">
          <input type="text" placeholder="Your email address..." className="rounded-[28px] h-10 px-6 border-blue-200 border shadow-[0_0_7px_rgba(0,0,0,0.01)] text-[12px] leading-base font-light placeholder:text-blue-200" />

          <button 
            type="submit" 
            className="bg-blue-500 rounded-[28px] h-10 text-center text-white text-[12px] leading-base font-semibold shadow-[0_5px_10px_rgba(76,123,243,0.23)]"
          >
              Notify Me
          </button>
        </form>
      </div>

      <img src={dashboardImg} alt="Dashboard illustration" />
    </main>
  )
}

export default MainSection;