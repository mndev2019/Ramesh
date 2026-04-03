// import React, { useState } from 'react'


import Seo from '../../Seocomponent/Seo.jsx'
import Faq from './Faq.jsx'
import Pricing from './Pricing.jsx'
import WorkspaceApp from './WorkSpaceApp.jsx'



const GwsPricing = () => {
  
    return (

        <>
            <Seo
                title="Google Workspace Services in Nepal | Teledigital GWS Partner"
                description="Teledigital offers Google Workspace services in Nepal including setup, migration, and support. Get professional business email with Gmail, seamless Google Workspace migration, and secure collaboration tools for your business."
                keywords="Google Workspace Services in Nepal, Google Workspace Partner in Nepal, Google Workspace Migration, Business Email with Gmail, Google Workspace setup Nepal, G Suite services Nepal, cloud collaboration tools Nepal, Teledigital Workspace services"
            />
           
            <Pricing />
            <WorkspaceApp />
            <Faq />


        </>

    )
}

export default GwsPricing
