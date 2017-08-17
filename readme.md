## 下载和安装
```
git clone git@github.com:curder/blog.git
composer install
cp .env.example .env
php artisan key:generate
```


## 配置本地有道对文章别名的支持

修改 `.env` 文件。
```
YOUDAO_APP_KEY=app_key
YOUDAO_APP_SECRET=app_secret
```
