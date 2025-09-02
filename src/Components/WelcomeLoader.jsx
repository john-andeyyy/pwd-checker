
export default function WelcomeLoader() {
    return (
        <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 overflow-hidden px-4">
            <div className="absolute top-10 left-5 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-5 w-32 sm:w-48 h-32 sm:h-48 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl text-center text-white max-w-md w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                    Welcome to <span className="text-yellow-300">PWD Portal</span>
                </h1>
                <p className="text-lg mb-8 text-white/90 leading-relaxed">
                    Checking your access and preparing your personalized experience.
                </p>

                <div className="flex justify-center space-x-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full animate-bounce delay-150"></div>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full animate-bounce delay-300"></div>
                </div>
            </div>
        </div>
    );
}
