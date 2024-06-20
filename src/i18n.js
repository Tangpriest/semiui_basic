import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en';
import zh from './locale/zh';

// 获取用户的语言偏好
const getUserLanguagePreference = () => {
  const userLanguage = localStorage.getItem('userLanguage');
  return userLanguage || 'en'; // 如果没有设置过，就默认为英语
};

// 设置用户的语言偏好,并返回当前的语言
export const setUserLanguagePreference = () => {
  // localStorage.setItem('userLanguage', language);
  // i18n.changeLanguage(language); // 改变当前的语言
  //如果当前语言是中文，那么设置为英文
  if(i18n.language === 'zh'){
    localStorage.setItem('userLanguage', 'en');
    i18n.changeLanguage('en');
    
    
  }else{
    localStorage.setItem('userLanguage', 'zh');
    i18n.changeLanguage('zh');
  }

  return i18n.language;

};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: zh,
      en: en
    },
    lng          : getUserLanguagePreference(),   // 使用用户的语言偏好
    fallbackLng  : 'en',                          // 后备语言
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;