import React from 'react'
import { GitHubLink } from '@/util/LinkUtil'

const ProfileImage = ({
    id,
    size,
}: {
    id: string
    name: string
    size: number
}): React.JSX.Element => {
    return (
        <img
            className={`w-${size || 14} h-${size || 14} rounded-full`}
            src={GitHubLink.asPng(id)}
            alt="Rounded avatar"
        ></img>
    )
}

export default ProfileImage
