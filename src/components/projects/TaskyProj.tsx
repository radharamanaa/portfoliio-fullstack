import React from "react";

const TaskyProj: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-[30rem]">
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32">
        Tasky App
      </div>
      <div className="">
        <div className="text-lg font-playfair max-w-prose mt-8">
          <a href="https://radharamanaa.github.io/Tasky-Redux/" target="_blank">
            Tasky app is an app made in Redux, React and Javascript with &nbsp;
            <span className="text-red-700 text-2xl">&hearts;</span>
            <br />
            <br />
            Project enables you to add, edit and delete tasks. You can also
            search tasks, mark favorite and filter by category. Clicking on
            Search, also clears the search!
            <br />
            <br />
            Please click here to Navigate to the project
            <br />
            <br />
            <a href="https://github.com/radharamanaa/Tasky-Redux">
              Click here to navigate to the Repository
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskyProj;
