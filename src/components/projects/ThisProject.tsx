const ThisProject = () => {
  return (
    <div className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-[30rem]">
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32">
        Portfolio Project
      </div>
      <div className="mt-4">
        <div className="text-lg font-playfair w-full mt-4 max-w-prose">
          This project is made with{" "}
          <span className="text-red-700 text-2xl">&hearts;</span> using
          TailwindCSS, ReactJS, Typescript, HTML, CSS technologies. For
          animations in this project, framer motion was used.{" "}
          <span className="text-indigo-900">
            It is the project you are looking at
          </span>
          <br />
          <br />
          <a
            href="https://github.com/radharamanaa/portfoliio-fullstack"
            className="underline"
            target="_blank"
          >
            Please find the Repository of the Project here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThisProject;
