import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="bg-white font-source mb-[36px] relative">
      <div className="bg-background-blue h-[617px] md:h-[585px] absolute top-[80px] md:top-[86px] left-0 w-full z-0"></div>
      <Header />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
