import { motion } from 'framer-motion'
import { HiUserGroup, HiBookOpen, HiBriefcase, HiLightningBolt } from 'react-icons/hi'

const Benefits = () => {
  const benefits = [
    {
      icon: HiUserGroup,
      title: '온라인 네트워킹',
      items: ['정기 밋업', '채팅방', '멘토링']
    },
    {
      icon: HiBookOpen,
      title: '지식 공유',
      items: ['AI 활용 팁', '실전 사례', '뉴스레터']
    },
    {
      icon: HiBriefcase,
      title: '협업 기회',
      items: ['프로젝트 매칭', '스터디 그룹', '코딩 세션']
    },
    {
      icon: HiLightningBolt,
      title: '최신 트렌드',
      items: ['도구 리뷰', '업데이트', '베타 테스트']
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            커뮤니티에 가입하면?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">
                <benefit.icon className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {benefit.title}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 가입 유도 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            함께 성장할 준비가 되셨나요?
          </p>
          <motion.a
            href="#signup"
            className="inline-block px-8 py-4 bg-gradient-button text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 지금 바로 가입하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

