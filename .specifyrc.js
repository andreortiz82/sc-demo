const outputPath = "./styles/foundation";
const tokenTypes = ['color', 'measurement', 'opacity', 'shadow', 'textStyle', 'duration', 'depth', 'vector']

module.exports = {
  repository: "@picasso/foundations",
  head: "specify",
  base: "main",
  personalAccessToken: process.env.SPECIFY_TOKEN,
  rules: [
    // SCSS 
    {
      name: "SCSS",
      path: `${outputPath}/foundation.scss`,
      filter: { types: tokenTypes },
      parsers: [
        {
          name: "kebabcasify",
          options: {
            keys: [
              "name"
            ]
          }
        },
        { name: "to-scss-variables" }
      ]
    },
    {
      name: "JS",
      path: `${outputPath}/foundation.js`,
      filter: { types: tokenTypes },
      parsers: [
        {
          name: "kebabcasify",
          options: {
            keys: [
              "name"
            ]
          }
        },
        { name: "to-theme-ui" }
      ]
    }
  ]
};