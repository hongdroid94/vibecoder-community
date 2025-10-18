import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { HiUsers, HiCalendar, HiLightBulb } from 'react-icons/hi'

const Counter = ({ from, to, label, icon: Icon, gradient }) => {
  const count = useMotionValue(from)
  const [displayValue, setDisplayValue] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const unsubscribe = count.on('change', (latest) => {
        setDisplayValue(Math.round(latest))
      })
      
      const controls = animate(count, to, { duration: 2 })
      
      return () => {
        unsubscribe()
        controls.stop()
      }
    }
  }, [inView, count, to])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* 그라데이션 배경 */}
      <div className={`absolute inset-0 ${gradient} opacity-10 dark:opacity-20`}></div>
      
      {/* 컨텐츠 */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all">
        {/* 아이콘 */}
        <div className={`inline-flex items-center justify-center w-16 h-16 ${gradient} rounded-xl mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* 숫자 */}
        <div className="text-5xl md:text-6xl font-bold mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {displayValue}
          </span>
          <span className="text-primary">+</span>
        </div>
        
        {/* 라벨 */}
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </div>
      </div>
    </motion.div>
  )
}

const Stats = () => {
  const stats = [
    { 
      from: 0, 
      to: 200, 
      label: '가입 멤버',
      icon: HiUsers,
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    { 
      from: 0, 
      to: 24, 
      label: '진행 모임',
      icon: HiCalendar,
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    { 
      from: 0, 
      to: 156, 
      label: '공유 팁',
      icon: HiLightBulb,
      gradient: 'bg-gradient-to-br from-amber-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            함께 성장하는 커뮤니티
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            지금 이 순간에도 계속 증가하고 있습니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

