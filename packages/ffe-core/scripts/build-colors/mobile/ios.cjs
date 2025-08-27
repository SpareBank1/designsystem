#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function buildContents(paths) {
    paths.forEach(path => {
        writeToFile(path + '/SemanticColors.xcassets/Contents.json')(
            `{
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}`,
        );
        writeToFile(path + '/SemanticColors.xcassets/README.md')(
            `# Semantic Colors

Fargene er bygget fra FFE Core versjon: ${require('../../../package.json').version}

Dokumentasjon på: https://sparebank1.github.io/designsystem/?path=/docs/design-farger-native--docs
`,
        );
        writeToFile(path + '/SemanticColors.xcassets/default/Contents.json')(
            `{
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}`,
        );
        writeToFile(path + '/SemanticColors.xcassets/accent/Contents.json')(
            `{
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}`,
        );
    });
}

function buildSRGBComponentsFromHex(hex) {
    // Remove # if present and convert to lowercase
    const cleanHex = hex.replace('#', '').toLowerCase();

    let r,
        g,
        b,
        a = 255; // Default alpha to 255 (fully opaque)

    if (cleanHex.length === 3) {
        // RGB format: aaa -> aaaaaa
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 4) {
        // RGBA format: aaaf -> aaaaafff
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
        a = parseInt(cleanHex[3] + cleanHex[3], 16);
    } else if (cleanHex.length === 6) {
        // RRGGBB format: aaaaaa
        r = parseInt(cleanHex.slice(0, 2), 16);
        g = parseInt(cleanHex.slice(2, 4), 16);
        b = parseInt(cleanHex.slice(4, 6), 16);
    } else if (cleanHex.length === 8) {
        // RRGGBBAA format: aaaaaaff
        r = parseInt(cleanHex.slice(0, 2), 16);
        g = parseInt(cleanHex.slice(2, 4), 16);
        b = parseInt(cleanHex.slice(4, 6), 16);
        a = parseInt(cleanHex.slice(6, 8), 16);
    } else {
        throw new Error(`Invalid hex color format: ${hex}`);
    }

    // Convert to 0-1 range and format to 3 decimal places
    return `{
        "alpha": "${(a / 255).toFixed(3)}",
        "blue": "${(b / 255).toFixed(3)}",
        "green": "${(g / 255).toFixed(3)}",
        "red": "${(r / 255).toFixed(3)}"
    }`;
}

function colorNameToFolderName(name, prefix = '') {
    const str = prefix ? prefix + '.' : '';
    const parts = (str + name).split('.').filter(part => part !== 'color'); // Remove 'color' prefix if present

    if (parts.length === 0) return '.colorset';

    // First part: lowercase first letter, rest unchanged
    const first = parts[0].charAt(0).toLowerCase() + parts[0].slice(1);

    // Remaining parts: uppercase first letter, rest unchanged
    const rest = parts
        .slice(1)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1));

    return [first, ...rest].join('') + '.colorset';
}

function buildColorFileContents(
    path,
    name,
    light,
    lightAccent,
    dark,
    darkAccent,
) {
    writeToFile(
        path +
            '/SemanticColors.xcassets/default/' +
            colorNameToFolderName(name) +
            '/Contents.json',
    )(
        `{
  "colors" : [
   {
      "color" : {
        "color-space" : "srgb",
        "components" : ${buildSRGBComponentsFromHex(light)}
      },
      "idiom" : "universal"
    },
    {
      "appearances" : [
        {
          "appearance" : "luminosity",
          "value" : "dark"
        }
      ],
      "color" : {
        "color-space" : "srgb",
        "components" : ${buildSRGBComponentsFromHex(dark)}
      },
      "idiom" : "universal"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}
`,
    );

    writeToFile(
        path +
            '/SemanticColors.xcassets/accent/' +
            colorNameToFolderName(name, 'accent') +
            '/Contents.json',
    )(
        `{
  "colors" : [
    {
      "color" : {
        "color-space" : "srgb",
        "components" : ${buildSRGBComponentsFromHex(lightAccent)}
      },
      "idiom" : "universal"
    },
    {
      "appearances" : [
        {
          "appearance" : "luminosity",
          "value" : "dark"
        }
      ],
      "color" : {
        "color-space" : "srgb",
        "components" : ${buildSRGBComponentsFromHex(darkAccent)}
      },
      "idiom" : "universal"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}
`,
    );
}

function buildColorFiles(paths, colors) {
    Object.keys(colors.light).forEach(name => {
        paths.forEach(path => {
            buildColorFileContents(
                path,
                name,
                colors.light[name],
                colors.lightAccent[name],
                colors.dark[name],
                colors.darkAccent[name],
            );
        });
    });
}

function buildIosColors(paths, colors) {
    buildContents(paths);
    buildColorFiles(paths, colors);
}

module.exports = { buildIosColors };
