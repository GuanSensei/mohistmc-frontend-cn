export type AuthorList = {
    id: string
    name: string
}

export default function CommunityTeamCard({ id }: AuthorList) {
    return (
        <div className="flex flex-wrap gap-4">
            <a href={`https://github.com/${id}`}>
                <img
                    className={`w-20 h-20 rounded-full`}
                    src={`https://github.com/${id}.png`}
                    alt={`Rounded avatar`}
                />
            </a>
        </div>
    )
}
