import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// 회원 가입 함수
export const signupUser = async (userData) => {
  if (!supabase) {
    throw new Error('Supabase가 설정되지 않았습니다')
  }

  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        name: userData.name,
        email: userData.email,
        ai_tools: userData.aiTools || [],
        field: userData.field || null,
        bio: userData.bio || null,
        consent: userData.consent
      }
    ])
    .select()

  if (error) throw error
  return data
}

// 통계 조회 함수
export const getStats = async () => {
  if (!supabase) {
    // Supabase가 설정되지 않은 경우 더미 데이터 반환
    return {
      totalMembers: 128,
      totalEvents: 24,
      totalTips: 156
    }
  }

  const { count, error } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })

  if (error) throw error

  return {
    totalMembers: count || 0,
    totalEvents: 24, // TODO: events 테이블에서 조회
    totalTips: 156  // TODO: tips 테이블에서 조회
  }
}

