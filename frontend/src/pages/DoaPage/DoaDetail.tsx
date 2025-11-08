import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

interface Doa {
    id: number
    judul: string
    arab: string
    latin: string
    terjemah: string
}

export default function DoaDetail() {
    const { id } = useParams<{ id: string }>()
    const [doa, setDoa] = useState<Doa | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return
        axios
            .get(`https://open-api.my.id/api/doa/${id}`)
            .then(res => setDoa(res.data))
            .catch(console.error)
    }, [id])

    if (!doa) return <p className="text-center mt-10 text-blue-500 animate-pulse">Loading...</p>

    return (
        <div className="max-w-3xl mx-auto mt-10 px-5">
            <button
                onClick={() => navigate("/doa")}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
            >
                ← Kembali ke Daftar Do'a
            </button>

            <div className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100">
                <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">{doa.judul}</h1>
                
                <div className="text-right mb-6">
                    <p className="text-2xl leading-relaxed">{doa.arab}</p>
                </div>

                <p className="text-center italic text-gray-700 mb-4 text-lg">{doa.latin}</p>

                <p className="text-gray-800 text-base leading-relaxed">{doa.terjemah}</p>
            </div>
        </div>
    )
}
