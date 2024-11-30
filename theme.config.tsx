import React from 'react'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>HikeStack</b>,
  head() {
    const { title } = useConfig();
    return (
      <>
        <title>{title} - HikeStack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="title" content="HikeStack" />
        <meta property="description" content="HikeStack" />
      </>
    );
  },
  project: {
    link: 'https://github.com/hikestack/docs'
  },
  footer: {
    content: `HikeStack @ ${new Date().getFullYear()}`,
  },
}

export default config;