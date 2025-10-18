import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'CodeFlow는 무료인가요?',
      answer: '네, 완전 무료입니다! 커뮤니티 가입과 모든 활동은 무료로 참여하실 수 있습니다.'
    },
    {
      question: '어떤 플랫폼을 사용하나요?',
      answer: 'Discord를 메인으로 사용하며, Slack 채널도 운영할 예정입니다. 가입 후 초대 링크를 받으실 수 있습니다.'
    },
    {
      question: '오프라인 모임도 있나요?',
      answer: '현재는 온라인 위주로 운영되지만, 멤버들의 요청이 있다면 서울/수도권 지역에서 오프라인 밋업도 계획하고 있습니다.'
    },
    {
      question: '초보 개발자도 가입할 수 있나요?',
      answer: '물론입니다! 바이브 코딩에 관심있는 모든 분들을 환영합니다. 초보자분들도 함께 배우고 성장할 수 있는 분위기를 만들어가고 있습니다.'
    },
    {
      question: '어떤 활동을 하나요?',
      answer: '정기 온라인 밋업, AI 도구 활용 팁 공유, 코딩 세션, 프로젝트 협업, 스터디 그룹 등 다양한 활동을 진행합니다. 멤버들의 의견을 반영하여 계속 새로운 활동을 추가하고 있어요.'
    },
    {
      question: '가입 후 어떻게 참여하나요?',
      answer: '가입 후 환영 이메일에 포함된 Discord/Slack 초대 링크를 통해 바로 커뮤니티에 참여하실 수 있습니다. 자기소개 채널에서 인사를 나누고 관심있는 채널에 참여해보세요!'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-4">
                    Q. {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-gray-700 dark:text-gray-300">
                          A. {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

