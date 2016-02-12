# Felles Front End Icons

This is a repository for sharing icon SVGs between projects. When your project produces a new icon,
please add it to ffe-icons as a patch to the current main version so other teams can make use of it.

ffe-icons will build an SVG sprite with all icons and put it in `dist/symbol/`, along with an HTML page where
the different icons can be viewed. **This file should in most cases not be used directly!**

Instead, ffe-icons should be used as a repository from where your build fetches only the icons that it needs, to keep
the sprite file size as low as possible. Read on to see how you can set up your build to do this.

## Including ffe-icons in your app
First add an `icons.json` file to your project where you define what icons you want. Additionally, you can
pass in options that [svg-sprite](https://github.com/jkphl/svg-sprite) support to override defaults.

Example `icons.json`:

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

To have npm be able to find the gulp dependency of ffe-icons in node_modules gulp has to be started from npm.
In your projects `package.json`:

```
{
    "name": "awesome-client",
    "scripts": {
        ...
        "ffe:icons": "gulp --no-color --gulpfile node_modules/ffe-icons/gulpfile.js --opts=../../icons.json",
        "#": "--gulpfile sets the cwd to be the dir containing the gulpfile, so --opts has to step up two dirs to find icons.json"
        ...
    }
}
```

Then, in your terminal:

`$ npm run ffe:icons`

A fresh SVG sprite should now have arrived at your destination.

Note: **it is recommended that you _not_ check the generated sprite into source control, but instead let ffe-icons
generate it at build-time.** This reduces the number of manual build steps, and keeps you up-to-date.

## Using the ffe-icons sprite

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
         xlink:href="/app/symbol/ffe-icons.svg#person-ikon"></use>
    <!-- <desc>Alt text goes here</desc> -->
</svg>
```

Finally, depending on the current state of browsers and support requirements you may need to include the
[SVG for Everybody](https://github.com/jonathantneal/svg4everybody) shim in your app.

## Known issues

See the current status on browser support for SVG fragments on [caniuse.com](caniuse.com/svg-fragment).

* At time of writing, the generated SVG sprite cannot be used as a source for `background-image` in your CSS like "single" SVGs can


## Adding a new icon to ffe-icons

When your project produces a new icon, please add it to ffe-icons as a patch to the current main version so other teams
can make use of it. To do that, follow the steps described below. Ask around in the HipChat room Alliansens Frontend-forum
if you get stuck.

If you haven't already, fork this repository and clone it on your machine.

1. Checkout to the `master` branch in ffe-icons
2. Add the icon SVG to the `icons/` folder [^1].
3. Verify that the icon looks OK relative to the others (padding etc) [^2].
4. Update `CHANGELOG.md` with a new entry for the new patch that is going to be created.
5. Commit your changes to the `master` branch, and push the changes to origin. Create a pull request from your repo to ffe.
6. Checkout to the latest release branch (named something like "release/_version_-_version-name_")
7. Cherry-pick the changes you made on `master` to the release branch
8. Run `$ npm version patch` [^3].
9. Push the change and tag to origin: `$ git push && git push --tags`
10. Publish the new version to Nexus: `$ npm publish --registry ***REMOVED***`



###### Footnotes

[^1]: Give the icon a name that describes _what it is_, **not** what it will be _used for_ (since that may be different
from app to app). I.e., call it flamme-ikon, not skade-ikon even though it might represent skadeforsikring in your app.

[^2]: Run `$ npm start`, open the generated HTML (`dist/symbol/sprite.symbol.html`) and have a look. If only minor edits
are needed (padding for instance) you can try this [web-based SVG editor](https://github.com/SVG-Edit/svgedit).

[^3]: This bumps the version number in `package.json`, commits the change, and tags the commit with the version number.