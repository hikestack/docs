import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>SpringBoot VS NestJS</b>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SVN" />
      <meta property="og:description" content="SpringBoot VS NestJS" />
    </>
  ),
  project: {
    link: 'https://github.com/ZhiXiao-Lin/svn'
  },
  footer: {
    content: `EllJS @ ${new Date().getFullYear()}`,
  },
}

export default config;