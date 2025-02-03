import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useEffect, useState } from 'react'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import UserDropdown from '@/components/header/UserDropdown'
import IssueReportModal from '@/components/modals/IssueReportModal'
import LoginModal from '@/components/modals/LoginModal'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectUser } from '@/features/user/UserSlice'
import Image from 'next/image'
import mohistLogo from '../../public/mohistLogo.webp'
import { FaGithub, FaQq } from 'react-icons/fa'
import { FaBilibili } from 'react-icons/fa6'
import { Button } from 'flowbite-react'

export default function Header() {
    const router = useRouter()

    // React state
    const [menuVisibilityState, setMenuVisibilityState] =
        useState<boolean>(false)
    const [openIssueModal, setOpenIssueModal] = useState<string | undefined>()
    const [openLoginModal, setOpenLoginModal] = useState<string | undefined>()

    // React redux
    const strings = useSelector(selectTranslations)
    const user = useAppSelector(selectUser)

    // React effect
    const pageName = router.pathname.split('/')[1]

    // On route change
    useEffect(() => {
        setMenuVisibilityState(false)
    }, [router.pathname])

    const AccountButtons = (rootCss: string, buttonCss: string = '') => {
        return (
            <div className={rootCss}>
                {user.isLogged && <UserDropdown />}
                {!user.isLogged && (
                    <Button
                        className={buttonCss}
                        onClick={() => setOpenLoginModal('dismissible')}
                    >
                        登录
                    </Button>
                )}
            </div>
        )
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-dark-50 fixed top-0 w-full z-30 drop-shadow-md">
            <IssueReportModal
                openIssueModal={openIssueModal}
                setOpenIssueModal={setOpenIssueModal}
                openLoginModal={openLoginModal}
                setOpenLoginModal={setOpenLoginModal}
            />
            <LoginModal
                openModal={openLoginModal}
                setOpenModal={setOpenLoginModal}
            />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src={mohistLogo}
                        className="h-8 w-auto mr-3"
                        alt="MohistMC Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark-50 dark:text-white">
                        MohistMC
                    </span>
                </Link>
                <div className="flex items-center md:order-2">
                    <Link
                        href="https://github.com/MohistMC"
                        aria-label="Github"
                        className="hidden xl:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                        <FaGithub className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://qm.qq.com/q/N4IqFA1rag"
                        aria-label="QQ"
                        className="hidden xl:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                        <FaQq className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://space.bilibili.com/15859660"
                        className="hidden xl:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                        <FaBilibili className="w-6 h-6" />
                    </Link>
                    <button
                        data-collapse-toggle="mobile-menu-language-select"
                        type="button"
                        aria-label="Toggle menu"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-dark-200 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-language-select"
                        aria-expanded="false"
                        onClick={() => {
                            // Override the default behavior of the button
                            setMenuVisibilityState(!menuVisibilityState)
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <ThemeSwitcher className={`ml-2`} />
                </div>
                <div
                    className={`${!menuVisibilityState ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`}
                    id="mobile-menu-language-select"
                >
                    <ul className="flex flex-col md:items-center font-medium p-4 md:p-0 mt-4 border border-dark-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-dark-50">
                        <li>
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                aria-label="Toggle software menu"
                                data-dropdown-trigger="hover"
                                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 md:dark:bg-transparent md:dark:hover:bg-transparent md:bg-transparent ${pageName === 'software' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'dark:hover:bg-dark-200 hover:bg-gray-100'}`}
                            >
                                {strings['button.software']}
                                <svg
                                    className="w-5 h-5 ml-1"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="dropdownNavbar"
                                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-dark-100 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownLargeButton"
                                >
                                    <li>
                                        <Link
                                            href="/software/mohist"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-200 dark:hover:text-white"
                                        >
                                            Mohist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/software/banner"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-200 dark:hover:text-white"
                                        >
                                            Banner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/software/youer"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-200 dark:hover:text-white"
                                        >
                                            Youer
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link
                                href="/downloads"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'downloads' || pageName === 'downloadSoftware' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                {strings['button.downloads']}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resources"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'resources' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                资源站
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://afdian.com/a/MohistMC"
                                target="_blank"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-200}`}
                            >
                                爱发电以及会员服务
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'blog' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                {strings['button.blog']}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tools"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'tools' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                {strings['tools.subscription']}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/sponsor"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'contribute' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                {strings['button.sponsor']}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/servers"
                                className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:dark:bg-transparent dark:border-gray-700 md:bg-transparent ${pageName === 'servers' ? `md:text-blue-700 md:dark:text-blue-500 bg-blue-700 text-white` : 'hover:bg-gray-100 dark:hover:bg-dark-200'}`}
                            >
                                {strings['servers.subscription']}
                            </Link>
                        </li>
                        {AccountButtons('md:hidden', 'ml-2 mt-1 mb-2')}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
