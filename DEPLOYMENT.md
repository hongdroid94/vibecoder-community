# 배포 가이드

## ✅ 완료된 작업

### 1. 프로젝트 초기화
- ✅ React + Vite 프로젝트 생성
- ✅ Tailwind CSS 설정
- ✅ 필수 라이브러리 설치
  - framer-motion (애니메이션)
  - react-hook-form (폼 관리)
  - react-icons (아이콘)
  - @supabase/supabase-js (백엔드)

### 2. 컴포넌트 개발
- ✅ Header (네비게이션 + 다크모드 토글)
- ✅ Hero (첫 화면 + 그라데이션 배경)
- ✅ About (바이브 코딩 소개)
- ✅ Benefits (커뮤니티 혜택 4가지)
- ✅ Stats (통계 + 카운터 애니메이션)
- ✅ SignupForm (가입 폼 + 유효성 검증)
- ✅ FAQ (아코디언)
- ✅ Footer (소셜 링크)

### 3. 기능 구현
- ✅ 다크/라이트 모드
- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 스크롤 애니메이션
- ✅ 폼 유효성 검증
- ✅ Supabase 연동 준비 (클라이언트 설정)

### 4. GitHub 및 배포
- ✅ GitHub 저장소 생성: https://github.com/hongdroid94/vibecoder-community
- ✅ Git 초기화 및 푸시
- ✅ GitHub Pages 배포 완료

## 🌐 배포된 웹사이트

**URL:** https://hongdroid94.github.io/vibecoder-community/

## 📋 다음 단계 (Supabase 설정)

### 1. Supabase 프로젝트 생성
1. https://supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 이름: `vibecoder-community`
4. Database Password 설정
5. Region 선택 (Northeast Asia - Seoul 권장)

### 2. 데이터베이스 테이블 생성
Supabase SQL Editor에서 다음 쿼리 실행:

```sql
-- Users 테이블 생성
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  ai_tools TEXT[],
  field VARCHAR(50),
  bio TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 인덱스 생성
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 정책
CREATE POLICY "Enable read access for all users" ON users
  FOR SELECT USING (true);

-- 삽입 정책 (누구나 가입 가능)
CREATE POLICY "Enable insert for all users" ON users
  FOR INSERT WITH CHECK (true);
```

### 3. 환경 변수 설정
로컬 개발을 위해 `.env.local` 파일 생성:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Supabase 대시보드 > Settings > API에서 URL과 anon key 복사

### 4. GitHub Pages에 환경 변수 적용
**주의:** GitHub Pages는 정적 사이트이므로 환경 변수를 빌드 시점에 주입해야 합니다.

**옵션 1: GitHub Actions 사용 (권장)**
`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

그리고 GitHub Repository Settings > Secrets > Actions에서 환경 변수 추가:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

**옵션 2: 수동 배포**
로컬에서 `.env.local` 파일을 설정한 후 `npm run deploy` 실행

### 5. 이메일 발송 설정 (선택 사항)
Supabase Auth를 사용하거나 SendGrid/Resend 같은 서비스 연동

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview

# GitHub Pages 배포
npm run deploy
```

## 📊 현재 상태

- ✅ 프론트엔드: 100% 완료
- ⏳ Supabase 연동: 80% 완료 (환경 변수 설정 필요)
- ⏳ 이메일 발송: 0% (추후 구현)
- ✅ 배포: 100% 완료

## 🎉 다음 개발 예정

1. Supabase 환경 변수 설정
2. 가입 폼 실제 동작 테스트
3. 환영 이메일 자동 발송 구현
4. Google Analytics 연동
5. 개인정보처리방침 페이지 추가
6. 관리자 대시보드 (선택)

---

**배포 완료 시간:** 2025년 10월 12일  
**개발자:** 홍드로이드

