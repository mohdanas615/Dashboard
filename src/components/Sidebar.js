import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faBook,
  faEnvelope,
  faCog,
  faArrowRight,
  faSearch,
  faCalendar,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar } from "react-circular-progressbar";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // State to handle sidebar visibility

  const lessonsData = [
    { color: "bg-blue-400", title: "French", totalLessons: 35, completed: 26 },
    {
      color: "bg-orange-400",
      title: "Portugese",
      totalLessons: 30,
      completed: 15,
    },
    { color: "bg-green-400", title: "Italian", totalLessons: 20, completed: 5 },
    {
      color: "bg-yellow-400",
      title: "German",
      totalLessons: 40,
      completed: 28,
    },
  ];
  const planningDetail = [
    {
      color: "bg-blue-300",
      title: "Reading-Beginner Topic 1",
      time: "8:00 AM-10:00 AM",
    },
    {
      color: "bg-orange-300",
      title: "Reading-Intermediate Topic 1",
      time: "1:00 PM-2:00 PM",
    },
    {
      color: "bg-green-300",
      title: "Reading-Advanced Topic 1",
      time: "11:00 PM-12:00 PM",
    },
    {
      color: "bg-yellow-300",
      title: "Reading-Beginner Topic 1",
      time: "1:00 PM-2:00 PM",
    },
    {
      color: "bg-yellow-300",
      title: "Reading-Advanced Topic 1",
      time: "1:00 PM-2:00 PM",
    },
    {
      color: "bg-green-300",
      title: "Reading-Beginner Topic 1",
      time: "8:00 AM-10:00 AM",
    },
    {
      color: "bg-orange-300",
      title: "Reading-Beginner Topic 1",
      time: "1:00 PM-2:00 PM",
    },
    {
      color: "bg-blue-300",
      title: "Reading-Advanced Topic 1",
      time: "8:00 AM-10:00 AM",
    },
  ];

  return (
    <>
      {/* Toggle button for smaller screens */}
      <button
        className="md:hidden p-2 text-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <div className="flex">
        {isOpen && (
          <div className="w-full md:w-[20vw] lg:w-[20%] h-[150vh] shadow-lg shadow-gray-500/50 flex flex-col items-center p-6">
            <div className="flex">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="Logo"
                className="mb-4 w-10 h-10 mt-2 mx-2"
              />
              <h2 className="text-5xl font-bold mb-20 text-blue-500">
                S<span className="mr-2">E</span>
                <span className="relative">
                  <span className="absolute -translate-x-1/2 -mt-3 text-blue-500 my">
                    .
                  </span>
                </span>
                T
              </h2>
            </div>

            <ul className="flex flex-col items-center space-y-10">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-6 text-blue-500 text-lg"
                />
                <span className="text-blue-500 text-lg">Overview</span>
                <span className="ml-2 h-2 w-2 bg-blue-500 rounded-full"></span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTh}
                  className="mr-6 text-grey-500 text-lg"
                />
                <span className="text-grey-500 text-lg">Course</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faBook}
                  className="mr-6 text-grey-500 text-lg"
                />
                <span className="text-grey-500 text-lg">Resource</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-6 text-grey-500 text-lg"
                />
                <span className="text-grey-500 text-lg">Message</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faCog}
                  className="mr-6 text-grey-500 text-lg"
                />
                <span className="text-grey-500 text-lg">Setting</span>
              </li>
            </ul>
            <img
              src={`${process.env.PUBLIC_URL}/images/1.png`}
              className="mt-10 w-3/4 rounded" // Adjust the width and add margin for spacing
            />
            <div className="mt-10 text-center bg-blue-200 p-2 rounded-2xl">
              <h3 className="text-xl text-black">Update Your Plan</h3>
              <div className="flex items-center justify-center mt-2 text-blue-500 cursor-pointer">
                <span className="text-lg">Go to Pro</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </div>
            </div>
          </div>
        )}
        <div className="flex-grow h-screen p-6 bg-white-200 w-[50%]">
  <h2 className="text-2xl font-bold mb-6 text-blue-500 h-[10vh]">
    Hello <strong>MOHD ANAS</strong>, welcome back!
  </h2>

  <div className="flex items-center">
    <h1 className="font-semibold text-4xl">My Course</h1>
    <h1 className="font-normal text-xl my-3 ml-10 text-blue-500">View All</h1>
    <div className="flex items-center ml-auto">
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
  </div>

  {/* Flexbox for Course Cards */}
  <div className="flex flex-wrap gap-4 mt-6">
    {lessonsData.map((item, index) => {
      const percentage = Math.round((item.completed / item.totalLessons) * 100);
      return (
        <div
          key={index}
          className={`${item.color} rounded-lg p-4 h-[22vh] w-full md:w-[48%]`} // Stack cards vertically and full-width on smaller screens
        >
          <h3 className="text-white font-semibold text-xl">{item.title}</h3>
          <span className="text-white text-sm">{item.totalLessons} lessons</span>
          <div
  className="flex items-center justify-center mt-3 mx-2"
  style={{ width: "50px", height: "50px" }}
>
  <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={{
      root: {},
      path: {
        stroke: `#ffffff`,
        strokeWidth: 8,
      },
      text: {
        fill: "#ffffff",
        fontSize: "25px", // Adjust font size to fit inside the circle
        textAnchor: "middle", // Horizontally centers the text
        dominantBaseline: "central", // Vertically centers the text
      },
      trail: {
        stroke: "#d9d9d9",
      },
    }}
  />
</div>

        </div>
      );
    })}
  </div>

  <div className="flex items-center my-10">
    <h1 className="font-semibold text-4xl">Planning</h1>
    <h1 className="font-normal text-xl my-3 ml-10 text-blue-500">View All</h1>
    <div className="flex items-center ml-auto">
      <FontAwesomeIcon icon={faCalendar} className="text-gray-500 mr-2" />
      <span className="text-blue-500 text-xl">2 Nov 2024</span>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
  {planningDetail.map((item, index) => (
    <div
      key={index}
      className="bg-gray-200 rounded-lg p-4 h-[12vh] flex flex-col justify-between w-full"
    >
      <div className="flex items-center">
        <div className={`${item.color} w-[8vh] h-[8vh] p-4 rounded-xl flex items-center justify-center`}>
          <FontAwesomeIcon icon={faBook} className="text-gray-700" />
        </div>

        <div className="flex flex-col ml-3">
          <h3 className="font-semibold text-md">{item.title}</h3>
          <span className="text-sm text-gray-600">{item.time}</span>
        </div>

        <div className="relative flex flex-col items-center -mt-5 ml-auto text-gray-500 h-[1rem]">
          <span className="text-sm absolute top-0">•</span>
          <span className="text-sm absolute top-[10px]">•</span>
          <span className="text-sm absolute top-[20px]">•</span>
        </div>
      </div>
    </div>
  ))}
