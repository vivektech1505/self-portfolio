// const Navbar = () => {
//    return (
//     <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
//         <h1 className="text-2xl font-bold text-cyan-400">
//           Vivek.dev
//         </h1>

//         <div className="flex gap-6">
//           <a href="#about" className="hover:text-cyan-400">About</a>
//           <a href="#skills" className="hover:text-cyan-400">Skills</a>
//           <a href="#projects" className="hover:text-cyan-400">Projects</a>
//           <a href="#contact" className="hover:text-cyan-400">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar


import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        
        <h1 className="text-2xl font-bold text-cyan-400">
          <a href="#">Vivek.dev</a>
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900 flex flex-col items-end pr-10 gap-6 py-6">
          
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;