
import CommunityTeamCard, { AuthorList } from '@/components/team/CommunityTeamCard'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { useAppSelector } from '@/util/redux/Hooks'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'
import Head from 'next/head'
import { getCopyrightText } from '@/util/String'
import React, { useEffect, useState } from 'react'
import TeamCard, { AuthorDetails } from '@/components/team/TeamCard'

interface TeamData {
    [key: string]: AuthorDetails;
}

interface CommunityTeamData {
    [key: string]: AuthorList;
}

const Team: React.FC = () => {
    const [teamData, setTeamData] = useState<TeamData>({});
    const [communityTeamData, setCommunityTeamData] = useState<CommunityTeamData>({});
    const strings = useAppSelector(selectTranslations)

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch('/json/mohistmc_team.json');
                const data = await response.json();
                const response_ = await fetch('/json/community_team.json');
                const data_ = await response_.json();
                setTeamData(data);
                setCommunityTeamData(data_);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeamData();
    }, []);

    return (
        <section className="flex flex-col justify-center items-center pt-20 bg-white dark:bg-dark-50">
            <Head>
                <title>{strings['team.page.title']}</title>
                <meta name="title" content="墨孤蓝网络科技 - Our team" />
                <meta
                    name="description"
                    content={`Meet Our Team! Discover the faces behind MohistMC's innovation. ${getCopyrightText()} MohistMC.`}
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mohistmc.com/team" />
                <meta property="og:title" content="墨孤蓝网络科技 - Team" />
                <meta
                    property="og:description"
                    content={`Meet Our Team! Discover the faces behind MohistMC's innovation. ${getCopyrightText()} MohistMC.`}
                />
                <meta
                    property="og:image"
                    content="https://mohistmc.com/mohistLogo.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="100" />
                <meta property="og:image:height" content="100" />
            </Head>
            <h1 className="md:mt-20 text-center w-3/4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {getLocaleStringAsArgs(strings['team.title'])[0]}
                <span className="text-blue-600 dark:text-blue-500">
                    {getLocaleStringAsArgs(strings['team.title'])[1]}
                </span>
            </h1>

            <div
                className={`flex flex-wrap md:w-full justify-center pt-12 pb-12 gap-7`}
            >
                {Object.values(teamData).map((author) => (
                    <TeamCard key={author.name} {...author} />
                ))}
            </div>

            <h2 className="md:mt-10 text-center w-3/4 mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
                {strings['team.community.title']}
            </h2>

            <div
                className={`flex flex-wrap md:w-full justify-center pt-12 pb-12 gap-1`}
            >
                {Object.values(communityTeamData).map((author) => (
                    <CommunityTeamCard key={author.name}
                                       name={author.name}
                                       pageUrl={author.pageUrl} />
                ))}
            </div>
        </section>
    )
}

export default Team;
