import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppConnect from "../components/ContactUs/WhatsAppConnect";
import ContactForm from "../components/ContactUs/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>LaxmiKripa Ispat | Contact</title>
        <link rel="icon" href="/laxmikripa.png" />
        <meta
          name="description"
          content="Get in touch with LaxmiKripa Ispat for any questions or assistance. Contact us via WhatsApp or fill out the contact form and we'll get back to you soon."
        />
        <meta
          name="keywords"
          content="LaxmiKripa Ispat, contact, steel products, hinges, MS angles, customer service, questions, assistance"
        />
        <meta property="og:title" content="LaxmiKripa Ispat | Contact Us" />
        <meta
          property="og:description"
          content="Reach out to LaxmiKripa Ispat for any questions or assistance. Contact us through WhatsApp or fill out our contact form and we'll get back to you as soon as possible."
        />
        <meta property="og:image" content="/laxmikripa.png" />
        <meta name="twitter:title" content="LaxmiKripa Ispat | Contact Us" />
        <meta
          name="twitter:description"
          content="Reach out to LaxmiKripa Ispat for any questions or assistance. Contact us through WhatsApp or fill out our contact form and we'll get back to you as soon as possible."
        />
      </Head>
      <main>
        <Header />
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-5xl font-semibold text-indigo-600 mb-8">
                Get in Touch
              </h2>
              <p className="text-2xl text-indigo-600 mb-8">
                Have any questions or need assistance? Feel free to reach out to
                us on WhatsApp. <br />
              </p>
              <WhatsAppConnect />
              <p className="text-2xl text-indigo-600 mb-8 px-6">
                <span className="font-bold"> OR </span> <br /> fill the form
                below and we will contact you:
              </p>
            </div>
            <div className="w-full md:w-2/3 mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
