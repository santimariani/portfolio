import { Route, Routes } from "react-router-dom";

import About from "../Routes/About";
import Resume from "../Routes/Resume";
import Projects from "../Routes/Projects";
import DigitalCard from "../Routes/DigitalCard";
import ContactMe from "../Routes/ContactMe";
import NotFound from "../Routes/NotFound";
import HiddenResume from "../Routes/HiddenResume";
import Skills from "../Routes/Skills"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/hidden-resume" element={<HiddenResume/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/digital-card" element={<DigitalCard />} />
      <Route path="/contact-me" element={<ContactMe />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
