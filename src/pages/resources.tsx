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
                <section className="flex flex-col justify-center items-center bg-white dark:bg-dark-25">
                    <div className="pt-20 mx-auto max-w-screen-xl text-center">
                        <p className="mb-5 text-lg font-extrabold text-red-600 lg:text-xl sm:px-16 lg:px-48">
                            这是预览页面，更多内容正在开发中
                        </p>
                        <p
                            className="mb-5 text-lg font-extrabold lg:text-xl sm:px-16 lg:px-48"
                            style={{ color: 'rgb(218,126,21)' }}
                        >
                            仅提供原创的内容，我们不是大自然的搬运工
                        </p>
                    </div>
                    <div className="text-white pt-10 pb-20 items-center justify-center">
                        <ResourcesList />
                    </div>
                </section>
            </section>
        </Flowbite>
    )
}
