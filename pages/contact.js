import { motion } from "framer-motion"

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
                    <ul>
                        <li className="pb-2">Twitter</li>
                        <li className="pb-2">Instagram</li>
                        <li className="pb-2">Dribbble</li>
                        <li className="pb-2">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </motion.main>
    )
}