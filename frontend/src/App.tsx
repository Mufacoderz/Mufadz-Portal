import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf5ff] via-[#d8ecff] to-[#b8d9f9] text-gray-800 font-sans flex flex-col">
      {/* NAVBAR */}
      <nav className="backdrop-blur-md bg-white/40 border-b border-white/30 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-semibold text-[#3b73b8] tracking-wide">
            🌙 Mufadz
          </h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#" className="hover:text-[#4477b2] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#4477b2] transition">Kalender</a></li>
            <li><a href="#" className="hover:text-[#4477b2] transition">Jadwal</a></li>
            <li><a href="#" className="hover:text-[#4477b2] transition">Tentang</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
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

      {/* CONTENT CARDS */}
      <section className="container mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
        {/* JADWAL SHOLAT */}
        <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8 hover:scale-[1.02] transition-all">
          <h3 className="text-2xl font-semibold mb-4 text-[#4477b2]">
            🕌 Jadwal Sholat Hari Ini
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Subuh</strong> — 04:25</li>
            <li><strong>Dzuhur</strong> — 11:57</li>
            <li><strong>Ashar</strong> — 15:21</li>
            <li><strong>Maghrib</strong> — 17:51</li>
            <li><strong>Isya</strong> — 19:05</li>
          </ul>
        </div>

        {/* Card Kalender */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-blue-800 mb-2 text-center">Kalender Hijriah</h2>
          <p className="text-gray-600 text-center mb-4">31 Oktober 2025 / 8 Rabi'ul Akhir 1447 H</p>

          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  i + 1 === 31
                    ? "bg-blue-400 text-white font-bold shadow"
                    : "bg-blue-100 text-gray-700"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#9cc6f2] text-white text-center py-4 mt-auto shadow-inner">
        <p className="text-sm">
          © 2025 Mufadz — Muslim Lifestyle App | Dibangun dengan 🩵 & Doa
        </p>
      </footer>
    </div>
  );
}
