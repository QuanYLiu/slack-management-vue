import defaultSettings from '@/settings'
import i18n from '@/lang'

const title = defaultSettings.title || 'Slack Management'

export default function getPageTitle(pageTitle) {
  const hasKey = i18n.te(`route.${pageTitle}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${pageTitle}`)
    return `${pageName} - ${title}`
  }
  return `${title}`
}
