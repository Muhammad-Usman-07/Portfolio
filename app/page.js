"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

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

  useEffect(() => {
    // Initialize the carousel
    const initCarousel = () => {
      const items = document.querySelectorAll("[data-carousel-item]");
      const prevBtn = document.querySelector("[data-carousel-prev]");
      const nextBtn = document.querySelector("[data-carousel-next]");

      let currentIndex = 0;
      const slideInterval = 3000; // Auto-slide interval in milliseconds
      let intervalId;

      const showItem = (index) => {
        items.forEach((item, i) => {
          item.classList.toggle("hidden", i !== index);
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
      };

      const prevSlide = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
      };

      const startAutoSlide = () => {
        intervalId = setInterval(nextSlide, slideInterval);
      };

      const stopAutoSlide = () => {
        clearInterval(intervalId);
      };

      prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
      });

      nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
      });

      // Initial setup
      showItem(currentIndex);
      startAutoSlide();

      // Cleanup on unmount
      return () => stopAutoSlide();
    };

    initCarousel();
  }, []);

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
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12l-7 7-7-7M12 5v12" />
            </svg>
            <span>Resume</span>
          </span>
        </button>

      </div>

      {/* Heading for Latest Project */}
      <div className="flex justify-center items-center">
        <h2 className="text-2xl border-b-2 sm:text-3xl md:text-4xl font-normal text-center text-white dark:text-white mt-0 mb-0 sm:mt-1 sm:mb-1 md:mb-3">
          My Latest Project
        </h2>
      </div>

      <div id="custom-controls-gallery" className="relative w-full p-2 " data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden w-full my-0">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="project1.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Item 1" />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="project2.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Item 2" />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="project3.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Item 3" />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="project4.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Item 4" />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="project3.png" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Item 5" />
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
