import { SiDiscord, SiTwitter, SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">바이브코더 커뮤니티</h3>
          <p className="text-gray-400 mb-6">AI와 함께하는 새로운 코딩 문화</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://discord.gg/vibecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Discord"
            >
              <SiDiscord className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/vibecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <SiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/hongdroid94/vibecoder-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <span className="text-gray-600">|</span>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              이용약관
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:contact@vibecoder.com" className="text-gray-400 hover:text-white transition-colors">
              문의하기
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 바이브코더 커뮤니티. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

