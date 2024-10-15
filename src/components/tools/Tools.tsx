import React, { useEffect, useState } from 'react'

interface Tool {
    name: string
    text: string
    img: string
    link: string
}

const MotdList: React.FC = () => {
    const [motdList, setMotdList] = useState<Tool[]>([])

    useEffect(() => {
        const fetchMotdList = async () => {
            try {
                const response = await fetch('/json/tools.json')
                const data = await response.json()
                setMotdList(data)
            } catch (error) {
                console.error('Error fetching MOTD list:', error)
            }
        }

        fetchMotdList().then(() => '{}')
    }, [])

    return (
        <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-4 gap-3 flex-wrap justify-center items-center">
                {motdList.map((motd, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 bg-white dark:bg-dark-100 p-3 items-center rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105"
                    >
                        <a href={motd.link}>
                            <img
                                width={50}
                                height={50}
                                src={motd.img}
                                alt=""
                                className="rounded-full transition-transform transform hover:rotate-180"
                            />
                        </a>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-gray-950 dark:text-gray-100">
                                {motd.name}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                {motd.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MotdList
