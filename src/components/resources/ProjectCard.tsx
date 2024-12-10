import React, { Fragment } from 'react'
import Link from 'next/link' // 假设使用Next.js框架
import { HiOutlineRefresh } from 'react-icons/hi'

export type ProjectProps = {
    item: {
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
}

export default function ProjectCard({ item }: ProjectProps) {
    return (
        <div
            key={item.name}
            className="bg-white rounded-xl p-6"
            style={{ display: 'flex' }}
        >
            <img
                width={120}
                src={'img/servers/xiaomoli.png'}
                alt=""
                className="rounded-xl mr-4"
            />
            <div className="flex-grow">
                <div className="flex items-start justify-between">
                    <div className="flex-grow ">
                        <span className="text-xl font-bold text-gray-900 truncate">
                            <Link href={`/resources/${item.id}`}>
                                {item.name}
                            </Link>{' '}
                            <span className="text-sm text-gray-500">
                                by {item.author}
                            </span>
                        </span>

                        <p className="mt-2 text-sm text-gray-600 mr-24">
                            {item.description}
                        </p>
                    </div>
                </div>
                <div className="flex mt-4 items-center justify-between flex-wrap">
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center justify-end">
                        <HiOutlineRefresh size={16} className="mr-1" />
                        <span>更新于 {item.lastUpdate}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
