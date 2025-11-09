

export default function Footer() {
    return (
        <footer className="bg-blue-700 dark:bg-blue-300 text-white dark:text-gray-700 py-3">
            <div className="max-w-6xl mx-auto px-5 flex items-center justify-center">
                
                <div className="text-sm font-semibold">&copy; {new Date().getFullYear()} Mufadz App</div>

            </div>
        </footer>
    )
}
