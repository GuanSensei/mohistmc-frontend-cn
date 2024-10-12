import React, { useEffect, useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { getCopyrightText } from '@/util/String'
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
    head: function useHead() {
        const router = useRouter()

        const section = router?.pathname.startsWith('/mohist')
            ? 'Mohist'
            : router?.pathname.startsWith('/blog')
              ? '博客'
              : 'Banner'
        const description =
            section === '博客'
                ? `Stay updated with MohistMC's Blog! Explore the latest news, releases, and insights. Connect with our dynamic community. ${getCopyrightText()} MohistMC.`
                : `Need help setting up, configuring and using our software? The docs are here to help you. ${getCopyrightText()} MohistMC.`
        const title =
            section === '博客'
                ? '墨孤蓝网络科技 - 博客'
                : '墨孤蓝网络科技 - 文档'

        return (
            <>
                <meta name="title" content={title} />
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mohistmc.com/team" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://mohistmc.com/mohistLogo.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="100" />
                <meta property="og:image:height" content="100" />
            </>
        )
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
