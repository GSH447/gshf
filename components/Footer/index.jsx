import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 px-6 md:px-12 lg:px-24 xl:px-32 border-t border-white/10">

      <div className="max-w-[1420px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        
        {/* Column 1 */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg font-sans">Gracespring Health Foundation</h3>

          <div>

          <p className="text-gray-300 text-sm leading-relaxed">
            The charitable arm of the Gracespring organisation.
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            The Foundation connects sponsors with patients
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            who need corrective cardiac surgery but cannot
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            meet the cost of their care, and supports wider
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            health causes across Nigeria.
          </p>

          </div>
          
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg font-sans">Sponsorship and partnerships</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li>
              <a href="mailto:partnerships@gracespringhealthfoundation.com" className="hover:text-white hover:text-decoration: underline; transition">
                partnerships@gracespringhealthfoundation.com
              </a>
            </li>
            <li>
              <a href="mailto:info@gracespringhealthfoundation.com" className="hover:text-white hover:text-decoration: underline; transition">
                info@gracespringhealthfoundation.com
              </a>
            </li>
            <li>
              <a href="tel:+2347056482776" className="hover:text-white hover:text-decoration: underline; transition">
                +234 705 648 2776
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg font-sans">Gracespring Hospitals</h3>
          <ul className="text-gray-300 text-sm space-y-3">
            <li className="leading-relaxed">
              Block 3, Plot 32, Ajayi Apata Estate,<br />
              Sangotedo, Lekki-Epe Expressway,<br />
              Lagos
            </li>
            <li>
              <a href="mailto:care@gracespringhospitals.com" className="hover:text-white hover:text-decoration: underline; transition mt-2 block">
                care@gracespringhospitals.com
              </a>
            </li>
            <li>
              <a href="tel:+2347056482776" className="hover:text-white hover:text-decoration: underline; transition">
                +234 705 648 2776
              </a>
            </li>
          </ul>
        </div>

      </div>
      

      <div className="max-w-[1420px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 border-t border-white/10 mt-10 pt-10">
        
        {/* Column 1 */}
        <div className="border-2 border-[transparent] justify-self-start">
          <p className="text-gray-300 text-sm leading-relaxed">
            Gracespring Health Foundation - Our Path of Care, A Path of Impact
          </p>
        </div>

        {/* Column 2 */}
        <div className="border-2 border-[transparent]  sm:justify-self-end">
          <p className="text-gray-300 text-sm leading-relaxed">
            Patient photographs published with written consent.
          </p>
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;

