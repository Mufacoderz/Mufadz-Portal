
export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden z-10">
            {/* Blob 1 */}
            <div
                className="
          absolute top-10 left-20 w-72 h-72
          bg-gradient-to-br from-sky-300 to-blue-500
          opacity-30 blur-3xl rounded-full
          animate-blob
        "
            ></div>

            {/* Blob 2 */}
            <div
                className="
          absolute bottom-10 right-20 w-80 h-80
          bg-gradient-to-tr from-blue-400 to-indigo-600
          opacity-25 blur-3xl rounded-full
          animate-blob animation-delay-2000
        "
            ></div>

            {/* Blob 3 */}
            <div
                className="
          absolute top-1/2 left-1/2 w-64 h-64
          bg-gradient-to-r from-sky-200 to-blue-400
          opacity-20 blur-2xl rounded-full
          animate-blob animation-delay-4000
        "
            ></div>
        </div>
    );
}
