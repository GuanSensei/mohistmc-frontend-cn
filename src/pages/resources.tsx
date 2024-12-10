import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import React from 'react'
import { customTheme } from '@/util/Theme'
import { Flowbite } from 'flowbite-react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import ResourcesList from '@/components/tools/Resources'
import Head from 'next/head'

export default function Resources() {
    // Redux
    const mode = useSelector(selectTheme)
    const strings = useAppSelector(selectTranslations)

    return (
        <Flowbite theme={{ theme: customTheme, mode }}>
            <section
                className={`bg-white dark:bg-dark-25 flex flex-col pt-10 px-4`}
            >
                <Head>
                    <title>{strings['resources.page.title']}</title>
                </Head>
                <div className="text-white items-center justify-center ">
                    <ResourcesList />
                </div>
            </section>
        </Flowbite>
    )
}
