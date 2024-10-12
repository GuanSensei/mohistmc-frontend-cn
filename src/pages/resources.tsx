import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import Head from 'next/head'
import { Flowbite } from 'flowbite-react'
import { customTheme } from '@/util/Theme'
import ResourceList from '@/components/resources/ResourceList'

export default function Tools() {
    const strings = useAppSelector(selectTranslations)

    // Redux
    const mode = useSelector(selectTheme)

    return (
        <Flowbite theme={{ theme: customTheme, mode }}>
            <section className={`bg-white dark:bg-dark-25 flex flex-col`}>
                <Head>
                    <title>{strings['servers.page.title']}</title>
                </Head>
                <section className="flex flex-col justify-center items-center pt-20 bg-white dark:bg-dark-25">
                    <h1>资源管理系统</h1>
                    <ResourceList />
                </section>
            </section>
        </Flowbite>
    )
}
