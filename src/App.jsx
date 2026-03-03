
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
// import WebLayout from './Layout/WebLayout'
import WebLayout from './Layout/WebLayout/index'
import Home from './Pages/Home'
import GwsPricing from './Pages/Home/GwsPricing'
import TermsCondition from './Pages/Home/TermsCondition'
import { ToastContainer } from 'react-toastify'
import Blog from './Pages/Blogs/Blog'
import BlogDetail from './Pages/Blogs/BlogDetail'
import { useEffect } from 'react'
import GCPDetail from './Pages/Home/GCPDetail'
import CloudMigration from './Pages/Home/CloudMigration'
import SecurityCompliance from './Pages/Home/SecurityCompliance'

// --- 1. Create a Analytics Wrapper ---
// This component listens for URL changes and sends them to Google
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<WebLayout />}> */}
        <Route path="/" element={
          <>
            <AnalyticsTracker /> {/* Tracks every route change */}
            <WebLayout />
          </>
        }>
          <Route index element={<Home />} />
          <Route path='/gws-pricing' element={<GwsPricing />} />
          <Route path='/term-condition' element={<TermsCondition />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path='/gcp' element={<GCPDetail/>}/>
          <Route path='/cloud-migration' element={<CloudMigration/>}/>
          <Route path='/security-compliance' element={<SecurityCompliance/>}/>

        </Route>


      </>


    )

  )

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
