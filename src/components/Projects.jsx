const projects = [
  {
    id : 1,
    title: "Recipe Explorer",
    desc: "A responsive React.js application to explore recipes,filter by ratings, and manage cart items with a clean and interactive user interface.",
    live: "https://e-commerce-website-rose-two.vercel.app/",
    github: "https://github.com/vivektech1505/eCommerce_website",
  },
  {
    id : 2,
    title: "Hdfc-Personal-Loan-Emi-Calculater",
    desc: "A responsive EMI calculator application that helps users calculate monthly loan installments, total interest, and repayment amounts with an interactive and user-friendly interface.",
    live : "https://hdfc-personal-loan-emi-calculater.vercel.app/",
    github : "https://github.com/vivektech1505/Hdfc-Personal-Loan-Emi-Calculater.git"
  },
  {
    id : 3,
    title: "saas-analytics-dashboard with RBAC",
    desc: "A modern SaaS analytics dashboard with Role-Based Access Control (RBAC), responsive UI, dynamic charts, user management, authentication, and secure access handling for different user roles.",
    live: "https://saas-analytics-dashboard-five.vercel.app/",
    github : "https://github.com/vivektech1505/saas-analytics-dashboard.git"
  },
  {
    id : 4,
    title: "Stopwatch App",
    desc: "A responsive stopwatch application with start, pause, reset, and lap time features, built using React.js with a clean and interactive user interface.",
    live: "https://stop-watch-react-woad.vercel.app/",
    github: "https://github.com/vivektech1505/stopWatch_React.git",
  },
  {
    id : 5,
    title: "Notes CRUD App",
    desc: "A responsive notes management application with Create, Read, Update, and Delete (CRUD) functionality, allowing users to add, edit, and delete notes through a clean and interactive user interface.",
    live : "https://notes-app-react-nine.vercel.app/",
    github : "https://github.com/vivektech1505/Notes_App_React.git"
  },
  {
    id : 6,
    title: "E-Commerce Product Listing UI",
    desc: "A responsive e-commerce product listing application with product filters, category sorting, customizable options, and a modern shopping interface built using React.js and responsive UI design principles.",
    live: "https://app-scrip-react-js.vercel.app/",
    github : "https://github.com/vivektech1505/appScrip_reactJs.git"
  },
  
];

const Projects = () => {

    
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.desc}
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;