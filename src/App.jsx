import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base text-blue-950 min-h-screen pt-21 pb-8 px-7 tablet:px-16 flex flex-col justify-between gap-12 items-center">
      <MainSection />

      <Footer />
    </div>
  )
}

export default App
