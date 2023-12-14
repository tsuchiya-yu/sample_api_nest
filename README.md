## 環境構築
ブランチをpullしてdocker compose upすればOK。  

## コマンド

### DB接続
```sh
docker compose exec nest-db bash
mysql -h nest-db -u <ユーザ(環境変数)> -p<パスワード(環境変数)> DB名(環境変数)
```

### graphqlのクエリ(サンプル)
```sh
# サインアップ
mutation CreateUser {
  createUser(data: { name: "新しい人", password: "1234qwer", email: "test@example.com" }) {
    id
    email
    name
  }
}

# サインイン
mutation SignIn {
  signIn(data: { email: "test@example.com", password: "1234qwer" }) {
    token
  }
}

# サインアウト
mutation {
  signOut {
    statusCode
    message
  }
}
※ Headerに"Authorization": "Bearer SignInの戻り値"を設定する
```


## 画面
### graphqlのplayground
http://localhost:3000/graphql

## モデルの自動生成コマンド
### マイグレーション
① prisma/schema.prismaを編集(手動)  
②「npx prisma migrate dev --name ＜コメント＞」を実行  
③「npx prisma generate」を実行  
### ファイル生成
④「npx nest generate class <モデル名(例 users)>.models」を実行  
⑤「npx nest generate module <モデル名(例 users)>」を実行  
⑥「npx nest generate service <モデル名(例 users)>」を実行  
⑦「npx nest generate resolver <モデル名(例 users)>」を実行  
参考：https://zenn.dev/mseto/articles/nest-graphql-prisma#users-module%E3%80%81service%E3%80%81resolver%E3%81%AE%E4%BD%9C%E6%88%90  
⑧「src/@generated」の下に自動生成ソースが配置されるので適所に配置  