import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import Head from 'next/head'
import { Flowbite } from 'flowbite-react'
import { customTheme } from '@/util/Theme'
import MotdList from '@/components/tools/Servers'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'

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
                    <div className="pt-10 px-4 mx-auto max-w-screen-xl text-center">
                        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            <span className="text-blue-600 dark:text-blue-500">
                                {
                                    getLocaleStringAsArgs(
                                        strings['servers.title'],
                                    )[0]
                                }
                            </span>
                            {getLocaleStringAsArgs(strings['servers.title'])[1]}
                        </h1>
                        <p className="mb-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
                            {strings['servers.subtitle']}
                        </p>
                    </div>
                    <div className="min-h-screen bg-white dark:bg-dark-25 text-white pt-20 items-center justify-center">
                        <MotdList />
                    </div>
                </section>
            </section>
        </Flowbite>
    )
}
