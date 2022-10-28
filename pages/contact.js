import { motion } from "framer-motion"

export default function Contact() {
    return (
        <motion.main
            className="text-gray-900 absolute top-0 left-0 w-full h-full bg-blue-700 lg:px-48 px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
        >
            <div className="my-96 p-1">
                <h1 className="text-6xl text-center lg:text-right lg:text-9xl">Keep in Touch</h1>
            </div>
            
            <div className="flex gap-40">
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