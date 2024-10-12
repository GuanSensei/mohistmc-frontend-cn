import { AuthorList } from '@/components/team/CommunityTeamCard'
import ProfileImage from '@/components/ProfileImage'

export const BlogAvatar = ({ id, name }: AuthorList) => (
    <div className="flex items-center flex-shrink-0 md:justify-start">
        <ProfileImage id={id} name={name} size={12} />
        <dl className="ml-2 text-sm font-medium leading-4 text-left whitespace-no-wrap">
            <dt className="sr-only">Name</dt>
            <dd className="text-gray-900 dark:text-white">{name}</dd>

            <dt className="sr-only">GitHub</dt>
            <dd>
                <a
                    href={`https://github.com/${id}`}
                    className="text-xs text-blue-500 no-underline betterhover:hover:text-blue-600 betterhover:hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {`@${id}`}
                </a>
            </dd>
        </dl>
    </div>
)
