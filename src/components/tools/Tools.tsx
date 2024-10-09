import React from 'react'
import { Card } from 'flowbite-react'

const motdList = [
    {
        name: 'Minecraft',
        text: 'Minecraft我的世界官方网站',
        img: 'img/tools/minecraft.png',
        link: 'https://www.minecraft.net/',
    },
    {
        name: '网易我的世界',
        text: '网易我的世界官网',
        img: 'img/tools/chinamc.jpg',
        link: 'https://mc.163.com/',
    },
    {
        name: 'IntelliJ IDEA',
        text: 'IntelliJ IDEA 官网',
        img: 'img/tools/IntelliJ_IDEA.png',
        link: 'https://www.jetbrains.com/idea/',
    },
    {
        name: 'Gradle',
        text: 'Java 构建工具',
        img: 'img/tools/GRADLE_RGB.png',
        link: 'https://gradle.org/',
    },
    {
        name: 'YourKit',
        text: 'Java 监控工具',
        img: 'img/tools/yourkit.png',
        link: 'https://www.yourkit.com/',
    },
    {
        name: 'Modrinth',
        text: '海外Minecraft资源站',
        img: 'img/tools/modrinth.png',
        link: 'https://modrinth.com/',
    },
    {
        name: 'Blockbench',
        text: 'Minecraft建模常用软件',
        img: 'img/tools/blockbench_logo.png',
        link: 'https://www.blockbench.net/',
    },
    {
        name: 'Flowbite-React',
        text: '前端UI组件库',
        img: 'img/tools/flowbite-react.svg',
        link: 'https://flowbite-react.com/',
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
