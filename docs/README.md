# MAEUM - AI for Everyone

> Top-tier AI performance without expensive infrastructure. 140 languages. Zero GPU cost. 100% offline.

## 🚀 Quick Start

### 1. Configuration

모든 설정은 `config.js` 파일에서 관리됩니다:

```javascript
// config.js 파일을 열어서 다음 값들을 수정하세요:

// Discord 초대 링크
DISCORD_INVITE_CODE: 'YOUR_INVITE_CODE',
DISCORD_INVITE_URL: 'https://discord.gg/YOUR_INVITE_CODE',

// Formspree (이미 설정됨)
FORMSPREE_FORM_ID: 'xblzaeyn',
FORMSPREE_URL: 'https://formspree.io/f/xblzaeyn',
```

### 2. Deploy

#### GitHub Pages (무료)
```bash
git add .
git commit -m "Initial deployment"
git push origin main
# Settings → Pages → Deploy from main branch
```

#### Netlify (무료)
- 폴더를 [Netlify](https://netlify.com)에 드래그 앤 드롭

## 📁 File Structure

```
maeum_io_2/
├── index.html          # 메인 웹사이트
├── config.js          # ⭐ 모든 설정 (이 파일만 수정!)
├── .env               # 환경 변수 템플릿
├── discord-setup.md   # Discord 설정 가이드
├── oldfiles/          # 이전 설정 파일들 (참고용)
└── README.md          # 이 파일
```

## 🔧 Essential Settings

| Setting | Current Value | Description |
|---------|--------------|-------------|
| `FORMSPREE_URL` | ✅ Configured | Form 제출 |
| `DISCORD_INVITE_URL` | ⚠️ Need to set | Discord 초대 링크 |
| `CONTACT_EMAIL` | `hello@maeum.io` | 연락처 |

## 📞 Contact

hello@maeum.io