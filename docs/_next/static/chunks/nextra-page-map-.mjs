import meta from "../../../pages/_meta.js";
import docs_meta from "../../../pages/docs/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "monorepo",
    route: "/docs/monorepo",
    frontMatter: {
      "sidebarTitle": "Monorepo"
    }
  }, {
    name: "server",
    route: "/docs/server",
    frontMatter: {
      "sidebarTitle": "Server"
    }
  }, {
    name: "setup",
    route: "/docs/setup",
    frontMatter: {
      "sidebarTitle": "Setup"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];