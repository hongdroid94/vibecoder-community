import { HiMoon, HiSun } from 'react-icons/hi'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">바이브코더</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">홈</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">소개</a>
            <a href="#signup" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">가입하기</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">FAQ</a>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="다크모드 토글"
          >
            {darkMode ? (
              <HiSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

