import zhTranslation from '@/i18n/translations/zh'
import { LocaleState } from '@/features/i18n/TranslatorSlice'

const availableLocales = [zhTranslation]

interface LocalesInterface {
    default: LocaleState
    current: LocaleState
    available: LocaleState[]
}

export const locales: LocalesInterface = {
    default: zhTranslation,
    current: zhTranslation,
    available: availableLocales as LocaleState[],
}

export const getCurrentLocale = () => {
    const mergedStrings = Object.assign(
        {},
        locales.default.strings,
        locales.current.strings,
    )
    return {
        ...locales.current,
        strings: mergedStrings,
    }
}
