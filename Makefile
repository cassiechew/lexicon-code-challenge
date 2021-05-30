# This is a makefile to streamline running of the app

build:
	yarn && yarn build

run: build
	serve -s build