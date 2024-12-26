# Stargazing アプリ

## 要件

- **アプリフォルダ名**: stargazing
- **開発環境**: Docker 4.33.0 ＋ Rails 7.2.2.1 + Ruby 3.3.6 + PostgreSQL

## 概要

流れ星に素敵な言葉を詰め込むと、他の方が詰めこんだ星が１つ帰ってくるアプリ。
(好きな名言を1つ登録すると、また別の誰かが登録した名言が1つ表示されるアプリ)

## モデル

- **Starモデル**
  - カラム: words (言葉), name (それを言った人)

## 画面

- **stars/new**: 名言を登録する画面
- **stars/index**: 他の方の名言がランダムで表示される画面

## 画面詳細

### stars/new

- 「夜空を眺めてると名言呟きたくなるよね…」
- 「私はここで、いろんな素敵な言葉を星に込めるお仕事をしてるんだ。」
- 「あなたの知ってる好きな言葉、教えて欲しいな。」
- 「好きな言葉をここに込めて見て」(実際に言葉を入力する画面)
- 「素敵な言葉だね…誰の言葉なのかな？」(誰の名言なのかを入力する画面)
- 「あなたが星の込めたい言葉、これで間違いないかな？」→入力した内容が表示される。
- 「はい」を押すと、星が上に上がるアニメーション

### stars/index

- 星が下に降りるアニメーション
- 「ありがとう、お礼として他の人の思いが詰まった星、一つ見せてあげる。」
- Starモデルに登録されているデータからランダムに一つ、名言が表示される。
- 「ありがとう、また遊びにきてね」
- 「終了」ボタンを押すとstar/newの最初の画面に戻る。