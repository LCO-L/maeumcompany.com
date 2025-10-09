// 안전한 Entry ID 찾기 코드
// 이 코드는 Form의 input 필드에서 entry ID만 읽어옵니다
// 아무것도 수정하거나 전송하지 않습니다

// 1. Console에 'allow pasting' 입력 후 Enter
// 2. 이 코드 복사해서 붙여넣기:

console.log("=== Google Form Entry IDs ===");
console.log("아래에서 Email 필드의 entry ID를 찾으세요:\n");

// 모든 entry 필드 찾기
const entries = document.querySelectorAll('[name^="entry."]');

if (entries.length === 0) {
    console.error("❌ Entry 필드를 찾을 수 없습니다. Form 미리보기 페이지인지 확인하세요.");
} else {
    entries.forEach((element, index) => {
        const entryId = element.name;
        const label = element.placeholder ||
                     element.getAttribute('aria-label') ||
                     element.closest('.freebirdFormviewerComponentsQuestionBaseRoot')?.querySelector('.freebirdFormviewerComponentsQuestionBaseTitle')?.textContent ||
                     `필드 ${index + 1}`;

        console.log(`${entryId} → ${label.trim()}`);

        // 이메일 필드 강조
        if (label.toLowerCase().includes('email') || label.toLowerCase().includes('이메일')) {
            console.log(`   ⭐ 이것이 이메일 필드입니다! → ${entryId}`);
        }
    });

    console.log("\n📌 위에서 Email 관련 entry ID를 복사하세요");
    console.log("예: entry.1234567890");
}

// 더 간단한 방법
console.log("\n=== 또는 이 간단한 명령 사용 ===");
console.log("document.querySelector('[type=\"email\"]')?.name");