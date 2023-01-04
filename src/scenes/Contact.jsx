import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";


const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-16">
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
                      <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                    </div>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="mx-auto w-2/4"/>
                    </div>
                   <p className="mt-10 mb-3">
                   You can contact me by submitting the form.
                   </p>
                    
                </motion.div>
         <div className="flex justify-between gap-3">
         <motion.div
                  className="md:w-2/4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount: 0.5}}
                  transition={{ duration:0.5 }}
                  variants={{
                      hidden: {opacity: 0 ,scale:0.8},
                      visible: {opacity:1, scale:1},
                  }}
                >
                    <img alt="contact" className="z-10" src="assets/contact-image.jpeg"/>
                </motion.div>
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
                    <form 
    className="mt-16 flex justify-end"
    action="https://formsubmit.co/hasan3079.hc@gmail.com" method="POST">
        <div className="flex justify-start gap-5 items-start">
            <div className="flex items-start flex-col gap-9">
                <p>Name : </p>
                <p>Email : </p>
                <p>Message : </p>
            </div>
        <div className="flex items-start flex-col gap-8 w-[300px]">
        <input type="text" name="name" className="bg-blue w-full h-[30px] " placeholder="Name" required/>
        <input type="email" name="email" className="bg-blue w-full h-[30px] " placeholder="Email" required/>
        <textarea type="text" name="message" className="bg-blue w-full h-[120px] " placeholder="Message" required/>
        </div>
        
        </div>
              
            
    </form>
    <div className="flex justify-end">
        <button type="submit" className="bg-yellow p-4 mt-5 text-deep-blue flex justify-center">SEND ME A MESSAGE</button>
    </div>
    
                </motion.div>
         
         </div>
        
    </section>
   
  )
}

export default Contact;