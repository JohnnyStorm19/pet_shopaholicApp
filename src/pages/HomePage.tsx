import Banner from "../components/Banner";
import CategoryBlock from "../components/CategoryBlock";

const HomePage = () => {
  return (
    <>
      <Banner />
      <CategoryBlock category="home-decoration" />
      <CategoryBlock category="laptops" />
      <CategoryBlock category="sunglasses" />
    </>
  );
};

export default HomePage;
