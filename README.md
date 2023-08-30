## 環境構築
① ブランチをpullしてdocker compose upすればOK。  
② Firebaseの設定が必要。  

## コマンド

### DB接続
```sh
docker compose exec nest-db bash
mysql -h nest-db -u <ユーザ(環境変数)> -p<パスワード(環境変数)>
use <データベース名>;
```

### curlでの会員登録/ログイン確認
```sh
# サインアップ
curl -d '{"email":"sample@example.com", "password":"samplepassword"}' -H "Content-Type: application/json" -X POST http://localhost:3000/auth/signup

# サインイン
curl -d '{"email":"sample@example.com", "password":"samplepassword"}' -H "Content-Type: application/json" -X POST http://localhost:3000/auth/signin

# サインアウト
curl -v -X DELETE -H 'content-type: application/json' -H 'authorization: Bearer <トークン>' http://localhost:3000/auth/signout
```


## 画面
### graphqlの管理画面
http://localhost:3000/graphql

## モデルの自動生成コマンド
① prisma/schema.prismaを編集(手動)  
② 「npx prisma migrate dev --name ＜コメント＞」を実行  
③「npx prisma generate」を実行  
④「src/@generated」の下に自動生成ソースが配置されるので適所に配置  

