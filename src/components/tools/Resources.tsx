import React, { Fragment, useState } from 'react'
import { Pagination } from 'flowbite-react'
import { FiChevronDown, FiClock, FiSearch } from 'react-icons/fi'
import Link from 'next/link'

const ResourcesList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const modsPerPage = 5 // 每页显示的项目数量
    const mods = [
        {
            id: 1,
            name: 'Fabric API',
            author: 'modmuss50',
            description:
                'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.',
            downloads: '24.96M',
            followers: '13.1k',
            tags: ['Client or server', 'Library', 'Fabric'],
            lastUpdate: '3 days ago',
            iconColor: 'bg-yellow-700',
        },
        {
            id: 2,
            name: 'Sodium',
            author: 'jellysquid3',
            description:
                'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!',
            downloads: '22.63M',
            followers: '17.2k',
            tags: ['Client', 'Optimization', 'Fabric', 'NeoForge', 'Quilt'],
            lastUpdate: 'a month ago',
            iconColor: 'bg-green-500',
        },
        {
            id: 3,
            name: 'Iris Shaders',
            author: 'coderbot',
            description:
                'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs',
            downloads: '17.48M',
            followers: '12.6k',
            tags: [
                'Client',
                'Decoration',
                'Optimization',
                'Fabric',
                'NeoForge',
                'Quilt',
            ],
            lastUpdate: '7 days ago',
            iconColor: 'bg-purple-500',
        },
        {
            id: 4,
            name: 'Fabric API',
            author: 'modmuss50',
            description:
                'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.',
            downloads: '24.96M',
            followers: '13.1k',
            tags: ['Client or server', 'Library', 'Fabric'],
            lastUpdate: '3 days ago',
            iconColor: 'bg-yellow-700',
        },
        {
            id: 5,
            name: 'Mohist',
            author: 'Mgazul',
            description:
                '一个强大的Mohist Forge混合服务器软件，实现了Bukkit、Spigot API.',
            downloads: '24.96M',
            followers: '13.1k',
            tags: ['Forge + Spigot', 'Spigot', 'Forge'],
            lastUpdate: '3 days ago',
            iconColor: 'bg-blue-500',
        },
        {
            id: 6,
            name: 'Iris Shaders',
            author: 'coderbot',
            description:
                'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs',
            downloads: '17.48M',
            followers: '12.6k',
            tags: [
                'Client',
                'Decoration',
                'Optimization',
                'Fabric',
                'NeoForge',
                'Quilt',
            ],
            lastUpdate: '7 days ago',
            iconColor: 'bg-purple-500',
        },
        {
            id: 7,
            name: 'Iris Shaders',
            author: 'coderbot',
            description:
                'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs',
            downloads: '17.48M',
            followers: '12.6k',
            tags: [
                'Client',
                'Decoration',
                'Optimization',
                'Fabric',
                'NeoForge',
                'Quilt',
            ],
            lastUpdate: '7 days ago',
            iconColor: 'bg-purple-500',
        },
        {
            id: 8,
            name: 'Mohist',
            author: 'Mgazul',
            description:
                '一个强大的Mohist Forge混合服务器软件，实现了Bukkit、Spigot API.',
            downloads: '24.96M',
            followers: '13.1k',
            tags: ['Forge + Spigot', 'Spigot', 'Forge'],
            lastUpdate: '3 days ago',
            iconColor: 'bg-yellow-700',
        },
    ]

    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('Relevance')

    // 计算当前页的起始和结束索引
    const startIndex = (currentPage - 1) * modsPerPage
    const endIndex = startIndex + modsPerPage

    // 获取当前页的 mods
    const currentMods = mods.slice(startIndex, endIndex)
    const onPageChange = (page: number) => setCurrentPage(page)

    // 计算总页数
    const totalPages = Math.ceil(mods.length / modsPerPage)

    return (
        <div className="bg-gray-100 dark:bg-dark-100 min-h-screen">
            <header className="bg-white dark:bg-dark-100 shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="relative flex-grow max-w-xl">
                        <input
                            type="text"
                            placeholder="搜索资源..."
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="flex-grow">
                        <div className="grid gap-6">
                            {currentMods.map((mod, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow p-6 flex items-start space-x-4"
                                >
                                    <div
                                        className={`w-20 h-20 ${mod.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                                    ></div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-start justify-between">
                                            <div className="min-w-0 flex-grow">
                                                <span className="text-xl font-bold text-gray-900 truncate">
                                                    <Link
                                                        href={`/resources/${mod.id}`}
                                                    >
                                                        {mod.name}
                                                    </Link>{' '}
                                                    <span className="text-sm text-gray-500">
                                                        by {mod.author}
                                                    </span>
                                                </span>

                                                <p className="mt-2 text-sm text-gray-600">
                                                    {mod.description}
                                                </p>
                                            </div>
                                        </div>
                                        <Fragment></Fragment>
                                        <div className="mt-4 flex items-center justify-between flex-wrap">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {mod.tags.map(
                                                    (tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <FiClock
                                                    size={16}
                                                    className="mr-1"
                                                />
                                                <span>
                                                    Updated {mod.lastUpdate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            {/* 分页控件 */}
            <div className="flex overflow-x-auto sm:justify-center text-gray-950">
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
    )
}

export default ResourcesList
