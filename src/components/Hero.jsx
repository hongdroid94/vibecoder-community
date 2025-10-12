import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-primary pt-20">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI와 함께하는 새로운 코딩,<br />
            바이브코더와 함께하세요
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI 도구로 코딩하는 개발자들이 모여 경험을 나누고<br />
            함께 성장하는 커뮤니티입니다
          </p>

          <motion.a
            href="#signup"
            className="inline-block px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 커뮤니티 가입하기
          </motion.a>

          <motion.p
            className="mt-8 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            현재 <span className="font-bold text-white">128명</span>의 바이브코더가 활동중
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

