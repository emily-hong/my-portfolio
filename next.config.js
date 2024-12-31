/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // styled-components 지원 활성화
  },
  i18n: {
    locales: ["ko", "en"], // 지원하는 언어 목록
    defaultLocale: "ko", // 기본 언어를 한국어로 설정
  },
};

module.exports = nextConfig;
