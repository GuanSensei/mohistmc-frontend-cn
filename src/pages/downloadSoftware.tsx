import { useRouter } from 'next/router'
import { Project } from '@/interfaces/Project'
import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '@/util/String'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { formatString, getLocaleStringAsArgs } from '@/util/LocaleHelper'
import { Button, Flowbite, Toast } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import Head from 'next/head'
import { customTheme } from '@/util/Theme'

export default function DownloadSoftware() {
    const router = useRouter()
    const strings = useAppSelector(selectTranslations)
    const mode = useSelector(selectTheme)

    // React states
    const [project, setProject] = useState<Project | undefined>()

    useEffect(() => {
        if (router.isReady) {
            const { project } = router.query as { project: Project }

            if (project === Project.Mohist || project === Project.Banner)
                setProject(project)
            else router.push('/404').catch()
        }
    }, [router, router.isReady, router.query])

    return (
        <section className="flex flex-col gap-6 items-center bg-gray-100 dark:bg-dark-25 pt-20 pb-20">
            <Head>
                <title>
                    {formatString(
                        strings['downloadSoftware.page.title'],
                        capitalizeFirstLetter(project),
                    )}
                </title>
            </Head>
            <div className={`flex items-center justify-center pt-10 md:pt-0`}>
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white md:mt-10 text-center">
                    {
                        getLocaleStringAsArgs(
                            strings['downloadSoftware.title'],
                        )[0]
                    }
                    <span className="text-blue-600 dark:text-blue-500">
                        &nbsp;{capitalizeFirstLetter(project)}
                    </span>
                    {
                        getLocaleStringAsArgs(
                            strings['downloadSoftware.title'],
                        )[1]
                    }
                </h1>
            </div>
            <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-3">
                {project === Project.Mohist
                    ? strings['downloadSoftware.mohist.desc']
                    : strings[`downloadSoftware.banner.desc`]}
            </p>
            <Flowbite theme={{ theme: customTheme, mode }}>
                <Toast>
                    <div
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-600 dark:text-white`}
                    >
                        <HiInformationCircle className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        <span className={'font-bold'}>
                            不要在 Spigot、PaperMC 或 Forge 的论坛中寻求帮助。
                        </span>{' '}
                        他们与MohistMC无关，不会帮助你。如果您有任何问题,
                        请使用我们的{' '}
                        <a
                            href="https://qm.qq.com/q/N4IqFA1rag"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                        >
                            QQ群{' '}
                        </a>
                        或者{' '}
                        <a
                            href="https://github.com/MohistMC/Mohist/issues"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                        >
                            Github
                        </a>
                    </div>
                </Toast>
                <Toast>
                    <div
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-red-500 dark:bg-red-600 dark:text-white`}
                    >
                        <HiInformationCircle className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        <span className={'font-bold'}>
                            由于介质原因，暂不直接提供二进制文件。
                        </span>{' '}
                        请前往 GitHub Actions, 进行下载。
                    </div>
                </Toast>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    {project === Project.Mohist && (
                        <>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.7.10"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.7.10
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.12.2"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.12.2
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.16.5"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.16.5
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.18.2"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.18.2
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.19.2"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.19.2
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.20.1"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-red-500 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.20.1
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Mohist/actions?query=branch%3A1.20.2"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.20.2
                            </Button>
                        </>
                    )}
                    {project === Project.Banner && (
                        <>
                            <Button
                                href="https://github.com/MohistMC/Banner/actions?query=branch%3A1.7.10"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.19.4
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Banner/actions?query=branch%3A1.20.1"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-red-500 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.20.1
                            </Button>
                            <Button
                                href="https://github.com/MohistMC/Banner/actions?query=branch%3A1.21.1"
                                target="_blank"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                1.21.1
                            </Button>
                        </>
                    )}
                </div>
            </Flowbite>
        </section>
    )
}
