import React, { Fragment } from 'react'
import Link from 'next/link' // 假设使用Next.js框架
import { FiClock } from 'react-icons/fi'

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
            className="bg-white rounded-lg p-6 max-w-screen-md"
        >
            <div
                className={`w-20 h-20 ${item.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}
            ></div>
            <div className="flex-grow min-w-0">
                <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-grow line-clamp-2 max-w-md">
                        <span className="text-xl font-bold text-gray-900 truncate">
                            <Link href={`/resources/${item.id}`}>
                                {item.name}
                            </Link>{' '}
                            <span className="text-sm text-gray-500">
                                by {item.author}
                            </span>
                        </span>

                        <p className="mt-2 text-sm text-gray-600">
                            {item.description}
                        </p>
                    </div>
                </div>
                <Fragment></Fragment>
                <div className="mt-4 flex items-center justify-between flex-wrap">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
                <div className="text-sm text-gray-500 flex items-center">
                    <FiClock size={16} className="mr-1" />
                    <span>更新于 {item.lastUpdate}</span>
                </div>
            </div>
        </div>
    )
}
