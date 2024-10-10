import React, { useEffect, useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { useSelector } from 'react-redux'

const config: DocsThemeConfig = {
    docsRepositoryBase:
        'https://github.com/MohistMC/mohistmc-frontend-cn/tree/master',
    footer: {
        component: function () {
            return <></>
        },
    },
    themeSwitch: {
        component: null,
    },
    toc: {
        title: '本页内容',
        backToTop: '滚动到顶部',
    },
    feedback: {
        content: '问题？给我们反馈 →',
    },
    editLink: {
        content: '在 GitHub 上编辑此页',
    },
    gitTimestamp: function GitTimestamp({ timestamp }) {
        const [dateString, setDateString] = useState(timestamp.toISOString())
        const strings = useSelector(selectTranslations)

        useEffect(() => {
            try {
                setDateString(
                    timestamp.toLocaleDateString(navigator.language, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    }),
                )
            } catch (e) {}
        }, [timestamp])

        return (
            <>
                {strings['blog.lastupdated']} {dateString}
            </>
        )
    },
}

export default config
