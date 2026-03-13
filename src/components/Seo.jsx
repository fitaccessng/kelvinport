import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Seo = ({ title, description }) => {
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://kelvinibeh.com";
  const url = `${baseUrl}${location.pathname}`;
  const fullTitle = title
    ? `${title} | Kelvin Ibeh`
    : "Kelvin Ibeh | Startup Founder Portfolio";
  const metaDescription =
    description ||
    "Kelvin Ibeh is a startup founder and product builder creating technology across security, fitness, and digital commerce.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;
