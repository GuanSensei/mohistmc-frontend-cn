import React from 'react'
import { Card } from 'flowbite-react'

const motdList = [
    { text: '欢迎来到我的Minecraft服务器！', img: 'mohistLogo.png' },
    { text: '今天是周末，快来参加我们的活动！', img: 'mohistLogo.png' },
    { text: '记得查看我们的规则和公告！', img: 'mohistLogo.png' },
    { text: '感谢您加入我们，希望您玩的开心！', img: 'mohistLogo.png' },
    { text: '服务器正在进行维护，请耐心等待！', img: 'mohistLogo.png' },
    { text: '我们有新的插件上线，快来体验！', img: 'mohistLogo.png' },
    { text: '今晚有比赛，记得参加哦！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
    { text: '请遵守服务器规则，保持友好！', img: 'mohistLogo.png' },
]

const MotdList = () => {
    return (
        <div className="flex flex-col items-center">
            <div  className="grid md:grid-cols-4 gap-3 flex-wrap justify-center items-center">
                {motdList.map((motd, index) => (
                    <Card
                        key={index}
                        renderImage={() => (
                            <img width={50} height={50} src={motd.img} alt="" />
                        )}
                        className="p-4 bg-white text-white flex items-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        horizontal
                    >
                        <span className="font-bold text-lg text-teal-500">
                            {motd.text}
                        </span>
                        <span className="text-sm text-gray-700">
                            这是第二行文本
                        </span>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MotdList
