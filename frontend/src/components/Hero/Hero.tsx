import React from 'react'
import JadwalSholat from './JadwalSholat'
import Kalender from './Kalender'
import ArahKiblat from './ArahKiblat'

const Hero = () => {
    return (
        <>
            <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pow-star.png')] opacity-5"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3b73b8] mb-4 drop-shadow-sm">
                    Hidup Lebih Terarah, Tenang, dan Terhubung 🌙
                </h2>
                <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                    Aplikasi Muslim Lifestyle modern untuk melihat jadwal sholat, kalender hijriyah,
                    dan arah kiblat — dirancang dengan sentuhan desain lembut dan fokus spiritual.
                </p>

                <button className="mt-8 bg-[#82b5ea] hover:bg-[#74a7e0] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all">
                    Mulai Sekarang
                </button>
            </section>
            
            <div>
                <section className="container mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
                    <JadwalSholat />
                    <Kalender />
                </section>
                <ArahKiblat />
            </div>
        </>

    )
}

export default Hero
