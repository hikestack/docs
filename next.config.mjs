import nextra from 'nextra';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'docs',
  basePath: process.env.NODE_ENV === 'production' ? '/docs/svn' : '',
};

 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});
 
export default withNextra(nextConfig);