import React from 'react'

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
            src={`https://github.com/${id}.png`}
            alt="Rounded avatar"
        ></img>
    )
}

export default ProfileImage
