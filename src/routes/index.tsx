import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/project';
import About from '../pages/About';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes = () => {
  const home = <Home />;
  const projects = <Projects />;
  const about = <About />;
  const project = <Project />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={home} />
        <Route path="/projects" element={projects} />
        <Route path="/project/:id" element={project} />
        <Route path="/about" element={about} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;