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
      // 임시로 로컬 스토리지에 저장 (결제 완료 후 Supabase에 저장 예정)
      localStorage.setItem('codeflow_signup_data', JSON.stringify(data))
      
      setShowSuccess(true)
      reset()
    } catch (error) {
      console.error('Error:', error)
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handlePayment = () => {
    // 래피드 결제 링크로 이동
    window.open('https://www.latpeed.com/products/PuCtP', '_blank')
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
              지금 바로 CodeFlow와 함께하세요!
            </h2>
          </div>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-center shadow-xl"
            >
              <HiCheckCircle className="w-20 h-20 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                양식 제출 완료! 🎉
              </h3>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-2 font-semibold">
                  거의 다 왔습니다!
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  CodeFlow 멤버가 되기 위해서는<br />
                  <span className="font-bold text-blue-600 dark:text-blue-400">멤버십 결제</span>를 완료해주셔야 합니다.
                </p>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    💡 결제 완료 후 운영진의 심사를 거쳐<br />최종 승인이 이루어집니다
                  </p>
                </div>
              </div>
              
              <motion.button
                onClick={handlePayment}
                className="inline-flex items-center px-8 py-4 bg-gradient-button text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all mb-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💳 멤버십 결제하러 가기
              </motion.button>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                안전한 결제는 <a href="https://www.latpeed.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700">래피드(Latpeed)</a>에서 진행됩니다
              </p>
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
                '다음 단계: 멤버십 결제 →'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default SignupForm

