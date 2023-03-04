import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Heading from "./Heading";
import Highlights from "./Highlights";
import InquiryBtn from "./InquiryBtn";
import SectionHeading from "./SectionHeading";
import Cards from "./Cards";
import OurProducts from "./OurProducts";
import Footer from "./Footer";

function App() {
  return  (
    <>
      <Navbar />
      <Carousel />
      <Heading />
      <Highlights />
      <InquiryBtn />
      <SectionHeading Heading="Popular Programs" Description="Most in demand and watched by people." />
      <div className="flex justify-around">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <OurProducts />
      <Footer />
      

    </>
  );
}

export default App;
