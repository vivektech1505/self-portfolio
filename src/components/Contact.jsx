import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          Let's build something amazing together.
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://github.com/vivektech1505">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <div className="flex justify-center items-center gap-3 mb-10 text-lg text-white">
          <FaPhone className="text-cyan-400" />

          <a
            href="tel:+919973688050"
            className="hover:text-cyan-400 transition"
          >
            9973688050
          </a>
        </div>

          <a href="https://leetcode.com/u/vivektech1505/">
            <SiLeetcode className="hover:text-cyan-400 transition" />
          </a>

          <a href="https://www.linkedin.com/in/vivek-kumar-1683b424a/">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

          <a href="mailto:vivektech1505@gail.com">
            <FaEnvelope className="hover:text-cyan-400 transition" />
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;