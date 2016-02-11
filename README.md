# Felles Front End Icons

This is a repository for sharing icon SVGs between projects. As long as a new icon fits in the mix of existing ones,
feel free to add it. If only minor edits are needed (padding relative to ther icons for instance) you can try this 
[web-based SVG editor](https://github.com/SVG-Edit/svgedit). 

The package will build an SVG sprite with all icons and put it in _dist/sb1-icons/_, along with an HTML page where
the different icons can be viewed. **This file should in most cases not be used directly!**

Instead, ffe-icons should be used as a repository from where your build fetches only the icons that it needs, to keep
the sprite file size as low as possible.


### Including ffe-icons
First add an _icons.json_ file to your project where you define what icons you want. Additionally, you can
pass in options that [svg-sprite](https://github.com/jkphl/svg-sprite) support to override defaults.

Example _icons.json_:

```

{
    "dest": "app/",
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
generate it at build-time.** This reduces the number of manual build steps, and keeps you up-to-date.

### Using the ffe-icons sprite

The primary color (royal blue) is removed from the SVG. This is so CSS can be used to override the color. To re-instate
royal blue as the primary color, add the following to your global icon class:

```
.icon {
    fill: "#002776"; // Or, even better:
    fill: @royal-blue; // assuming use and import of ffe-core variables
    
    // To add alternatives, replace the fill attribute with whatever color you need
    &--white {
       fill: #fff;
    }    
    &--black {
       fill: #000;    
    }
}
```  

Non-royal blue colors are left as-is, so details in other colors are left untouched.

In your markup: 

```
<svg class="icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" 
         xlink:href="/app/symbol/sb1-icons.svg#person-ikon"></use>
    <!-- <desc>Alt text goes here</desc> -->
</svg>
```