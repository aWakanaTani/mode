# mode

自分の服を管理するためのアプリ

## 開発環境のセットアップ

### 初期設定

1. asdfのインストール

```bash
brew install asdf

# 環境変数を追加
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc

asdf plugin add nodejs
```

### セットアップ

1. asdfでNode.jsをインストール

```bash
# .tool-versionsの設定に従ってNode.jsをインストール
asdf install
```

2. 依存パッケージのインストール

```bash
npm install
```

### 開発サーバー

```bash
npm run dev
```
