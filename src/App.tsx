import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Prizes from "./Components/Prizes";
import Sponsers from "./Components/Sponsers";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import info from "./info.json";
import "./index.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <div className="bg-[#012E31] flex flex-col items-center gap-[10vh] md:px-[10vw] xl:px-[20vw] p-5 py-[10vh] ">
        <Description />
        <Prizes />
        <Sponsers />
        <FAQ questions={info.faq} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
