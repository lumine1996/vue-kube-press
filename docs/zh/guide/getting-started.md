# 快速上手

## 准备工作

使用前需要更改host，具体IP请联系系统管理员获取，以下IP仅为示例。

#### Windows
1. 找到文件 `C:\Windows\System32\drivers\etc\hosts`
2. 将 `hosts` 文件复制到桌面, 右键打开方式, 使用记事本编辑
3. 在最后一行添加 10.10.0.88 kube-manager.ingress 并保存
4. 将桌面的 `hosts` 文件复制回原处

#### Linux
1. `vi /etc/hosts`
2. 按 `Insert` 键进行编辑
3. 在最后一行添加 10.10.0.88 kube-manager.ingress
4. 按 `Esc` 键, 输入 `:wq` 保存退出

#### Mac

可参考Linux

## 创建第一个应用

[应用管理](./application.md)