import React from 'react'
import { Card } from 'flowbite-react'

const motdList = [
    {
        name: '小茉莉 · Little Jasmine',
        text: '1.21.1 原版趣味生存',
        img: 'img/servers/xiaomoli.png',
        link: 'https://lj.mohistmc.cn/',
    },
    {
        name: 'Mohist - 1.21.1 测试服',
        text: '非生产服务器，仅供核心测试',
        img: 'mohistLogo.png',
        link: 'https://www.mohistmc.cn/',
    },
]

const MotdList = () => {
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
