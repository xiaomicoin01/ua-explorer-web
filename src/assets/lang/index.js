import VueI18n from 'vue-i18n'
import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import elezh from 'element-ui/lib/locale/lang/zh-CN'
import eleen from 'element-ui/lib/locale/lang/en'

Vue.use(VueI18n)
const language = [
  {
    code: 'zh-CN',
    name: '中文',
    icon: require('@/assets/images/lang/zh.png'),
    default: true
  },
  {
    code: 'en-US',
    name: '英文',
    icon: require('@/assets/images/lang/en.png'),
    default: false
  }
]
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      ...require('@/assets/lang/i18n/zh'),
      ...elezh
    },
    'en-US': {
      ...require('@/assets/lang/i18n/en'),
      ...eleen
    }
  }
})
locale.i18n((key, value) => i18n.t(key, value))
export {i18n, language}
