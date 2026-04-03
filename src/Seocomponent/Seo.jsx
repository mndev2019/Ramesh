import { Helmet } from 'react-helmet';


const Seo = ({ title, description, keywords, image, url }) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta property="image" content={image ?? `https://workspacenepal.com/assets/logo-Bl8Kp5Rh.png`} />


            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image ?? `https://workspacenepal.com/assets/logo-Bl8Kp5Rh.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta name="keywords" content={keywords} />
        </Helmet>
        <script type="application/ld+json">
            {`
   {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${title} Page",
    "description": "${description}",
    "keywords": "${keywords}",
    "image": "${image}"
   }
            `}
        </script>
    </>
);

export default Seo;
