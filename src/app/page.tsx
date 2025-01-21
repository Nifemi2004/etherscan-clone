"use client";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

const Home = () => {

  return (
    <div>
      <Header />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
