import { Route, Routes } from "react-router-dom";

import Home from "../Routes/Home";
import About from "../Routes/About";
import Resume from "../Routes/Resume";
import Projects from "../Routes/Projects";
import DigitalCard from "../Routes/DigitalCard";
import ContactMe from "../Routes/ContactMe";
import NotFound from "../Routes/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/digital-card" element={<DigitalCard />} />
      <Route path="/contact-me" element={<ContactMe />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
