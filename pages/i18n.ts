import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; // JSON 번역 파일 로드
// import LanguageDetector from "i18next-browser-languagedetector"; // 브라우저 언어 감지

i18n
  .use(HttpBackend) // JSON 파일 로드
  // .use(LanguageDetector) // 브라우저 언어 감지
  .use(initReactI18next) // React에서 i18n 사용
  .init({
    fallbackLng: "ko", // 번역 키가 없을 때 기본 언어 설정
    lng: "ko", // 초기 언어를 강제로 한국어로 설정
    debug: true, // 개발 환경에서 디버그 활성화
    interpolation: {
      escapeValue: false, // React는 자동으로 XSS를 방지하므로 escape 필요 없음
    },
    ns: ["project", "edu", "career"], // 사용할 네임스페이스 목록
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 번역 파일 경로
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], // 언어 감지 우선순위
      caches: ["localStorage", "cookie"], // 언어 설정 저장 위치
    },
    react: {
      useSuspense: false, // 서버와 클라이언트의 동기화 문제 해결
    },
  });

export default i18n;
