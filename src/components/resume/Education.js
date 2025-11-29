import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2028</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          {/* Diploma */}
          <ResumeCard
            title="Diploma (Computer Science and Engineering)"
            subTitle="Pt. L.R. College of Technology (2022 - 2025)"
            result="8.2 CGPA"
            des="During my 3-year Diploma in Computer Science and Engineering, I built a strong foundation in 
            computer systems, software fundamentals, networking, and programming basics. This period helped 
            me understand the core concepts of technology. From the 2nd semester itself, I developed a deep 
            interest in web development, which motivated me to start learning HTML, CSS, and JavaScript through 
            YouTube and other online platforms. The Diploma not only strengthened my technical base but also 
            played a major role in shaping my direction toward becoming a web developer."
          />

          {/* Web / MERN Course */}
          <ResumeCard
            title="Web Development (Self-Learning)"
            subTitle="YouTube & Online Platforms (2022 - Present)"
            result="Completed"
            des="Alongside my college studies, I started learning web development through YouTube tutorials, online 
            resources, and hands-on practice. I explored front-end development using HTML, CSS, JavaScript, 
            and later expanded into React, Node.js, and modern web technologies. Through continuous practice 
            and building small projects, I developed a strong understanding of how real websites and applications 
            are built. This self-learning journey helped me grow independently, improve my problem-solving skills, 
            and stay consistent with modern web development trends."
          />

          {/* B.Tech */}
          <ResumeCard
            title="B.Tech (Computer Science & Information Technology)"
            subTitle="Pt. L.R College Of Technology (2025 - 2028)"
            result="Pursuing"
            des="After completing my Diploma, I joined B.Tech in CS & IT to expand my knowledge on a deeper and 
            more advanced level. During my B.Tech journey, I continued improving my web development skills while 
            also learning subjects like data structures, operating systems, cloud computing, databases, and AI. 
            This degree is helping me grow academically, explore different fields of technology, and build a 
            stronger understanding of modern software development. My B.Tech degree will be completed by 2028."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education;
