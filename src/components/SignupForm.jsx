import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { signupUser } from '../lib/supabase'

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Supabase에 저장
      await signupUser(data)
      
      setShowSuccess(true)
      reset()
      
      // 5초 후 성공 메시지 숨김
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      alert('가입 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              지금 바로 바이브코더가 되어보세요!
            </h2>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
            >
              <HiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                환영합니다!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                가입이 완료되었습니다. 곧 환영 이메일을 받으실 거예요!
              </p>
              <a
                href="https://discord.gg/vibecoder"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Discord 참여하기
              </a>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            {/* 이름 */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('name', { required: '이름을 입력해주세요' })}
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="홍길동"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* 이메일 */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('email', {
                  required: '이메일을 입력해주세요',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '올바른 이메일 형식이 아닙니다'
                  }
                })}
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="hong@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* AI 도구 */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">
                사용하는 AI 도구 (선택)
              </label>
              <div className="space-y-2">
                {['Cursor', 'GitHub Copilot', 'ChatGPT', 'Claude', '기타'].map((tool) => (
                  <label key={tool} className="flex items-center">
                    <input
                      {...register('aiTools')}
                      type="checkbox"
                      value={tool}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{tool}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 개발 분야 */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                개발 분야 (선택)
              </label>
              <select
                {...register('field')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              >
                <option value="">선택하세요</option>
                <option value="frontend">프론트엔드</option>
                <option value="backend">백엔드</option>
                <option value="fullstack">풀스택</option>
                <option value="mobile">모바일</option>
                <option value="data">데이터/AI</option>
                <option value="etc">기타</option>
              </select>
            </div>

            {/* 자기소개 */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                간단한 자기소개 (선택, 최대 200자)
              </label>
              <textarea
                {...register('bio', { maxLength: 200 })}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                placeholder="AI 코딩에 관심이 많은 개발자입니다..."
              ></textarea>
            </div>

            {/* 개인정보 동의 */}
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  {...register('consent', { required: '개인정보 수집에 동의해주세요' })}
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  개인정보 수집 및 이용에 동의합니다 <span className="text-red-500">*</span>
                  <a href="#" className="ml-2 text-primary underline">개인정보처리방침 보기</a>
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>
              )}
            </div>

            {/* 제출 버튼 */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-button text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  가입 중...
                </span>
              ) : (
                '🚀 바이브코더 되기'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default SignupForm

