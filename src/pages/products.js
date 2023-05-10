import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductionFacilitiesSection from "../components/Product/ProductionFacilitiesSection";
import HingesSection from "../components/Product/HingesSection";
import AnglesSection from "../components/Product/AnglesSection";
import ManufacturingCapabilitiesSection from "../components/Product/ManufacturingCapabilitiesSection";
import FrequentlyAskedQuestionsSection from "../components/Product/FrequentlyAskedQuestionsSection";
import ContactSection from "../components/Contact/ContactSection";
import GetInTouchSection from "../components/Contact/GetInTouchSection";
import FeaturesSection from "../components/Product/FeaturesSection";
import WhatsAppConnect from "../components/Contact/WhatsAppConnect";

const Product = () => {
  return (
    <div>
      <Head>
        <title>LaxmiKripa Ispat | Product</title>
        <link rel="icon" href="/laxmikripa.png" />
        <meta
          name="description"
          content="Explore LaxmiKripa Ispat's range of high-quality steel products, including hinges and MS angles. Learn about our production facilities and manufacturing capabilities."
        />
        <meta
          name="keywords"
          content="LaxmiKripa Ispat, steel products, hinges, MS angles, production facilities, manufacturing capabilities"
        />
        <meta
          property="og:title"
          content="LaxmiKripa Ispat | Premium Steel Products"
        />
        <meta
          property="og:description"
          content="Discover LaxmiKripa Ispat's top-quality steel products, including hinges and MS angles. Learn about our advanced production facilities and manufacturing capabilities."
        />
        <meta property="og:image" content="/laxmikripa.png" />
        <meta
          name="twitter:title"
          content="LaxmiKripa Ispat | Premium Steel Products"
        />
        <meta
          name="twitter:description"
          content="Discover LaxmiKripa Ispat's top-quality steel products, including hinges and MS angles. Learn about our advanced production facilities and manufacturing capabilities."
        />
      </Head>
      <main>
        <Header />
        <ProductionFacilitiesSection />
        <AnglesSection />
        <HingesSection />
        <FeaturesSection />
        <ManufacturingCapabilitiesSection />
        <FrequentlyAskedQuestionsSection />
        <ContactSection />
        <WhatsAppConnect />
        <GetInTouchSection />
        <Footer />
      </main>
    </div>
  );
};

export default Product;
