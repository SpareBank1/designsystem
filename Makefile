DIRS=dist dist/fonts
$(shell mkdir -p $(DIRS))

all: bootstrap

bootstrap:
	npm run lerna:bootstrap

clean:
	npm run lerna:clean

css: fonts
	npm run build:css
fonts:
	cp -r packages/ffe-core/fonts dist/fonts
ffe-%:
	npm run lerna -- run build --scope $@
clean-ffe-icons-react:
	npm run lerna -- run clean --scope ffe-icons-react
styleguidist: css ffe-icons-react
	npm run styleguidist:build
