import { BlogAvatar } from '@/components/blog/BlogAvatar'
import { AuthorDetails } from '@/components/team/TeamCard'
import React, { useEffect, useState } from 'react'

interface TeamData {
    [key: string]: AuthorDetails
}

export function Authors({ authors }: { authors: Array<String> }) {
    const [teamData, setTeamData] = useState<TeamData>({})

    useEffect(() => {
        fetch('/json/mohistmc_team.json').then(async (json) => {
            setTeamData(await json.json())
        })
    }, [])

    const filteredAuthors = Object.values(teamData).filter((author) =>
        authors.includes(author.id),
    )
    return (
        <div className="w-full border-b border-gray-400 authors border-opacity-20">
            <div
                className={`flex flex-wrap justify-center py-8 mx-auto gap-7 ${authors.length > 4 && 'max-w-3xl'}`}
            >
                {filteredAuthors.map((author) => (
                    <BlogAvatar key={author.name} {...author} />
                ))}
            </div>
        </div>
    )
}
