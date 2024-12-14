/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true, // styled-components 지원 활성화
  },
  // i18n: {
  //   locales: ["en", "ko"],
  //   defaultLocale: "ko",
  // },
};

module.exports = nextConfig;
