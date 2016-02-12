# Changelog

## Version 1.0.3
* Made devDependencies actual dependencies so package consumers get them...
* Re-added postinstall script

## Version 1.0.2
* Removed postinstall script, since some build tools had trouble finding gulp at that stage
* Updated package.json with the correct repository URL

## Version 1.0.1
* Added plaster-ikon
![plaster-ikon](***REMOVED***)

## Version 1.0.0
* Renamed default sprite to ffe-icons.svg
* Renamed desktop-ikon to laptop-ikon
* Added several new icons to ffe-icons
* Removed sfo-icons - use instead the common ffe-icons
* Updated the gulpfile to be extendable via an options json to allow for minimum SVG sprite generation per project
