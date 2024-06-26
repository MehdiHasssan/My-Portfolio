import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profile from "../assets/tech/profile.jpg";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import Cv from "../assets/company/CV/CV.pdf"

const Hero = () => {

  const downloadResume = () => {
    const pdfUrl = Cv;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Shaheer-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className={`relative w-full h-screen pb-20 mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-62 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shaheer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-justify`}>
            I develop user interfaces and Hybrid <br className='sm:block hidden' />
            Mobile Apps from idea to publishing
          </p>

          <section
            id="linkedIn - github"
            className="flex gap-3 sm:gap-8 mt-4 items-center"
          >
            <div
              id="divider"
              className="border rounded-sm w-8 h-dividerH2 sm:h-1 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-yellowClr leading-10"
            />

            <button onClick={downloadResume} className="p-2">
              <FaFileDownload className="text-white h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
            </button>

            <a
              href="https://linkedin.com/in/muhammad-shaheer-gul-8179ab270"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaLinkedin className="text-white h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10 " />
            </a>
            <a
              href="https://github.com/MohammadShaheer001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaGithub className="text-white h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
            </a>
          </section>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
