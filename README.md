# Felles Front End Icons

This is a repository for sharing icon SVGs between projects. As long as a new icon fits in the mix of existing ones,
feel free to add it. 

The package will build an SVG sprite with all icons and put it in _dist/sb1-icons/_, along with an HTML page where
the different icons can be viewed. **This file should in most cases not be used directly!**

Instead, ffe-icons should be used as a repository from where your build fetches only the icons that it needs, to keep
the sprite file size as low as possible.


### Using ffe-icons
First add an _icons.json_ file to your project where you define what icons you want. Additionally, you can
pass in options that [svg-sprite](https://github.com/jkphl/svg-sprite) support to override defaults.

Example _icons.json_:

```

{
    "dest": "app/images/",
    "icons": [
        "1-2-3-sirkel-ikon",
        "bamse-ikon",
        "dor-ikon",
        "flamme-ikon",
        "logo-sparebank1",
        "twitter-ikon"
    }

    "config": {
        "log": "error"
    }
}

```

Then start the build by running ffe-icons gulpfile. Pass in the path to your _icons.json_ file as
the --opts argument, here assuming icons.json is in the same directory as your _node_modules_:

`$ cd ./node_modules/ffe-icons && node ./node_modules/gulp/bin/gulp --opts=../../icons.json && cd ../../`

The command above is a typical npm script candidate. In your projects package.json:

```
{
    "name": "awesome-client",
    "scripts": {
        ...
        "ffe:icons": "cd ./node_modules/ffe-icons && node ./node_modules/gulp/bin/gulp --opts=../../icons.json && cd ../../",
        ...
    }
}
```

Then, in your terminal:

`$ npm run ffe:icons`

A fresh SVG sprite should now have arrived at your destination.

Note: **it is recommended that you _not_ check the generated sprite into source control, but instead let ffe-icons
generate it at build-time.** This is to ensure that, in the event of an icon being altered, it is updated for all
ffe-icons users.
