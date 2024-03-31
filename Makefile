.PHONY: app

up:
	docker-compose up

app:
	docker-compose exec nest bash
