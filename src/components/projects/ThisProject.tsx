const ThisProject = () => {
  return (
    <div className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-screen">
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32">
        Portfolio Project
      </div>
      <div className="mt-4">
        <div className="text-lg font-playfair w-full mt-4 max-w-prose">
          <a
            href="https://radharamanaa.github.io/portfoliio-fullstack/"
            target="_blank"
          >
            This project is made with &love; using TailwindCSS, ReactJS,
            Typescript, HTML, CSS technologies. For animations in this project,
            framer motion was used.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThisProject;
