/**
 * 国际化 入口
 * @author QuerySystem
 */

import { createI18n } from "vue-i18n";
import { getLocale, setLocale, importAllLocales, defaultLang } from "@/utils/i18n";

/**
 * elementUI 多语言 配置
 */
import enUS from './lang/en.js';
import zhCN from './lang/zh-cn.js';
import zhTW from './lang/zh-tw.js';
export const elementPlusMessages: { [key: string]: any} = {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-US': enUS,
}


/**
 * 框架 多语言 配置
 */
export const messages = importAllLocales();
const sysLocale = getLocale();
const i18n = createI18n({
    legacy: false,
    locale: elementPlusMessages[sysLocale] ? sysLocale : defaultLang,
    messages,
});


/**
 * 设置语言
 * @param locale
 */
export function setI18nLanguage(locale: string, realReload = false): void {
    setLocale(locale,realReload, function() {
        // i18n.global.locale = locale // legacy: true
        i18n.global.locale.value = locale;
    })
}

export default i18n;
