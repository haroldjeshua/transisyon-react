import { motion } from "framer-motion"
import { container, item } from "../animation"

export default function Contact() {
    return (
        <motion.main
            className="text-gray-900 absolute top-0 left-0 w-full h-full bg-blue-700 lg:px-48 px-16"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
        >
            <div className="my-96 p-1 overflow-hidden">
                <motion.h1
                    className="text-6xl text-center lg:text-right lg:text-9xl"
                    animate={{ y: 0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >Keep in Touch</motion.h1>
            </div>
            
            <div className="flex gap-40 text-gray-500">
                <div className="lg:text-2xl tex-base">
                    <h4>Find me:</h4>
                </div>
                <div className="lg:text-6xl text-2xl underline">
                    <motion.ul variants={container} initial="hidden" animate="show">
                        <div className="overflow-hidden">
                            <motion.li variants={item} className="pb-2">Twitter</motion.li>
                        </div>
                        <div className="overflow-hidden">
                            <motion.li variants={item} className="pb-2">Instagram</motion.li>
                        </div>
                        <div className="overflow-hidden">
                            <motion.li variants={item} className="pb-2">Dribbble</motion.li>
                        </div>
                        <div className="overflow-hidden">
                            <motion.li variants={item} className="pb-2">LinkedIn</motion.li>
                        </div>
                    </motion.ul>
                </div>
            </div>
        </motion.main>
    )
}