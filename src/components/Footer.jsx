import * as React from "react";
import Container from "./Container";
import { IconContext } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  /* 
  const footerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const bodyScrollVal = document.body.scrollHeight;
      const footerOffsetTopVal = footerRef.current?.offsetTop;

      if (footerOffsetTopVal > bodyScrollVal - footerOffsetTopVal) {
        footerRef.current?.classList.remove("opacity-0");
      } else {
        footerRef.current?.classList.add("opacity-0");
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);
  console.log(footerRef.current); */
  return (
    <IconContext.Provider
      value={{
        size: "1.5em",
      }}
    >
      <footer id="contact" /* ref={footerRef} */ className="mt-auto">
        <Container>
          <div className="bg-var-very-dark-blue rounded-t-xl p-4">
            <p className="sub-heading clamp-5">Get in touch</p>
            <h2 className="font-heading clamp-2 font-semibold text-var-off-white mb-7">
              Contact Me
            </h2>
            <div className="mb-14">
              <p className="text-var-off-white clamp-4 mb-4 max-w-lg">
                Ready to talk with me? Click on one of the following buttons to
                send me an email or a message on my socials:
              </p>
              <div className="contact-links flex items-center space-x-5">
                <a
                  href="mailto:agbato.dani@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-var-off-white hover:border-var-secondary hover:bg-var-secondary rounded-lg p-2 group cursor-pointer"
                >
                  <MdAlternateEmail
                    title="send me an email"
                    className="text-var-off-white"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-agbato-06981b121/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-var-off-white hover:border-var-secondary hover:bg-var-secondary rounded-lg p-2 group cursor-pointer"
                >
                  <SiLinkedin
                    title="send me a message on LinkedIn"
                    className="text-var-off-white"
                  />
                </a>
              </div>
            </div>

            <p className="text-center text-var-off-white clamp-5">
              Copyright &copy; {new Date().getFullYear()} | Designed and built
              w/ 🧡 by Daniel Agbato
            </p>
          </div>
        </Container>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
