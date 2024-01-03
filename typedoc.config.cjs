const { sync } = require('glob')
const { resolve } = require('path')

/** @type { import('typedoc').TypeDocOptionMap } */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  name: 'anoare',
  entryPoints: ['./src'],
  entryPointStrategy: 'resolve',
  out: 'docs',
  tsconfig: './tsconfig.json',
  exclude: ['**/__tests__/**/*', './src/index.ts'],
  includeVersion: true,
  hideGenerator: true,
  excludeExternals: true,
  sort: ['source-order'],
  media: 'media',
  categorizeByGroup: true,
  searchCategoryBoosts: {
    Component: 2,
    Model: 1.2,
  },
  searchGroupBoosts: {
    Classes: 1.5,
  },
  navigationLinks: {
    GitHub: 'https://github.com/ichiql/anoare',
  },
  sidebarLinks: {
    Web: 'https://anoare.ichiql.dev',
  },
}
