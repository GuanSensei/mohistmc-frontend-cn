import { GitHubLink } from '@/util/LinkUtil';

export type AuthorList = {
    id: string
    name: string
}

export default function CommunityTeamCard({ id }: AuthorList) {
    return (
        <div className="flex flex-wrap gap-4">
            <a href={GitHubLink.as(id)}>
                <img
                    className={`w-20 h-20 rounded-full`}
                    src={GitHubLink.asPng(id)}
                    alt={`Rounded avatar`}
                />
            </a>
        </div>
    )
}
