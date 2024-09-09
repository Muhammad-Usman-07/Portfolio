"use client"
import React from 'react';

const Page = () => {
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
        // <!-- === About section start ===  -->
        <section className="about section" id="about">
            <div className="container mx-auto px-4 pb-16">
                <div className="row">
                    <div className="section-title pb-6">
                        <h2 className="text-3xl font-bold text-white pt-9">About me:</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content w-full">
                        <div className="row">
                            <div className="about-text w-full">
                                <h3 className="text-2xl text-white mb-4">
                                    I&apos;m Muhammad Usman & <span className="text-blue-500">Web Developer</span>
                                </h3>
                                <p className="text-white leading-6 text-justify text-base">
                                    Hi, I&apos;m Muhammad Usman! I&apos;m a skilled full stack developer with a passion for building innovative web applications. With expertise in both Front-end and Back-end development, I can take a project from concept to completion.
                                    My tech stack:
                                    1. MERN (MongoDB, Express, React, Node.js)
                                    2. HTML, CSS, JavaScript
                                    3. Responsive web design
                                    4. Database management
                                    What I do:
                                    - Design and develop scalable web applications
                                    - Create responsive and user-friendly interfaces
                                    - Write clean, efficient, and well-documented code
                                    - Collaborate with teams to deliver high-quality projects
                                    Feel free to reach out if you need a skilled full stack developer or want to chat about web development!
                                    I believe in constant learning and keeping up with the latest trends to create new projects.
                                    My goal is to craft web experiences that not only look good but also make users&apos; lives easier. I&apos;m excited about new challenges and opportunities in the frontend & backend world and eager to contribute my skills to innovative projects!
                                </p>
                            </div>
                        </div>
                        <h3 className='text-white font-medium mt-6 text-3xl '>My Info:</h3>
                        <div className="row mt-6 flex flex-wrap">
                            <div className="personal-info w-full lg:w-3/5 ">
                                <div className="row flex flex-wrap pr-0 lg:pr-9">
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Name :
                                            <span className="font-normal text-gray-400 ml-1">Muhammad Usman</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">BirthDay :
                                            <span className="font-normal text-gray-400 ml-1">16 January 2004</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Age :
                                            <span className="font-normal text-gray-400 ml-1">20</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Website :
                                            <span className="font-normal text-gray-400 ml-1">www.digitalusman07.com</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Email :
                                            <span className="font-normal text-gray-400 ml-1">digitalusman07@gmail.com</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Phone :
                                            <span className="font-normal text-gray-400 ml-1">03140513194</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">City :
                                            <span className="font-normal text-gray-400 ml-1">Rawalpindi</span>
                                        </p>
                                    </div>
                                    <div className="info-item w-full sm:w-1/2 mb-4">
                                        <p className="font-semibold text-base text-white border-gray-200 pb-2">Freelancer :
                                            <span className="font-normal text-gray-400 ml-1">Available</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-8">
                                    <div className="buttons space-x-4">
                                        <button
                                            onClick={handleDownload}
                                            type="button"
                                            className="relative text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-5 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12l-7 7-7-7M12 5v12" />
                                                </svg>
                                                <span>Resume</span>
                                            </span>
                                        </button>

                                        <a href="/contact" className="relative text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-3 text-center me-2 mb-2">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-white pt-6 text-3xl sm:hidden md:hidden'>
                                Skills :
                            </div>
                            <div className="skills w-full lg:w-2/5 mt-5 lg:mt-0">
                                <div className="row">
                                    <div className="skill-item w-full mb-6">
                                        <h5 className="text-base font-semibold text-white capitalize mb-2">HTML/CSS/TailwindCSS</h5>
                                        <div className="progress bg-gray-200 h-2 rounded relative">
                                            <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '96%' }}></div>
                                            <div className="skill-percent text-white absolute right-0 font-bold top-[-30px]">96%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item w-full mb-6">
                                        <h5 className="text-base font-semibold text-white capitalize mb-2">JavaScript</h5>
                                        <div className="progress bg-gray-200 h-2 rounded relative">
                                            <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '86%' }}></div>
                                            <div className="skill-percent text-white absolute right-0 font-bold top-[-30px]">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item w-full mb-6">
                                        <h5 className="text-base font-semibold text-white capitalize mb-2">React/Next.Js</h5>
                                        <div className="progress bg-gray-200 h-2 rounded relative">
                                            <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '76%' }}></div>
                                            <div className="skill-percent text-white absolute right-0 font-bold top-[-30px]">75%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item w-full mb-6">
                                        <h5 className="text-base font-semibold text-white capitalize mb-2">Express/MongoDb</h5>
                                        <div className="progress bg-gray-200 h-2 rounded relative">
                                            <div className="progress-in bg-blue-500 h-full rounded" style={{ width: '66%' }}></div>
                                            <div className="skill-percent text-white absolute right-0 font-bold top-[-30px]">50%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        // <!-- === About section end ===  -->
    );
};

export default Page;
