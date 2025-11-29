// imports of media icons
import React from 'react';
import { FaFacebookF,FaLinkedinIn, FaReact, FaGithub,FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiMongodb, SiNodedotjs } from "react-icons/si";
const Media = () => {
  // This component displays social media icons and best skill icons
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/anmol.don.52056" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>
          {/* <span className="bannerIcon">
            <a href="https://x.com/musyoki_017" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </span> */}
           <span className="bannerIcon">
                      <a
                        href="https://www.instagram.com/software_dev_a.s_anmol?igsh=MTFtcDNwdTJpdGZ6bw=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
            </span>
          <span className="bannerIcon">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/anmol-sharma-42ba03391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/anmolsharma2005-web" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
      {/* This section displays the best skills of the developer */}
      {/* The icons are displayed using react-icons library */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media