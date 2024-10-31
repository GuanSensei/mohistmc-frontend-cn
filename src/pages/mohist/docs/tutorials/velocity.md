## Velocity 支持 (1.20.1)

### 如何将 Velocity 与 Mohist 一起使用？

* 如果使用客户端 Mod，GeyserMC 无法与 Mohist 一起使用，因为 Minecraft Windows 10 版本无法使用 forge 和 mods。

-> __mohist-config/mohist.yml__
```
velocity:
  enabled: true
```
-> __server.properties__
```
online-mode=false //如果您仍然想要仅限高级的服务器，您可以稍后在 Waterfall 的配置文件中设置它
```
如果您尝试在本地网络中设置代理，您还需要更改 "server-port" 值 在 __server.properties__ -> 设置 "server-port=25566" 例如
(如果您有多个服务器, *如果您正在运行代理，您应该拥有多个服务器*, 不要在此处为每个服务器设置相同的值。)

* 现在，为您的 Velocity 代理创建一个新文件夹，并使用以下 java 命令启动它：

```
java -jar <velocity jar name>.jar
```
* 然后在代理完全启动后，键入 "**end**" 以关闭您的代理。

* 现在，您需要更改__velocity.toml__ 在 Velocity 文件夹中：

-> __velocity.toml__  
```
建议阅读 velocity 的官方文档： https://docs.papermc.io/velocity/player-information-forwarding#configuring-modern-forwarding-for-paper
```

* 安装 velocity插件 [Ambassador](https://modrinth.com/plugin/ambassador)

* 现在您可以启动您的代理和所有 Mohist 服务器了！


## Velocity 支持 (1.20.2+)
---

### 如何将 Velocity 与 Mohist 一起使用？

* 如果使用客户端 Mod，GeyserMC 无法与 Mohist 一起使用，因为 Minecraft Windows 10 版本无法使用 forge 和 mods。

-> __mohist-config/mohist.yml__
```
velocity:
  enabled: true
```
-> __server.properties__
```
online-mode=false //如果您仍然想要仅限高级的服务器，您可以稍后在 Waterfall 的配置文件中设置它
```
如果您尝试在本地网络中设置代理，您还需要更改 __server.properties__ -> 设置 "server-port=25566" 例如
(如果您有多个服务器，*如果您正在运行代理，您应该拥有多个服务器*, 不要在此处为每个服务器设置相同的值。)

* 现在，为您的 Velocity 代理创建一个新文件夹，并使用以下 java 命令启动它：

```
java -jar <velocity jar name>.jar
```
* 然后在代理完全启动后，键入"**end**" 以关闭您的代理。

* 现在，您需要更改 __velocity.toml__ 在 Velocity 文件夹中：

-> __velocity.toml__  
```
player-info-forwarding-mode = "modern"
建议阅读 velocity 的官方文档：https://docs.papermc.io/velocity/player-information-forwarding#configuring-modern-forwarding-for-paper
```

* 现在您可以启动您的代理和所有 Mohist 服务器了！
