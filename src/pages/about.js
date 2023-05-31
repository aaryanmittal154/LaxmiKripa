import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/About/AboutSection";
import CoreValuesSection from "../components/About/CoreValuesSection";
import ContactSection from "../components/Contact/ContactSection";
import CorePurpose from "../components/About/CorePurpose";
import TimelineSection from "../components/About/TimelineSection";
import GetInTouchSection from "../components/Contact/GetInTouchSection";
import WhatsAppConnect from "../components/Contact/WhatsAppConnect";
import YoutubePreview from "../components/About/YoutubePreview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LaxmiKripa Ispat | About</title>
        <link rel="icon" href="/laxmikripa.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn about LaxmiKripa Ispat, its mission, vision, core values, and more. Discover our company's history and commitment to providing high-quality steel products."
        />
        <meta
          name="keywords"
          content="LaxmiKripa Ispat, steel, mission, vision, core values, history, steel products"
        />
        <meta name="author" content="LaxmiKripa Ispat" />
        <meta property="og:title" content="LaxmiKripa Ispat | About" />
        <meta
          property="og:description"
          content="Learn about LaxmiKripa Ispat, its mission, vision, core values, and more. Discover our company's history and commitment to providing high-quality steel products."
        />
        <meta property="og:image" content="/laxmikripa.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.laxmikripaispat.in/about"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LaxmiKripa Ispat | About" />
        <meta
          name="twitter:description"
          content="Learn about LaxmiKripa Ispat, its mission, vision, core values, and more. Discover our company's history and commitment to providing high-quality steel products."
        />
        <meta name="twitter:image" content="/laxmikripa.png" />
        <meta
          name="description"
          content="LaxmiKripa Ispat has been manufacturing top-quality steel products like hinges and MS angles for over 15 years. Explore our wide range of products and discover our commitment to quality and customer satisfaction."
        />
        <meta
          name="keywords"
          content="LaxmiKripa Ispat, steel, hinges, MS angles, manufacturing, high-quality, environmentally friendly, customer satisfaction, MS channels, mild steel, construction, industrial use, innovation, technology, Manufactures Steel, Door Hinges"
        />
        <meta
          property="og:title"
          content="LaxmiKripa Ispat | Quality Steel Products - Hinges, MS Angles, and More"
        />
        <meta
          property="og:description"
          content="Explore LaxmiKripa Ispat's range of high-quality steel products, including hinges, MS angles, and MS channels. Experience expert craftsmanship and exceptional customer service for all your steel needs."
        />
        <meta property="og:image" content="/laxmikripa.png" />
        <meta
          name="twitter:title"
          content="LaxmiKripa Ispat | Quality Steel Products - Hinges, MS Angles, and More"
        />
        <meta
          name="twitter:description"
          content="Explore LaxmiKripa Ispat's range of high-quality steel products, including hinges, MS angles, and MS channels. Experience expert craftsmanship and exceptional customer service for all your steel needs."
        />
      </Head>
      <Header />
      <AboutSection />
      <YoutubePreview />
      <TimelineSection />
      <CorePurpose />
      <CoreValuesSection />
      <ContactSection />
      <WhatsAppConnect />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
