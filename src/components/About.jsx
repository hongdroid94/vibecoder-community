import { motion } from 'framer-motion'
import { SiCursor, SiGithubcopilot, SiOpenai } from 'react-icons/si'

const About = () => {
  const tools = [
    { name: 'Cursor', icon: SiCursor },
    { name: 'Copilot', icon: SiGithubcopilot },
    { name: 'ChatGPT', icon: SiOpenai },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            바이브 코딩이란?
          </h2>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-primary">"AI야, 로그인 버튼 만들어줘"</span>라고 말하면<br />
              AI가 실제 코드를 작성해주는 방식이에요
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg mb-3 hover:scale-110 transition-transform">
                  <tool.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">기존 코딩 방식</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-left">
                <li>• 문법 암기</li>
                <li>• 세부 구현</li>
                <li>• 시간 많이 소요</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-button rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4">바이브 코딩</h3>
              <ul className="space-y-2 text-white/90 text-left">
                <li>• 자연어로 설명</li>
                <li>• AI가 코드 생성</li>
                <li>• 빠른 프로토타입</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

