import React from 'react'

const Kalender = () => {
    return (
        <div>
            <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-blue-800 mb-2 text-center">Kalender Hijriah</h2>
                <p className="text-gray-600 text-center mb-4">31 Oktober 2025 / 8 Rabi'ul Akhir 1447 H</p>

                <div className="grid grid-cols-7 gap-2 text-center">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div
                            key={i}
                            className={`p-2 rounded-lg ${i + 1 === 31
                                    ? "bg-blue-400 text-white font-bold shadow"
                                    : "bg-blue-100 text-gray-700"
                                }`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kalender
