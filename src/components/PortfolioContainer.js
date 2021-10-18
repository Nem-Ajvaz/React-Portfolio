import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainPage">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mainClass">{renderPage()}</main>
      <Footer>{Footer}</Footer>
    </div>
  );
}