</div>

</div>

        <div className="w-[25%] flex-grow `h-screen p-6 bg-white shadow-lg shadow-gray-500/50">
          {" "}
          {/* Takes up remaining space */}
          <div className="flex justify-between items-center mb-4">
            {/* Bell Icon Container */}
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-700 text-2xl"
              />
            </div>

            {/* Profile Container */}
            <div className="flex items-center bg-blue-200 rounded-lg p-2 shadow-md w-[65%]">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2" // Adjust the size of the image
              />
              <div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-blue-600">Basic Plan</p>
              </div>
              {/* <span className="ml-auto h-text-blue-600">&#9660;</span> */}
              <div></div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-auto text-black-600 text-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl font-semibold my-8">Statistics</h1>
<div className="grid grid-cols-2 gap-4">
            <div className="w-full bg-blue-200 rounded-2xl p-4 h-[25vh] flex flex-col justify-between">
              <h3 className="text-gray text-xl">Cources Completed</h3>
              <div className="flex items-center">
                <div className="h-7 mt-2 border-l-4 border-blue-500 rounded-full"></div>{" "}
                {/* Vertical line */}
                <p className="text-blue-500 text-4xl mt-2 ml-auto">1</p>{" "}
                {/* Number below the vertical line */}
              </div>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 h-[25vh] flex flex-col justify-between">
              <h3 className="text-gray text-xl">Total Points Gained</h3>
              <div className="flex items-center">
                <div className="h-7 mt-2 border-l-4 border-blue-500 rounded-full"></div>
                <p className="text-blue-500 text-4xl mt-2 ml-auto">2</p>
              </div>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 h-[25vh] flex flex-col justify-between">
              <h3 className="text-gray text-xl">Cources In Progress</h3>
              <div className="flex items-center">
                <div className="h-7 mt-2 border-l-4 border-blue-500 rounded-full"></div>{" "}
                {/* Vertical line */}
                <p className="text-blue-500 text-4xl mt-2 ml-auto">3</p>{" "}
                {/* Number below the vertical line */}
              </div>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 h-[25vh] flex flex-col justify-between">
              <h3 className="text-gray text-xl">Task Finished</h3>
              <div className="flex items-center">
                <div className="h-7 mt-2 border-l-4 border-blue-500 rounded-full"></div>{" "}
                {/* Vertical line */}
                <p className="text-blue-500 text-4xl mt-2 ml-auto">4</p>{" "}
                {/* Number below the vertical line */}
              </div>
            </div>
          </div>

          <div className="flex">
            <h1 className="text-4xl font-semibold my-8">Activity</h1>
            <div className="flex ml-auto">
              <h6 className="text-lg font-semibold my-10 ">Day</h6>
              <h6 className="text-blue-500 text-lg font-semibold my-10 mx-4 ">
                Week
              </h6>
              <h6 className="text-lg font-semibold my-10">Month</h6>
            </div>
          </div>
          <div className="flex items-end gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-48 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Mon</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-36 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Tue</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-24 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Wed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-10 h-60 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Thurs</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-32 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Fri</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-52 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Sat</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-300 w-10 h-48 rounded-full"></div>
              <span className="mt-2 text-sm text-gray-600">Sun</span>
            </div>
          </div>
          {/* You can add more content here as needed */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
