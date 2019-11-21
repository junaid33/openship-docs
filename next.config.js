const remarkPlugins = [
  require("remark-autolink-headings"),
  require("remark-emoji"),
  require("remark-images"),
  require("remark-slug"),
  require("remark-unwrap-images")
];

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins
  }
});

const nextConfig = {
  webpack: (config, { dev }) => {
    config.optimization.minimizer[0].options.terserOptions.compress.inline = false;
    return config;
  }
};

module.exports = withMDX(
  {
    pageExtensions: ["js", "jsx", "md", "mdx"]
  },
  nextConfig
);
