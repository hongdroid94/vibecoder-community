# 바이브코더 커뮤니티 랜딩 페이지

AI와 함께하는 새로운 코딩 방식, 바이브 코딩을 즐기는 개발자들의 온라인 커뮤니티입니다.

## 🚀 기술 스택

- **프론트엔드**: React 18 + Vite
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **폼 관리**: React Hook Form
- **백엔드**: Supabase
- **배포**: GitHub Pages

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# GitHub Pages 배포
npm run deploy
```

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

1. GitHub 저장소에 코드 푸시
2. `npm run deploy` 실행
3. GitHub Pages 설정에서 `gh-pages` 브랜치 선택

## 🗄️ Supabase 설정 ✅

**상태:** 설정 완료!

- **프로젝트:** vibecoder-community
- **리전:** ap-northeast-2 (서울)
- **데이터베이스:** users 테이블 생성 완료
- **환경 변수:** `.env.local` 설정 완료

자세한 내용은 `SUPABASE_SETUP.md` 파일을 참고하세요.

## 📋 데이터베이스 스키마

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  ai_tools TEXT[],
  field VARCHAR(50),
  bio TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 다크/라이트 모드
- ✅ 부드러운 스크롤 애니메이션
- ✅ 카운터 애니메이션
- ✅ FAQ 아코디언
- ✅ 폼 유효성 검증
- ✅ Supabase 연동 완료
- ✅ 실시간 가입 기능 작동
- 🚧 환영 이메일 자동 발송 (예정)

## 📞 문의

- 이메일: contact@vibecoder.com
- Discord: [바이브코더 커뮤니티](https://discord.gg/vibecoder)
- GitHub: [@hongdroid94](https://github.com/hongdroid94)

## 📄 라이센스

MIT License

---

Made with ❤️ by 바이브코더 커뮤니티

