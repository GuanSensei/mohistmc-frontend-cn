import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'

export default function StatisticsElement() {
    const strings = useAppSelector(selectTranslations)

    return (
        <section className="pb-20 bg-white dark:bg-dark-50 pt-10 flex flex-col justify-center items-center">
            <h2 className="text-center mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                {strings['index.stats.title']}
            </h2>
            <dl className="bg-gray-100 mr-5 ml-5 py-10 md:mr-0 md:ml-0 grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-4 dark:bg-dark-25 rounded-xl dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">2945</dt>
                    <dd className="text-gray-500 text-center dark:text-gray-400">
                        {strings['index.stats.resolvedbugs']}
                    </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">376</dt>
                    <dd className="text-gray-500 text-center dark:text-gray-400">
                        {strings['index.stats.openedissues']}
                    </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">3160+</dt>
                    <dd className="text-gray-500 text-center dark:text-gray-400">
                        {strings['index.stats.players']}
                    </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">4101+</dt>
                    <dd className="text-gray-500 text-center dark:text-gray-400">
                        {strings['index.stats.servers']}
                    </dd>
                </div>
            </dl>
        </section>
    )
}
