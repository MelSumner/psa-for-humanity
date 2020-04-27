module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    // passthroughFileCopy: true
  };
};