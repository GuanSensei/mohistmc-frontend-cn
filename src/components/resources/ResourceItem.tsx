// ResourceItem.tsx
import React from 'react'

interface Resource {
    id: number
    title: string
    description: string
    imageUrl: string
    tags: string[]
}

const ResourceItem: React.FC<{ resource: Resource }> = ({ resource }) => {
    return (
        <div className="resource-item">
            <img
                src={resource.imageUrl}
                alt={resource.title}
                className="resource-image"
            />
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <div className="tags">
                {resource.tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <button>查看详情</button>
        </div>
    )
}

export default ResourceItem
