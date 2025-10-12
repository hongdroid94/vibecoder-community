import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const Counter = ({ from, to, label }) => {
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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {displayValue}+
      </div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const stats = [
    { from: 0, to: 200, label: '가입 멤버' },
    { from: 0, to: 24, label: '진행 모임' },
    { from: 0, to: 156, label: '공유 팁' }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

