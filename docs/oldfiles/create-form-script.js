// Google Apps Script - 자동 Form 생성 스크립트
// 사용법:
// 1. https://script.google.com 접속
// 2. 새 프로젝트 생성
// 3. 이 코드 복사-붙여넣기
// 4. 실행 버튼 클릭
// 5. 권한 승인
// 6. Console에서 Form URL 확인!

function createMAEUMForm() {
  // Form 생성
  const form = FormApp.create('MAEUM - Join the AI Revolution');

  // Form 설명 추가
  form.setDescription('Be the first to know when MAEUM launches in your region. Top-tier AI for everyone, everywhere. 140 languages. Zero GPU cost. 100% offline.');

  // 제출 후 메시지
  form.setConfirmationMessage('Thank you for joining the MAEUM revolution! 🚀\n\nWe\'ll keep you updated on launch in your region.');

  // 이메일 수집 설정
  form.setCollectEmail(true);

  // 응답 수정 가능
  form.setAllowResponseEdits(true);

  // 응답 요약 보기 가능
  form.setPublishingSummary(true);

  // 진행률 표시
  form.setProgressBar(true);

  // ==========================================
  // 질문 1: 이메일 (자동 수집으로 대체)
  // Google Forms가 자동으로 이메일을 수집합니다

  // ==========================================
  // 질문 2: 이름 (선택)
  const nameItem = form.addTextItem();
  nameItem.setTitle('Full Name (Optional)')
          .setRequired(false);

  // ==========================================
  // 질문 3: 조직/회사 (선택)
  const orgItem = form.addTextItem();
  orgItem.setTitle('Organization/Company (Optional)')
         .setHelpText('Your company, government agency, or institution')
         .setRequired(false);

  // ==========================================
  // 질문 4: 국가/지역 (필수)
  const countryItem = form.addListItem();
  countryItem.setTitle('Country/Region')
             .setRequired(true)
             .setChoices([
               countryItem.createChoice('South Korea (한국)'),
               countryItem.createChoice('United States'),
               countryItem.createChoice('Japan (日本)'),
               countryItem.createChoice('China (中国)'),
               countryItem.createChoice('India'),
               countryItem.createChoice('Indonesia'),
               countryItem.createChoice('Philippines'),
               countryItem.createChoice('Vietnam'),
               countryItem.createChoice('Thailand'),
               countryItem.createChoice('Malaysia'),
               countryItem.createChoice('Singapore'),
               countryItem.createChoice('Germany'),
               countryItem.createChoice('France'),
               countryItem.createChoice('United Kingdom'),
               countryItem.createChoice('Brazil'),
               countryItem.createChoice('Mexico'),
               countryItem.createChoice('Canada'),
               countryItem.createChoice('Australia'),
               countryItem.createChoice('Nigeria'),
               countryItem.createChoice('Kenya'),
               countryItem.createChoice('South Africa'),
               countryItem.createChoice('Egypt'),
               countryItem.createChoice('Saudi Arabia'),
               countryItem.createChoice('UAE'),
               countryItem.createChoice('Russia'),
               countryItem.createChoice('Other')
             ]);

  // ==========================================
  // 질문 5: 관심 분야 (필수)
  const interestItem = form.addMultipleChoiceItem();
  interestItem.setTitle('What\'s your primary interest in MAEUM?')
              .setRequired(true)
              .setChoices([
                interestItem.createChoice('Government/Public Sector (정부/공공기관)'),
                interestItem.createChoice('Education (교육)'),
                interestItem.createChoice('Healthcare (의료)'),
                interestItem.createChoice('Enterprise/Business (기업)'),
                interestItem.createChoice('NGO/Non-profit (NGO/비영리)'),
                interestItem.createChoice('Personal Use (개인 사용)'),
                interestItem.createChoice('Research/Academia (연구/학계)'),
                interestItem.createChoice('Investment/Partnership (투자/파트너십)'),
                interestItem.createChoice('Media/Press (미디어/언론)'),
                interestItem.createChoice('Other')
              ]);

  // ==========================================
  // 질문 6: 메시지 (선택)
  const messageItem = form.addParagraphTextItem();
  messageItem.setTitle('Message (Optional)')
             .setHelpText('Any questions or specific needs? Let us know!')
             .setRequired(false);

  // ==========================================
  // 질문 7: 뉴스레터 동의 (필수)
  const newsletterItem = form.addMultipleChoiceItem();
  newsletterItem.setTitle('Would you like to receive updates about MAEUM?')
                .setRequired(true)
                .setChoices([
                  newsletterItem.createChoice('Yes, keep me updated'),
                  newsletterItem.createChoice('No, just notify me at launch')
                ]);

  // ==========================================
  // Form URL 가져오기
  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();
  const formId = form.getId();

  // ==========================================
  // 결과 출력
  console.log('========================================');
  console.log('✅ MAEUM Form 생성 완료!');
  console.log('========================================');
  console.log('📝 Form 수정 URL:', editUrl);
  console.log('🔗 Form 공유 URL:', formUrl);
  console.log('🆔 Form ID:', formId);
  console.log('========================================');
  console.log('📌 index.html에 넣을 코드:');
  console.log(`const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/${formId}/formResponse';`);
  console.log('========================================');

  // 스프레드시트 생성 및 연결
  try {
    const sheet = SpreadsheetApp.create('MAEUM Waitlist Responses');
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    console.log('📊 응답 스프레드시트도 생성됨!');
    console.log('Sheet URL:', sheet.getUrl());
  } catch(e) {
    console.log('📊 스프레드시트는 Form 응답 탭에서 수동으로 연결하세요');
  }

  // 브라우저에서 Form 열기
  return {
    editUrl: editUrl,
    formUrl: formUrl,
    formId: formId,
    message: 'Form이 성공적으로 생성되었습니다! 위 URL을 클릭하여 확인하세요.'
  };
}

// 실행
createMAEUMForm();