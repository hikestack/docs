import nextra from "nextra";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
	components: { code: "Code" },
	syntaxHighlighting: {
		theme: "one-dark-pro",
	},
};

const mdxOptions = {
	remarkPlugins: [[remarkCodeHike, chConfig]],
	recmaPlugins: [[recmaCodeHike, chConfig]],
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === "production" ? "/docs" : "",
	// webpack: (config) => {
	// 	config.module.rules.push({
	// 		test: /\.md$/,
	// 		use: "raw-loader",
	// 	});
	// 	return config;
	// },
};

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	mdxOptions,
});

export default withNextra(nextConfig);
