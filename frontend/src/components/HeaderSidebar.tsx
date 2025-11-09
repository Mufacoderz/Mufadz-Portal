import Profil from '../assets/ProfilKosong.webp'

const HeaderSidebar = () => {
    return (
        <>
            <div className="flex items-center gap-3 p-5 border-b">
            <img
                src={Profil}
                alt="profil"
                className="w-12 rounded-full transition-transform duration-300 hover:-translate-y-1 hover:rotate-3"
            />
            <div className="greeting flex flex-col ">
                <h2 className='font-semibold text-sm text-gray-600 dark:text-gray-300 cursor-pointer'>Selamat Datang</h2>
                <h1 className='font-bold text-gray-700 hover:text-blue-500 dark:text-gray-300 cursor-pointer'>Fulan bin Wulan</h1>
            </div>
        </div>
        </>
    )
}

export default HeaderSidebar
