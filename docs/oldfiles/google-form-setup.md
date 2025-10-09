# Google Form 설정 가이드

## 1단계: Google Form 생성

1. [Google Forms](https://forms.google.com) 접속
2. "빈 양식" 클릭
3. 제목 설정: "MAEUM - AI Revolution Waitlist"

## 2단계: 필드 추가

### 이메일 필드 (필수)
- 질문: "Email Address"
- 유형: "단답형"
- 설정: "필수" 체크
- 설정: "응답 확인" > "텍스트" > "이메일"

### 추가 필드 (선택)
1. **이름**
   - 질문: "Name (Optional)"
   - 유형: "단답형"

2. **조직/회사**
   - 질문: "Organization/Company (Optional)"
   - 유형: "단답형"

3. **국가/지역**
   - 질문: "Country/Region"
   - 유형: "드롭다운"
   - 옵션: Korea, United States, Japan, China, etc.

4. **관심사**
   - 질문: "What's your primary interest in MAEUM?"
   - 유형: "객관식"
   - 옵션:
     - Government/Public Sector
     - Education
     - Healthcare
     - Enterprise/Business
     - Personal Use
     - Investment
     - Other

5. **메시지**
   - 질문: "Message (Optional)"
   - 유형: "장문형"

## 3단계: Form ID와 Entry ID 찾기

### Form ID 찾기:
1. 상단의 "보내기" 버튼 클릭
2. 링크 아이콘 클릭
3. URL에서 Form ID 확인:
   ```
   https://docs.google.com/forms/d/e/[FORM_ID]/viewform
   ```
   예: `1FAIpQLSf_abc123xyz...`

### Entry ID 찾기:
1. Form 미리보기 클릭
2. 브라우저에서 F12 (개발자 도구)
3. 이메일 입력 필드 우클릭 > 검사
4. HTML에서 `name="entry.XXXXXXX"` 찾기
   예: `entry.1234567890`

## 4단계: 응답 설정

1. "응답" 탭 클릭
2. 설정:
   - ✅ 이메일 주소 수집
   - ✅ 응답자가 제출 후 수정 가능
   - ✅ 요약 차트 및 텍스트 응답 보기

3. 이메일 알림:
   - 점 3개 메뉴 > "새 응답 이메일 받기"

## 5단계: 스프레드시트 연결

1. 응답 탭에서 스프레드시트 아이콘 클릭
2. "새 스프레드시트 만들기"
3. 이름: "MAEUM Waitlist Responses"

## 6단계: 웹사이트에 연동

index.html에서 다음 부분을 실제 값으로 변경:

```javascript
// 기존 코드 (Line 986, 1132)
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
const EMAIL_ENTRY_ID = 'entry.YOUR_ENTRY_ID';

// 실제 값으로 변경
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_실제값/formResponse';
const EMAIL_ENTRY_ID = 'entry.실제값';
```

## 7단계: 테스트

1. 웹사이트에서 "Join the Movement" 클릭
2. 이메일 입력 후 제출
3. Google Forms 응답 확인
4. 스프레드시트에 데이터 저장 확인

## 추가 팁

### 자동 응답 이메일 설정:
1. Google Forms 애드온 > "Form Notifications" 설치
2. 자동 응답 템플릿 설정

### 스팸 방지:
1. 설정 > "응답" > "reCAPTCHA 필요" 활성화

### 데이터 백업:
1. 스프레드시트를 Google Drive에 정기 백업
2. Zapier/IFTTT로 다른 서비스 연동 가능

## 한국어 버전 Form 만들기 (선택)

동일한 과정으로 한국어 Form도 만들 수 있습니다:
- 제목: "MAEUM - AI 혁명 대기자 명단"
- 필드명을 한국어로 변경
- 별도의 Form ID와 Entry ID 사용