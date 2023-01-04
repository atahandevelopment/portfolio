import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";


const Testimonials = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/* HEADINGS */}

            <motion.div
                  className="md:w-2/4  text-center md:text-left"
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
                      <span className="text-red">TESTIMONIALS</span>
                    </p>
                    </div>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="mx-auto w-2/4"/>
                    </div>
                   <p className="mt-10">
                   Here's what people are saying my works.
                   </p>
                    
                </motion.div>

                {/* TESTIMONIALS */}
                <div className="md:flex md:justify-between gap-8">
                <motion.div
                   className={`bg-blue ${testimonialStyles} before:content-person1`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  transition={{delay:0.2, duration:0.5 }}
                  variants={{
                      hidden: {opacity: 0 , scale:0.8},
                      visible: {opacity:1, scale:1},
                  }}
                >
<p className="font-playfair text-6xl flex items-start">"</p> 
                <p className="text-center text-xl">Buraya Referansların Yorumları Gelecek</p>
                </motion.div>
                <motion.div
                   className={`bg-red ${testimonialStyles} before:content-person2`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  transition={{delay:0.4, duration:0.5 }}
                  variants={{
                      hidden: {opacity: 0 , scale:0.8},
                      visible: {opacity:1, scale:1},
                  }}
                >
                <p className="font-playfair text-6xl flex items-start">"</p> 
                <p className="text-center text-xl">Buraya Referansların Yorumları Gelecek</p>   
                </motion.div>
                <motion.div
                  className={`bg-yellow ${testimonialStyles} before:content-person3`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  transition={{delay:0.6, duration:0.5 }}
                  variants={{
                      hidden: {opacity: 0 , scale:0.8},
                      visible: {opacity:1, scale:1},
                  }}
                >
<p className="font-playfair text-6xl flex items-start">"</p> 
                <p className="text-center text-xl">Buraya Referansların Yorumları Gelecek</p>
                </motion.div>
                </div>
                
        </section>
    );
}

export default Testimonials;