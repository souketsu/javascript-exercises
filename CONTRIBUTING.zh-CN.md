# The Odin Project JavaScript 练习贡献指南

感谢你对贡献 The Odin Project (TOP) JavaScript 练习感兴趣！在继续阅读本指南之前，请务必阅读我们的[通用贡献指南](https://github.com/TheOdinProject/.github/blob/main/CONTRIBUTING.md)，因为它包含了对我们所有仓库都非常重要的信息。

本贡献指南假设你已经按照通用贡献指南中的说明，fork 并克隆（clone）了我们的 JavaScript 练习仓库。

## 目录

- [如何贡献](#如何贡献)
  - [前置条件](#前置条件)
  - [添加新练习](#添加新练习)

## 如何贡献

### 前置条件

- Node v18.0.0 或更高版本
- npm v8.5.5 或更高版本

### 添加新练习

> [!IMPORTANT]
> **重要提示**：除非你已经在该仓库中提交了建议 Issue 并获得了维护者的批准，否则请不要直接提交包含新练习的 Pull Request。

如果维护者已经批准了新练习的添加，新练习必须遵循与现有练习相同的格式。

要生成新练习模板，请执行以下步骤：

1. 确保在 `javascript-exercises` 根目录下运行 `npm install` 以安装必要的依赖。
2. 运行命令 `npm run generate`。
3. 根据提示，以 "camelCase"（小驼峰）命名法输入新练习的名称。这将创建一个包含必要文件的新目录。
4. 更新新练习目录下的 `README.md`、`.spec.js` 文件以及 `solution` 目录中的文件。
5. 提交包含新练习的 Pull Request。
