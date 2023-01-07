import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DownloadIcon from '@mui/icons-material/Download';
import "./index.css"
const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    return ( 
        <section 
        id="home" 
        className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* Image Section */}
            <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden: {opacity: 0 , x: -50},
                        visible: {opacity:1, x:0},
                    }}
                    >
            <div className="md:order-2 flex justify-center basis-3/5 z-10 md:mt-32">
                {isAboveMediumScreens ? (
                  
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                        before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img id="profile"
                        alt="profile"
                        className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                        max-w-[400px] md:max-w-[600px]"
                        src="./assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img id="profile"
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"
                    src="./assets/profile-image.png"
                    />
                )}
            </div>
            </motion.div>
            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* Headings */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden: {opacity: 0 , x: -50},
                        visible: {opacity:1, x:0},
                    }}
                    >
                        <div id="flip-container" className="flex top-[-5]">
                            <div id="front" className="text-6xl cursor-pointer font-playfair z-10 text-center md:text-star">
                                <p>
                            Hasan {""}
                            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                            xs:before:content-brush cursor-pointer  before:absolute before:-left-[45px]
                            before:-top-[110px] before:z-[-1]"
                            >Atahan</span>
                            </p>
                            </div>
                            <div id="back">
                            <p className="text-4xl cursor-pointer font-playfair z-10 text-center md:text-start">
                            I am a <span className="text-yellow">Frontend </span>Web Developer
                            
                            </p>
                            </div>
                        </div>
                        <p className="text-6xl cursor-pointer font-playfair z-10 flex justify-end md:text-end p-7">
                            <p className="mt-20 mb-7 text-sm text-center md:text-start">
                            Worked in public 6 years as an Officer. After 6 years in public replanned career and learned frontEnd web development. Dynamic FrontEnd Web Developer with front programming languages skills, developing complex solutions, processing strong creative thinking skills, highly energetic and integrated with strong troubleshooting abilities. Proficient in developing and designing front-end web architecture, application development, ensuring the responsiveness of application and working alongside graphic designers for web design features, building efficient, scalable and maintainable code and user- friendly UI/UX. Working technical documentation. Focusing both on technical and consumer needs to bring up the final Product. Have the ability to create algorithms effectively and communicate appropriately with team members. Quick to grasp new technologies and concepts to develop innovative and creative solutions to problems. Always eager to learn various technologies, tools and libraries. Especially interested in HTML- CSS-JS-ReactJs and Redux-MongoDB-Express-NodeJS.
                            </p>
                            </p>
                            
                            
                            
                            
                        
                    </motion.div>

                    {/* CALL TO ACTIONS */}

                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.2, duration:0.5 }}
                    variants={{
                        hidden: {opacity: 0 , x: -50},
                        visible: {opacity:1, x:0},
                    }}
                    >
                        <AnchorLink
                        id="contact"
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500"
                        onClick={()=> setSelectedPage("contact")}
                        href="#contact"
                        >
                            Contact Me
                        </AnchorLink>
                        
                        <a
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={()=> setSelectedPage("downloadcv")}
                        href="https://github.com/atahandevelopment/portfolio/blob/main/src/assets/CV.docx"
                        >
                           <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                            justify-between font-playfair px-10">
                                <DownloadIcon/>
                                                     
                                <p className="ml-1">Download CV</p>
                                
                            </div>
                         
                         
                        
                            
                        </a>
                        
                        

                        </motion.div>

                        <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5 }}
                        variants={{
                            hidden: {opacity: 0 , x: -50},
                            visible: {opacity:1, x:0},
                        }}
                        >
                            <SocialMediaIcons/>
                        </motion.div>
                    
                </div>
        </section>

)
}

export default Landing;