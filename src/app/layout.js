"use client";
import "./globals.css";
import Header from "../../components/Header"; //Header components
import Footer from "../../components/Footer";
import FooterCurves from "../../components/Curves/footer-curves";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        style={{ overflowX: 'hidden', fontFamily: 'Avenir, AvenirBold', backgroundColor: "white", color:"black", }}
      >
          
      <Header />
          {children}
      <FooterCurves/>
      <Footer />
      </body>
    </html>
  );
}






