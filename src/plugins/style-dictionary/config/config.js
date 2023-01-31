const fs = require("fs");
const path = require("path");
const StyleDictionaryPackage = require("style-dictionary");

StyleDictionaryPackage.registerTransform({
  type: `value`,
  transitive: true,
  name: `custom/font/size/px`,
  matcher: (token) =>
    token.attributes.category === "font" && token.attributes.type === "size",
  transformer: (token) => {
    return /px/g.test(token.value) ? token.value : `${token.value}px`;
  },
});

StyleDictionaryPackage.registerFormat({
  name: "typescript/custom-module-declarations",
  formatter: function ({ dictionary, file, options }) {
    const { moduleName = `tokens` } = options;
    function treeWalker(obj) {
      let type = Object.create(null);
      let has = Object.prototype.hasOwnProperty.bind(obj);
      if (has("value")) {
        type = "DesignToken";
      } else {
        for (var k in obj)
          if (has(k)) {
            switch (typeof obj[k]) {
              case "object":
                type[k] = treeWalker(obj[k]);
            }
          }
      }
      return type;
    }
    const designTokenInterface = fs.readFileSync(
      // 独自に定義した型を参照
      path.resolve(__dirname, `./CustomDesignToken.d.ts`),
      { encoding: "UTF-8" }
    );

    // get the first and last lines to add to the format by
    // looking for the first and last single-line comment
    const lines = designTokenInterface.split("\n");
    const firstLine = lines.indexOf(`//start`) + 1;
    const lastLine = lines.indexOf(`//end`);

    const output =
      StyleDictionaryPackage.formatHelpers.fileHeader({ file }) +
      `export default ${moduleName};
declare ${lines.slice(firstLine, lastLine).join(`\n`)}
declare const ${moduleName}: ${JSON.stringify(
        treeWalker(dictionary.tokens),
        null,
        2
      )}`;

    // JSON stringify will quote strings, because this is a type we need
    // it unquoted.
    return output.replace(/"DesignToken"/g, "DesignToken");
  },
});

module.exports = {
  source: ["src/plugins/style-dictionary/tokens/**/**.json"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/px",
        "color/css",
        "custom/font/size/px",
      ],
      buildPath: "src/plugins/style-dictionary/build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    javascript: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "size/px",
        "color/hex",
        "custom/font/size/px",
      ],
      buildPath: "src/plugins/style-dictionary/build/js/",
      files: [
        {
          format: "javascript/module",
          destination: "tokens.js",
        },
        {
          format: "typescript/custom-module-declarations",
          destination: "tokens.d.ts",
        },
      ],
    },
  },
};
