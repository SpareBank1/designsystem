
.PHONY: all build clean ghpages

rollup := ../node_modules/.bin/rollup
lessc := ../node_modules/.bin/lessc
lerna := ./node_modules/.bin/lerna
parcel := ../node_modules/.bin/parcel

EXAMPLE_FILES = $(shell find examples -type f -name '*.jsx')
REACT_FILES = $(shell cd ../packages && find ffe-*-react/src -type f -name '*.js'| grep '\/[A-Z][A-Za-z]\+.js\>')

GH_PUBLIC_URL := /designsystem

all: build

build: lib/index.js lib/style.css

lib/index.js: gen-src/package-list.json gen-src/examples/index.js
	$(rollup) -c

lib/style.css: src/style.less
	mkdir -p gen-src
	$(lessc) --include-path=.:./node_modules --depends $< $@ > gen-src/style.css.d
	$(lessc) --include-path=.:./node_modules --clean-css --autoprefix="last 3 versions, IE>=9" $< $@

-include gen-src/styles.css.d


gen-src/examples/index.js: $(EXAMPLE_FILES)
	node scripts/compile-ejsx.js $(EXAMPLE_FILES)

gen-src/package-list.json:
	mkdir -p $(dir $@)
	cd ..; ($(lerna) list --json --loglevel error --scope '@sb1/ffe-*' --ignore '@sb1/ffe-component-index'| sed 's?'`pwd`'??'>component-overview/$@)

ghpages: build/index.html build/404.html

build/%.html: webapp/%.html
	PUBLIC_URL=$(GH_PUBLIC_URL) $(parcel) build $< --dist-dir $(dir $@) --public-url $(GH_PUBLIC_URL)


clean:
	rm -rf gen-src/ lib/ .parcel-cache/ build/
