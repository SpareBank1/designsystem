DIRS=dist dist/fonts
$(shell mkdir -p $(DIRS))

all: bootstrap

bootstrap:
	npm run lerna -- bootstrap

build: bootstrap
	npm run lerna -- run build

test: build
	npm run lerna -- run test

publish: test
	npm run lerna -- publish --yes

clean:
	npm run lerna -- clean --yes

ffe-%:
	npm run lerna -- run build --scope $@

clean-ffe-icons-react:
	npm run lerna -- run clean --scope ffe-icons-react

css: fonts
	npm run build:css

fonts:
	cp -r packages/ffe-core/fonts dist/fonts

styleguidist: css ffe-icons-react
	npm run styleguidist -- build

