
.PHONY: all build codegen pack clean

rollup := node_modules/.bin/rollup
lessc := ../node_modules/.bin/lessc
reactDocgen := ../node_modules/.bin/react-docgen
lerna := ./node_modules/.bin/lerna

EXAMPLE_FILES = $(shell find examples/ -type f -name '*.jsx')
REACT_FILES = $(shell cd ../packages && find ffe-*-react/src -type f -name '*.js'| grep '\/[A-Z][A-Za-z]\+.js\>')


all: build

build: lib/index.js lib/style.css

codegen: gen-src/reactdoc.json gen-src/package-list.json gen-src/examples/index.js


lib/index.js: gen-src/package-list.json gen-src/reactdoc.json gen-src/examples/index.js
	$(rollup) -c


lib/style.css: src/style.less
	mkdir -p gen-src
	$(lessc) --depends $< $@ > gen-src/style.css.d
	$(lessc) --clean-css --autoprefix="last 3 versions, IE>=9" $< $@

-include gen-src/styles.css.d


gen-src/examples/index.js: $(EXAMPLE_FILES)
	node scripts/compile-ejsx.js $(EXAMPLE_FILES)

gen-src/reactdoc.json:
	mkdir -p $(dir $@)
	cd ../packages; $(reactDocgen) --pretty --out ../designsystem/$@ $(REACT_FILES)

gen-src/package-list.json:
	mkdir -p $(dir $@)
	cd ..; ($(lerna) list --json --loglevel error --scope '@sb1/ffe-*'| sed 's?'`pwd`'??'>designsystem/$@)

pack: lib/index.js lib/style.css
	npm pack


clean:
	rm -rf gen-src/ lib/
