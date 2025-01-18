module ApplicationHelper
  def default_meta_tags
    {
      # site: 'Stargazing App',
      # siteとtitleの違いがいまいちわかんない。同じなら同じで良いのか？
      # 「なんとか診断メーカー」みたいな名前のアプリならサイト名とアプリ名違うのはわかるねんけど今回みたいな感じやったら一緒でも良いの？
      title: 'Stargazing App',
      # サイト名とタイトル名を逆にするかどうか。trueやったら「タイトル名 | サイト名」になる？
      reverse: true,
      charset: 'utf-8',
      description: '夜空に向かって素敵な言葉を。あなたの好きな言葉を誰かと交わすアプリ。',
      # keywordsはそもそも今重視されてないメタタグやから表記する必要なし。一旦コメント化
      # keywords: 'スポーツ,スポーツ施設,東京',
      # 正規URLの指定用。検索エンジン側に正しいURLなのかを示すための一般的な書き方。
      canonical: request.original_url,
      # メタデータの表示が並ぶ際に区切る文字。よくサイトのタイトルで|で区切られてるの見るよね。多分それ。
      separator: '|',
      og: {
        # 上のsite,title,descriptionをそのままOGPでも使用
        # site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        # ogの使用画像の設定。app/assets/images/にpngファイルを配置しておいて、それを呼び出す。
        # summary_large_imageを使用したかったら592 x 310のサイズ？
        image: image_url('ogp.png'),
        local: 'ja-JP'
      },
      # Twitter用の設定を個別で設定する
      twitter: {
        card: 'summary_large_image', # Twitterで表示する場合は大きいカードにする
        title: :title,
        # 垢バレしたくなかったりtwitterと紐づけたく無い場合はそもそもsiteの表記書かなくても良いかも。
        # site: '@', # アプリの公式Twitterアカウントがあれば、アカウント名を書く
        image: image_url('ogp.png') # 配置するパスやファイル名によって変更すること
      }
    }
  end
end