import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'

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

        fetchMotdList()
    }, [])

    return (
        <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-4 gap-3 flex-wrap justify-center items-center">
                {motdList.map((motd, index) => (
                    <Card
                        key={index}
                        renderImage={() => (
                            <a href={motd.link}>
                                <img
                                    width={50}
                                    height={50}
                                    src={motd.img}
                                    alt=""
                                    className="rounded-full transition-transform transform hover:rotate-180"
                                />
                            </a>
                        )}
                        className="p-3 bg-white text-white flex items-center rounded-lg shadow-lg
                                transition-transform transform hover:scale-105"
                        horizontal
                    >
                        <span className="font-bold text-lg text-gray-950 dark:text-gray-100">
                            {motd.name}
                        </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            {motd.text}
                        </span>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MotdList
