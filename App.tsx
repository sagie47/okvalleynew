import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RoutePath } from './types';
import { AnalyticsBootstrap } from './src/analytics';

// Pages
import Demos from './pages/Demos';
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
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white px-6">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight mb-4">404</h1>
      <p className="text-brand-muted font-sans mb-8">That page does not exist.</p>
      <Navigate to={RoutePath.HOME} replace />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <AnalyticsBootstrap />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.DEMOS} element={<Demos />} />
          <Route path={RoutePath.WORK} element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path={RoutePath.SERVICES} element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path={RoutePath.BLOG} element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path={RoutePath.PRICING} element={<Pricing />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          <Route path={RoutePath.PRIVACY} element={<Privacy />} />
          <Route path={RoutePath.TERMS} element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
