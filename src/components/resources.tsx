import React, { useState } from 'react'
import { Search, ChevronDown, Download, Heart, Clock } from 'lucide-react'
import { Input, Card, Badge } from '@/components/basic-components'
import Image from 'next/image'

interface Mod {
    id: number
    name: string
    author: string
    description: string
    downloads: string
    followers: string
    lastUpdated: string
    tags: string[]
    icon: string
    link: string
}

interface ModListingProps {
    initialMods: Mod[]
}

export default function ModListing({ initialMods }: ModListingProps) {
    const [mods] = useState<Mod[]>(initialMods)

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 space-y-6">
                <div className="bg-white dark:bg-dark-100 p-4 rounded-lg border">
                    <h2 className="font-semibold mb-4 flex items-center justify-between">
                        游戏版本
                        <ChevronDown size={16} />
                    </h2>
                    <div className="space-y-2">
                        {['1.20.1', '1.21.4', '1.22'].map((version) => (
                            <div key={version} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={version}
                                    className="mr-2"
                                />
                                <label htmlFor={version}>{version}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-dark-100 p-4 rounded-lg border">
                    <h2 className="font-semibold mb-4 flex items-center justify-between">
                        运行环境
                        <ChevronDown size={16} />
                    </h2>
                    <div className="space-y-2">
                        {['Fabric', 'Forge', 'NeoForge', '通用'].map(
                            (loader) => (
                                <div key={loader} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={loader}
                                        className="mr-2"
                                    />
                                    <label htmlFor={loader}>{loader}</label>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <div className="space-y-4">
                    {/* Search and Filters */}
                    <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="搜索..."
                            className="pl-10 w-full text-gray-950"
                        />
                    </div>

                    {/* Mod Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mods.map((mod) => (
                            <Card
                                key={mod.id}
                                className="p-4 bg-white dark:bg-dark-100"
                            >
                                <div className="flex flex-row items-center gap-4 mb-4">
                                    <div className="h-16 w-16 bg-white dark:bg-dark-100 rounded-lg relative transition-transform duration-200 hover:scale-125">
                                        <a href={mod.link}>
                                            <Image
                                                src={mod.icon}
                                                alt={`${mod.name} icon`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-950 dark:text-gray-100">
                                            {mod.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            作者: {mod.author}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {mod.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center text-sm">
                                                <Download
                                                    size={16}
                                                    className="mr-1"
                                                />
                                                {mod.downloads}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Heart
                                                    size={16}
                                                    className="mr-1"
                                                />
                                                {mod.followers}
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock size={16} className="mr-1" />
                                            Updated {mod.lastUpdated}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {mod.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
