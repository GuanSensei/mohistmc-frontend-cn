import React, { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import ProjectCard from '@/components/resources/ProjectCard'

type ProjectProps = {
    id: string
    name: string
    author: string
    description: string
    downloads: string
    followers: string
    tags: string[]
    lastUpdate: string
    iconColor: string
}

const ResourcesList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const modsPerPage = 5 // 每页显示的项目数量

    const [projects, setProjects] = useState<ProjectProps[]>([])

    useEffect(() => {
        const fetchMotdList = async () => {
            try {
                const response = await fetch('/json/projects.json')
                const data = await response.json()
                setProjects(data)
            } catch (error) {
                console.error('Error fetching MOTD list:', error)
            }
        }

        fetchMotdList().then(() => '{}')
    }, [])

    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('Relevance')

    // 计算当前页的起始和结束索引
    const startIndex = (currentPage - 1) * modsPerPage
    const endIndex = startIndex + modsPerPage

    // 获取当前页的 mods
    const currentMods = projects.slice(startIndex, endIndex)
    const onPageChange = (page: number) => setCurrentPage(page)

    // 计算总页数
    const totalPages = Math.ceil(projects.length / modsPerPage)

    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-gray-100 dark:bg-dark-100 border border-gray-200 dark:border-dark-200 rounded-lg p-8 md:p-12 mb-8">
                <header className="bg-white dark:bg-dark-100 shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <div className="relative flex-grow max-w-xl">
                            <input
                                type="text"
                                placeholder="搜索资源..."
                                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FiSearch
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                        </div>
                        <div className="flex items-center space-x-4 text-gray-950">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-2">
                                    排序方式
                                </span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>相关性</option>
                                    <option>下载量</option>
                                    <option>最后更新</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-950 dark:text-gray-100">
                    <div className="flex">
                        <aside className="w-64 pr-8">
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                                    加载器
                                    <FiChevronDown size={20} />
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            Fabric
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            Forge
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            NeoForge
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            Mohist
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            Banner
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                                    游戏版本
                                    <FiChevronDown size={20} />
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            1.21.1
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            1.20.1
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            1.16.5
                                        </label>
                                    </li>
                                    {/* Add more versions as needed */}
                                </ul>
                            </div>
                            {/* Add more filter sections as needed */}
                        </aside>
                        <div className="flex grid gap-6">
                            {currentMods.map((mod) => (
                                <ProjectCard key={mod.id} item={mod} />
                            ))}
                        </div>
                    </div>
                </main>
                {/* 分页控件 */}
                <div className="flex mx-auto justify-center text-gray-950">
                    <Pagination
                        layout="pagination"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        previousLabel="上一页"
                        nextLabel="下一页"
                        showIcons
                    />
                </div>
            </div>
        </div>
    )
}

export default ResourcesList
