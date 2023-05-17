import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CertificationsSection from "../components/Home/CertificationsSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import IndustriesSection from "../components/Home/IndustriesSection";
import ContactSection from "../components/Contact/ContactSection";
import GetInTouchSection from "../components/Contact/GetInTouchSection";
import WhatsAppConnect from "../components/Contact/WhatsAppConnect";
import HingesSection from "../components/Product/HingesSection";
import AnglesSection from "../components/Product/AnglesSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LaxmiKripa Ispat</title>
        <link rel="icon" href="/laxmikripa.png" />
        <meta
          name="description"
          content="Laxmi Kripa Ispat is a leading manufacturer of steel products, offering high-quality hinges, MS angles, and more. Discover our wide range of products and services."
        />
        <meta
          name="keywords"
          content="Laxmi Kripa Ispat, steel manufacturing, hinges, MS angles, steel products, steel industry"
        />
        <meta
          property="og:title"
          content="Laxmi Kripa Ispat | Leading Steel Manufacturer"
        />
        <meta
          property="og:description"
          content="Discover LaxmiKripa Ispat, a leading steel manufacturer offering high-quality hinges, MS angles, and more. Explore our range of products and services today."
        />
        <meta property="og:image" content="/laxmikripa.png" />
        <meta
          name="twitter:title"
          content="LaxmiKripa Ispat | Leading Steel Manufacturer"
        />
        <meta
          name="twitter:description"
          content="Discover LaxmiKripa Ispat, a leading steel manufacturer offering high-quality hinges, MS angles, and more. Explore our range of products and services today."
        />
      </Head>
      <Header />
      <AboutUsSection />
      <AnglesSection />
      <HingesSection />
      <IndustriesSection />
      <CertificationsSection />
      <ContactSection />
      <WhatsAppConnect />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
