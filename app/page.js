"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact'); // Replace '/contact' with your actual contact page path
  };

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/usmanresume.pdf'; // Path to your resume file in the public folder
    link.download = 'Usman_Resume.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="flex flex-col min-h-screen">
      <div className="cover w-full bg-red-50 relative">
        <img className="w-full object-cover h-[150px] sm:h-[200px] md:h-[250px]" src="mancode.webp" alt="" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 sm:-bottom-16 md:-bottom-14">
          <img className="rounded-full border-2 border-white" width={100} height={100} src="usman.png" alt="" />
        </div>
      </div>
      <div className="pt-16 flex justify-center items-center flex-col gap-1 text-center">
        <div className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl">
          Muhammad Usman
        </div>
        <div className="text-white text-lg sm:text-base md:text-lg">
          A passionate MERN stack developer
        </div>
        <div className="text-white text-xs sm:text-base md:text-lg md:w-1/2">
          Turning your digital dreams into engaging and dynamic web realities
        </div>
      </div>

      <div className="flex justify-center items-center m-8">
        <button
          onClick={navigateToContact}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
          HIRE ME
        </button>
        <button
          onClick={handleDownload}
          type="button"
          className="relative text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12l-7 7-7-7M12 5v12" />
            </svg>
            <span>Resume</span>
          </span>
        </button>

      </div>

      {/* Heading for Latest Project */}
      <div className="flex justify-center items-center">
        <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold text-center text-white  dark:text-white mt-0 mb-0 sm:mt-1 sm:mb-1 md:mb-3">
          My Latest Project&apos;s
        </h2>
      </div>


      <div className=" flex flex-wrap justify-center items-center p-1">

        {/* card no 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

          <a href="#">
            <img className="rounded-t-lg p-2" src="project1.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Password Manager</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a password manager using React to securely store edit and delete passwords</p>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">TailwindCSS</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '96%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">96%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">JavaScript React</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '86%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">70%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">MongoDb</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '66%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">50%</div>
              </div>
            </div>

            <a href="https://www.linkedin.com/posts/m-usman-89068b294_passwordmanager-reactapp-tailwindcss-activity-7216015509769621504-mmh8?utm_source=share&utm_medium=member_android"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
              READ MORE
            </a>
          </div>

        </div>

        {/* card no 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

          <a href="#">
            <img className="rounded-t-lg p-1" src="project2.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fundiing App</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a funding app using Next Js MongoDB and Express to process payments from users</p>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">TailwindCSS</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '98%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">98%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">Next Js</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '86%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">70%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">Express Js</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '66%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">50%</div>
              </div>
            </div>
            <a href="https://www.linkedin.com/posts/m-usman-89068b294_mernstack-fullstackdevelopment-webdevelopment-activity-7233801845138219008-26qm?utm_source=share&utm_medium=member_android"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
              READ MORE
            </a>
          </div>

        </div>

        {/* card no 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

          <a href="#">
            <img className="rounded-t-lg p-2" src="project4.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Store</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Created an e commerce store using HTML and CSS for a simple and responsive shopping interface.</p>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">HTML</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '96%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">96%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">CSS</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '90%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">90%</div>
              </div>
            </div>
            <div className="skill-item w-full mb-6">
              <h5 className="text-base font-semibold text-black capitalize mb-2">JavaScript</h5>
              <div className="progress bg-gray-200 h-2 rounded relative">
                <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '40%' }}></div>
                <div className="skill-percent text-black absolute right-0 font-bold top-[-30px]">40%</div>
              </div>
            </div>
            <a href="https://www.linkedin.com/posts/m-usman-89068b294_webdevelopment-html-css-activity-7134067380946616320-B9aT?utm_source=share&utm_medium=member_android"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
              READ MORE
            </a>
          </div>

        </div>

      </div>





    </div>
  );
}
