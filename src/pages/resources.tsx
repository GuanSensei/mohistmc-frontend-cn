import ModListing from '@/components/resources'

import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import Head from 'next/head'
import { Flowbite } from 'flowbite-react'
import { customTheme } from '@/util/Theme'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'

export default function Tools() {
    const strings = useAppSelector(selectTranslations)

    // Redux
    const mode = useSelector(selectTheme)
    const mods = fetchMods()

    return (
        <Flowbite theme={{ theme: customTheme, mode }}>
            <section className={`bg-white dark:bg-dark-25 flex flex-col`}>
                <Head>
                    <title>{strings['resources.page.title']}</title>
                </Head>
                <section className="flex flex-col justify-center items-center pt-20 bg-white dark:bg-dark-25">
                    <div className="pt-10 px-4 mx-auto max-w-screen-xl text-center">
                        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            <span className="text-blue-600 dark:text-blue-500">
                                {
                                    getLocaleStringAsArgs(
                                        strings['resources.title'],
                                    )[0]
                                }
                            </span>
                            {
                                getLocaleStringAsArgs(
                                    strings['resources.title'],
                                )[1]
                            }
                        </h1>
                        <p className="mb-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
                            {strings['resources.subtitle']}
                        </p>
                        <p className="mb-5 text-lg font-normal text-red-500 lg:text-xl sm:px-16 lg:px-48">
                            该页面为测试版 (第3版)，功能尚未完善，欢迎提交建议
                        </p>
                    </div>
                    <section className="container mx-auto px-4 py-4">
                        <ModListing initialMods={mods} />
                    </section>
                </section>
            </section>
        </Flowbite>
    )
}

// This is a mock function. In a real app, you'd call your API here.
function fetchMods() {
    return [
        {
            id: 1,
            name: 'Mohist',
            author: 'Mgazul',
            description:
                '一个强大的 Forge 混合服务器软件，实现了Bukkit、Spigot API。',
            downloads: '32.38M',
            followers: '15.2k',
            lastUpdated: '3 days ago',
            tags: ['核心', 'Forge', 'Bukkit', 'CraftBukkit', 'Spigot'],
            icon: '/img/res/mohist.png',
            link: '/software/mohist',
        },
        {
            id: 2,
            name: 'Banner',
            author: 'Wdog5',
            description:
                '一个强大的 Fabric 混合服务器软件，实现了Bukkit、Spigot API。',
            downloads: '29.85M',
            followers: '19.6k',
            lastUpdated: '8 days ago',
            tags: ['核心', 'Fabric', 'Bukkit', 'CraftBukkit', 'Spigot'],
            icon: '/img/res/banner.png',
            link: '/software/banner',
        },
        {
            id: 3,
            name: 'Youer',
            author: 'Mgazul',
            description:
                '一个强大的 NeoForge 混合服务器软件，实现了Bukkit、Spigot API。',
            downloads: '23.32M',
            followers: '7,923',
            lastUpdated: '20 days ago',
            tags: ['核心', 'NeoForge', 'Bukkit', 'CraftBukkit', 'Spigot'],
            icon: '/img/res/youer.png',
            link: '/software/youer',
        },
        {
            id: 4,
            name: 'WuKong',
            author: 'Mgazul',
            description:
                '一个强大的开源客户端引擎，类似龙核、萌芽、YSM，让你的服务器也会72变。',
            downloads: '23.06M',
            followers: '14.4k',
            lastUpdated: '6 days ago',
            tags: [
                'Client',
                'Decoration',
                'Optimization',
                'Fabric',
                'NeoForge',
            ],
            icon: '/img/res/wukong.png',
            link: '/404',
        },
        {
            id: 5,
            name: '更新中...',
            author: '会是你吗',
            description: '2025 美好的新一年',
            downloads: '999M',
            followers: '999k',
            lastUpdated: '0 days ago',
            tags: ['ALL'],
            icon: '/docs.webp',
            link: '/404',
        },
    ]
}
