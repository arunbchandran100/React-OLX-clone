import React, {useContext} from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue,SetSearchValue } = useContext(SearchContext);
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(12)
            .fill()
            // .filter((e)=>)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
