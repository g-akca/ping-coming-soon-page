import { useState } from "react";
import dashboardImg from "/images/illustration-dashboard.png";
import logoImg from "/images/logo.svg";

function MainSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      email.trim() === "" ? setError("Whoops! It looks like you forgot to add your email") : setError("Please provide a valid email address");
    }
    else {
      setError("");
    }
  }

  return (
    <main className="flex flex-col gap-18 tablet:gap-24 max-w-160">
      <div className="px-4.5 tablet:px-0.5 flex flex-col gap-10">
        <div className="flex flex-col gap-10 tablet:gap-12 items-center">
          <img src={logoImg} alt="Ping" className="h-4 tablet:h-6" />

          <div className="flex flex-col gap-2 tablet:gap-4 text-center font-light">
            <h1 className="text-gray-400 tablet:text-[48px] leading-base">We are launching <strong className="text-blue-950 font-bold">soon!</strong></h1>

            <p className="text-[12px] leading-base tablet:text-base">Subscribe and get notified</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 tablet:flex-row tablet:gap-4">
          <div className="tablet:grow flex flex-col gap-2">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..." 
              aria-describedby={error ? "email-error" : undefined}
              className={`
                rounded-[28px] h-10 px-6 border-blue-200 border shadow-[0_0_7px_rgba(0,0,0,0.01)] 
                text-[12px] text-blue-950 leading-base font-light placeholder:text-blue-200
                tablet:h-14 tablet:px-8 tablet:text-[16px] transition-all duration-300 focus:outline-none focus:border-blue-500
                ${error && "border-red-400 focus:border-red-400"}
              `}
            />

            {error && (
              <p id="email-error" className="mb-4 text-center text-red-400 text-[10px] leading-base italic tablet:mb-0 tablet:pl-8 tablet:text-[12px] tablet:text-start">{error}</p>
            )}
          </div>

          <button 
            type="submit" 
            className="
              bg-blue-500 rounded-[28px] h-10 text-center text-white text-[12px] leading-base font-semibold 
              shadow-[0_5px_10px_rgba(76,123,243,0.23)] tablet:w-50 tablet:h-14 tablet:text-[16px] cursor-pointer
              hover:opacity-75 transition-all duration-300
            "
          >
            Notify Me
          </button>
        </form>
      </div>

      <img src={dashboardImg} alt="Dashboard illustration" className="self-center w-full" />
    </main>
  )
}

export default MainSection;