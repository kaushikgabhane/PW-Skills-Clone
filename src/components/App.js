import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Heading from "./Heading";
import Highlights from "./Highlights";
import InquiryBtn from "./InquiryBtn";
import PopularProg from "./PopularProg";
import Cards from "./Cards";

function App() {
  return  (
    <>
      <Navbar />
      <Carousel />
      <Heading />
      <Highlights />
      <InquiryBtn />
      <PopularProg />
      <div className="flex justify-around">
        <Cards />
        <Cards />
        <Cards />
      </div>

      

    </>
  );
}

export default App;
