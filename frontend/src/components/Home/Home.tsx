import { motion } from "framer-motion"
import Hero from "./Hero"
import JadwalSholat from "./JadwalSholat"
import KalenderModern from "./Kalender"

const Home = () => {
    return (
        <section className="relative overflow-x-hidden py-16 min-h-screen box-border">
            <div className="relative w-full max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-16 box-border">
                {/* mengkilap */}
            <div className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine pointer-events-none" />
                <motion.div
                    className="flex flex-col justify-center items-center text-center md:text-left mb-12 sm:py-36 py-10 w-full"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Hero />
                </motion.div>

                <motion.div
                    className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Jadwal Sholat */}
                    <div id="JadwalSholat" className="w-full lg:w-1/2 flex justify-center">
                        <JadwalSholat />
                    </div>

                    {/* Kalender */}
                    <div id="Kalender" className="w-full lg:w-1/2 flex justify-center">
                        <KalenderModern />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home
