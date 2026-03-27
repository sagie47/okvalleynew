import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RoutePath } from './types';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.WORK} element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path={RoutePath.SERVICES} element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path={RoutePath.BLOG} element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path={RoutePath.PRICING} element={<Pricing />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;