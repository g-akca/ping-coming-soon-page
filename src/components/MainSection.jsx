import dashboardImg from "/images/illustration-dashboard.png";
import logoImg from "/images/logo.svg";

function MainSection() {
  return (
    <main className="flex flex-col gap-18">
      <div className="px-2 flex flex-col gap-10">
        <div className="flex flex-col gap-10 items-center">
          <img src={logoImg} alt="Logo image" className="h-4" />

          <div className="flex flex-col gap-2 text-center">
            <h2>We are launching <strong>soon!</strong></h2>

            <p>Subscribe and get notified</p>
          </div>
        </div>

        <form className="px-2.5 flex flex-col gap-2">
          <input type="text" placeholder="Your email address..." />

          <button type="submit" className="text-center">Notify Me</button>
        </form>
      </div>

      <img src={dashboardImg} alt="Dashboard illustration" />
    </main>
  )
}

export default MainSection;