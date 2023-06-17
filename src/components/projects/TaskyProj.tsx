import React from "react";

const TaskyProj: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-screen">
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32">
        Tasky App
      </div>
      <div className="">
        <div className="text-lg font-playfair w-full mt-4 max-w-prose">
          <a
            href="https://radharamanaa.github.io/Duitku-Finance-Sample-Design/"
            target="_blank"
          >
            Tasky app is an app made in Redux, React and Javascript with &love;
            <br />
            <br />
            Project enables you to add, edit and delete tasks. You can also
            search tasks, mark favorite and filter by category. Clicking on
            Search, also clears the search!
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskyProj;
