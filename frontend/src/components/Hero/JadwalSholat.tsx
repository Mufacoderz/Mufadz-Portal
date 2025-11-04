import React from 'react'

const JadwalSholat = () => {
    return (
        <div>
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
        </div>
    )
}

export default JadwalSholat
