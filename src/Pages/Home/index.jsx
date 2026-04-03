import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Whychose from './Whychose'
import Solutions from './Solutions'
import GoogleCloudPartner from './GoogleCloudPartner'
import GoogleWorkSpace from './GoogleWorkSpace'
import GoogleAds from './GoogleAds'
import Contact from './Contact'
import Blog from '../Blogs/Blog'
import WorkspaceApp from './WorkSpaceApp'
import MobileServise from './MobileServise'
import MobileBlog from '../Blogs/MobileBlog'
import MobileSolution from './MobileSolution'
import GwsPricing from './GwsPricing'
import Pricing from './Pricing'
import Seo from '../../Seocomponent/Seo'

const Home = () => {
  return (
    <>
      <Seo
        title="Teledigital | Google Cloud Partner in Nepal | Cloud & Workspace Services"
        description="Teledigital is a trusted Google Cloud Partner in Nepal offering Google Cloud services, cloud migration, secure cloud infrastructure, and Google Workspace services. Get business email with Gmail and seamless Google Workspace migration for your business."
        keywords="Teledigital, Google Cloud Partner, Google Cloud Partner Nepal, Google Cloud services in Nepal, Cloud migration Nepal, Google Cloud infrastructure, Google Workspace Partner in Nepal, Google Workspace Services in Nepal, Google Workspace Migration, Business Email with Gmail, Cloud Migration Services Nepal, Google Cloud Migration, Secure Cloud Infrastructure, Teledigital Cloud Services, Cloud Infrastructure Nepal"
      />
      <Banner />
      <Service />
      <MobileServise />
      <Whychose />
      <GoogleCloudPartner />
      {/* <GoogleAds/> */}
      <Solutions />
      <MobileSolution />
      <GoogleWorkSpace />
      <Pricing />
      <WorkspaceApp />
      <div id="blog">
        <Blog />
        <MobileBlog />
      </div>
      <Contact />
    </>
  )
}

export default Home
