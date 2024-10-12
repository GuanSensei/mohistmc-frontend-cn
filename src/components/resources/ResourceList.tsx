// ResourceList.tsx
import React, { useState, useEffect } from 'react'
import ResourceItem from './ResourceItem'

interface Resource {
    id: number
    title: string
    description: string
    imageUrl: string
    tags: string[]
}

// 模拟 fetchResources 函数
const fetchResources = async (): Promise<Resource[]> => {
    // 模拟数据
    const mockData: Resource[] = [
        {
            id: 1,
            title: '资源1',
            description: '这是资源1的描述',
            imageUrl: 'https://via.placeholder.com/150',
            tags: ['标签1', '标签2'],
        },
        {
            id: 2,
            title: '资源2',
            description: '这是资源2的描述',
            imageUrl: 'https://via.placeholder.com/150',
            tags: ['标签3', '标签4'],
        },
        {
            id: 3,
            title: '资源3',
            description: '这是资源3的描述',
            imageUrl: 'https://via.placeholder.com/150',
            tags: ['标签5', '标签6'],
        },
    ]

    // 模拟延迟，以模拟网络请求
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, 1000) // 模拟1秒延迟
    })
}

const ResourceList: React.FC = () => {
    const [resources, setResources] = useState<Resource[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const resourcesData = await fetchResources()
            setResources(resourcesData)
        }

        fetchData()
    }, [])

    return (
        <div className="resource-list">
            <h2>资源列表</h2>
            {resources.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
            ))}
        </div>
    )
}

export default ResourceList
