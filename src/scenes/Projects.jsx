import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";


const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity:0, scale: 0.8},
    visible: {opacity:1, scale:1 }
}


const Project = ({link, title,description})=>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div
        variants={projectVariant}
        className="relative"
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                {description}
                </p>
                <a href={link}>
                <button className="p-3 bg-red">Wiew</button>
                </a>                
            </div>
            <img className="w-full" src={`../assets/${projectTitle}.jpeg`} alt={projectTitle}/>
        </motion.div>
    )
}

const Projects = () => {
   
    return (
        <section id="projects" className="pt-24 pb-48">
            {/* HEADINGS */}

            <motion.div
                  className="md:w-2/4 mx-auto text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  transition={{ duration:0.5 }}
                  variants={{
                      hidden: {opacity: 0 , y:-50},
                      visible: {opacity:1, y:0},
                  }}
                >
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                       MY <span className="text-red">PRO</span>JECTS
                    </p>
                    </div>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-2/3"/>
                    </div>
                   <p className="mt-10 mb-10">
                   Some of my projects are on this page.
                   </p>
                    
                </motion.div>
                
                {/* Projects */}

                <div className="felx justify-center">
                <motion.div
                  className="sm:grid sm:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-red w-full h-full text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project 
                    title="Project 1"
                    description=" "
                    link=""
                    />
                    <Project 
                    title="Project 2"
                    description=""
                    link=""
                    />

                    {/* ROW 2 */}
                    <Project 
                    title="Project 3" 
                    description=""
                    link=""
                    />
                    <Project 
                    title="Project 4" 
                    description=""
                    link=""
                    />
                    <Project 
                    title="Project 5" 
                    description=""
                    link=""
                    />
                    {/* ROW 3 */}
                    <Project 
                    title="Project 6" 
                    description=""
                    link=""
                    />
                    <Project 
                    title="Project 7" 
                    description="The aim of this project is to create an Admin panel that has a dark and light theme and allows the data from users to be tracked in an admin panel. . Skills/Tools: Mui Material, Data Grid, Nivo, FullCalendar, Formik and Yup libraries were used in this project."
                    link="https://hasandashboard.netlify.app"
                    />
                    <div className="flex justify-center 
                    text-center 
                    items-center p-10 
                    bg-blue max-w-full 
                    text-2xl 
                    font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
                </div>
        </section>
    )
}

export default Projects