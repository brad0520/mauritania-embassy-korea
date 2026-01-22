#!/usr/bin/env node
/**
 * 페이지들에 TEST_MODE 추가 스크립트
 *
 * 사용법: node scripts/add-test-mode.js
 */

const fs = require('fs');
const path = require('path');

// 수정할 페이지 목록
const pages = [
  // 영사업무 (consular) - visa는 이미 수정됨
  'src/app/consular/page.tsx',
  'src/app/consular/passport/page.tsx',
  'src/app/consular/certificates/page.tsx',
  'src/app/consular/marriage/page.tsx',
  'src/app/consular/services/page.tsx',
  'src/app/consular/study-korea/page.tsx',
  'src/app/consular/announcements/page.tsx',

  // 양국관계 (relations)
  'src/app/relations/page.tsx',
  'src/app/relations/bilateral/page.tsx',
  'src/app/relations/diplomatic/page.tsx',
  'src/app/relations/economic/page.tsx',
  'src/app/relations/cultural/page.tsx',

  // 모리타니아 소개 (mauritania)
  'src/app/mauritania/page.tsx',
  'src/app/mauritania/about/page.tsx',
  'src/app/mauritania/overview/page.tsx',
  'src/app/mauritania/history/page.tsx',
  'src/app/mauritania/geography/page.tsx',
  'src/app/mauritania/economy/page.tsx',
  'src/app/mauritania/culture/page.tsx',
  'src/app/mauritania/tourism/page.tsx',
  'src/app/mauritania/institutions/page.tsx',
  'src/app/mauritania/links/page.tsx',

  // 한국 소개 (korea)
  'src/app/korea/history/page.tsx',
  'src/app/korea/geography/page.tsx',
  'src/app/korea/economy/page.tsx',
  'src/app/korea/culture/page.tsx',
  'src/app/korea/institutions/page.tsx',
];

function processFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  파일 없음: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // 이미 수정된 파일 스킵
  if (content.includes('TEST_MODE')) {
    console.log(`⏭️  이미 수정됨: ${filePath}`);
    return false;
  }

  // 1. Import 추가
  const importPattern = /import SubPageLayout from ['"]@\/components\/layouts\/SubPageLayout['"]/;
  if (importPattern.test(content)) {
    content = content.replace(
      importPattern,
      `import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true`
    );
  } else {
    // SubPageLayout이 없는 경우 다른 import 뒤에 추가
    const firstImportEnd = content.indexOf('\n\n', content.indexOf('import'));
    if (firstImportEnd !== -1) {
      content = content.slice(0, firstImportEnd) +
        `\nimport TestEnCours from '@/components/TestEnCours'\n\n// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경\nconst TEST_MODE = true` +
        content.slice(firstImportEnd);
    }
  }

  // 2. SubPageLayout 내부 콘텐츠 래핑
  // 패턴: SubPageLayout의 > 다음 줄의 첫 콘텐츠
  const subPagePattern = /(<SubPageLayout[\s\S]*?>\s*\n)(\s*)(\{\/\*|<)/;
  const match = content.match(subPagePattern);

  if (match) {
    const indent = match[2];
    content = content.replace(
      subPagePattern,
      `$1${indent}{TEST_MODE ? <TestEnCours /> : <>\n${indent}$3`
    );

    // 3. 닫는 태그 추가 (</SubPageLayout> 바로 앞)
    content = content.replace(
      /(\n\s*)<\/SubPageLayout>/,
      `$1</>}\n$1</SubPageLayout>`
    );
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ 수정 완료: ${filePath}`);
  return true;
}

console.log('🚀 TEST_MODE 추가 시작...\n');

let modified = 0;
let skipped = 0;
let notFound = 0;

for (const page of pages) {
  const result = processFile(page);
  if (result === true) modified++;
  else if (result === false && fs.existsSync(path.join(process.cwd(), page))) skipped++;
  else notFound++;
}

console.log(`\n📊 결과: ${modified}개 수정, ${skipped}개 스킵, ${notFound}개 파일 없음`);
