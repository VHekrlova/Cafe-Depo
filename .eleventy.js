module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  	// Zkopírovat scripts/ to _site/scripts/
	eleventyConfig.addPassthroughCopy("scripts");

  //Favicona
  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png")
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png")
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png")
  eleventyConfig.addPassthroughCopy("favicon-16x16.png")
  eleventyConfig.addPassthroughCopy("favicon-32x32.png")
  eleventyConfig.addPassthroughCopy("mstile-150x150.png")

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
