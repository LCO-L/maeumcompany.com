# Discord 연동 설정 가이드

## 🎯 변경 사항
- **이전**: Google Calendar로 미팅 예약
- **현재**: Discord로 직접 연결하여 실시간 상담

## 📋 설정 방법

### 1. Discord 서버 만들기 (없다면)
1. Discord 앱/웹 열기
2. 왼쪽 사이드바에서 `+` 버튼 클릭
3. "Create My Own" 선택
4. 서버 이름: "MAEUM Support" 또는 원하는 이름
5. 서버 생성 완료

### 2. 채널 구조 설정 (권장)
```
MAEUM Support Server
├── 📢 announcements (공지사항)
├── 💬 general (일반 문의)
├── 🏛️ government (정부/공공기관 전용)
├── 🏢 enterprise (기업 문의)
├── 🔧 technical-support (기술 지원)
├── 🌍 regional-deployment (지역별 배포)
│   ├── korea
│   ├── japan
│   ├── usa
│   └── others
└── 📞 voice-consultation (음성 상담)
```

### 3. 초대 링크 생성
1. 서버 이름 옆 ▼ 클릭
2. "Invite People" 클릭
3. "Edit invite link" 클릭
4. 설정:
   - Expire after: **Never**
   - Max number of uses: **No limit**
5. "Generate a New Link" 클릭
6. 링크 복사 (예: `https://discord.gg/abc123xyz`)

### 4. index.html 업데이트

**Line 979**에서 수정:
```javascript
// 기존
const DISCORD_INVITE_LINK = 'https://discord.gg/YOUR_INVITE_CODE';

// 실제 링크로 변경 (예시)
const DISCORD_INVITE_LINK = 'https://discord.gg/abc123xyz';
```

### 5. Discord 봇 추가 (선택사항)

자동 응답 및 안내를 위한 봇 설정:

#### 환영 메시지 봇
```
Welcome to MAEUM Support!

Please select your inquiry type:
🏛️ - Government/Public Sector
🏢 - Enterprise/Business
🔧 - Technical Support
🌍 - Regional Deployment
💬 - General Questions
```

#### 티켓 시스템 봇 (추천)
- **Ticket Tool Bot**: 1:1 상담 채널 자동 생성
- **Carl-bot**: 역할 자동 부여 및 티켓 시스템
- **MEE6**: 자동 응답 및 레벨 시스템

### 6. 역할(Role) 설정

#### 기본 역할
- **@everyone**: 기본 권한
- **@Government**: 정부/공공기관 담당자
- **@Enterprise**: 기업 고객
- **@Partner**: 파트너사
- **@Support Team**: MAEUM 지원팀

#### 역할별 채널 접근 권한
- Government 역할 → government 채널만 접근
- Enterprise 역할 → enterprise 채널만 접근

### 7. 자동 응답 설정

Discord 자동 응답 메시지:
```
/maeum-info
→ MAEUM은 140개 언어를 지원하는 온프레미스 AI 솔루션입니다.

/pricing
→ 정부/기업별 맞춤 견적을 제공합니다. DM으로 문의해주세요.

/demo
→ 데모 요청: demo@maeum.io 또는 음성 채널에서 실시간 시연

/languages
→ 한국어, 영어, 일본어, 중국어 등 140개 언어 지원
```

## 🎯 Discord를 선택한 이유

### 장점
1. **실시간 소통**: 즉각적인 응답 가능
2. **화면 공유**: 데모 시연 가능
3. **음성 통화**: 상세한 상담 가능
4. **커뮤니티**: 사용자들끼리 정보 공유
5. **무료**: 비용 없이 무제한 사용
6. **파일 공유**: 문서, 프레젠테이션 전송 가능
7. **멀티 플랫폼**: PC, 모바일, 웹 모두 지원

### 활용 방안
- **데모 시연**: 화면 공유로 실시간 데모
- **그룹 미팅**: 여러 담당자와 동시 회의
- **기술 지원**: 즉각적인 문제 해결
- **커뮤니티 구축**: MAEUM 사용자 네트워크

## 📌 중요 설정

### 보안 설정
1. Server Settings → Safety Setup
2. Verification Level: **Medium** 이상
3. 2FA Requirement: **활성화** (관리자용)

### 알림 설정
1. 새 멤버 가입 시 알림
2. Government/Enterprise 채널 메시지 알림
3. DM 알림 활성화

## 🚀 테스트

1. 웹사이트에서 "Schedule Meeting" 클릭
2. Discord 연결 확인 메시지 표시
3. "확인" 클릭 → Discord 서버로 이동
4. 자동 환영 메시지 확인

## 💡 Pro Tips

1. **전용 상담 봇**: Discord에서 MAEUM 전용 봇 만들기
2. **웨비나 채널**: 정기적인 제품 설명회
3. **FAQ 채널**: 자주 묻는 질문 고정
4. **다국어 채널**: 언어별 전용 채널 운영

---

## 설정 완료 체크리스트

- [ ] Discord 서버 생성
- [ ] 채널 구조 설정
- [ ] 초대 링크 생성 (무제한)
- [ ] index.html Line 979 업데이트
- [ ] 환영 메시지 설정
- [ ] 역할 설정
- [ ] 보안 설정
- [ ] 테스트 완료

---

**문의**: Discord 설정 관련 도움이 필요하시면 언제든 문의해주세요!