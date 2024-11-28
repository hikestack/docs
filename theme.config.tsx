import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>SVN</b>,
  project: {
    link: 'https://github.com/elljs/svn'
  },
  footer: {
    content: `Ell JS @ ${new Date().getFullYear()}`,
  },
}

export default config;