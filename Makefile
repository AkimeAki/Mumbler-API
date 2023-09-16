.PHONY: コンテナ一覧
ps:
	docker compose ps -a

.PHONY: コンテナ立ち上げ
init:
	@make down
	docker compose build --no-cache
	docker compose up -d

.PHONY: コンテナ終了
down:
	docker compose down --rmi all --volumes --remove-orphans

.PHONY: ログ
logs:
	docker compose logs -f

.PHONY: アタッチ
attach:
	docker compose exec -it api bash

.PHONY: DBアタッチ
db:
	docker compose exec -it db mysql -uroot -proot
