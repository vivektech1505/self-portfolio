
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-20">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-10"
        >

          <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="/vivek-kumar1.jpeg"
            alt="Vivek Kumar"
            className="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-center border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Vivek Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 text-lg md:text-2xl max-w-2xl leading-8"
        >
          React.js & Next.js Developer passionate about building modern and
          responsive web applications.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-5 justify-center">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/Vivek_Kumar_Frontend_Developer_ReactJS_Resume.pdf"
            download
            className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
