"use client";
import "./globals.css";
import Header from "../../components/Header"; //Header components
import Footer from "../../components/Footer";
import FooterCurves from "../../components/Curves/footer-curves";
import ScrollToTop from "../../components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body 
        style={{ overflowX: 'hidden', fontFamily: 'Avenir, AvenirBold', backgroundColor: "white", color:"black", }}
      >          
        {children}
      </body>
      <ScrollToTop/>
      <FooterCurves/>
      <Footer />
    </html>
  );
}






