import { readFileSync, readdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import yaml from 'js-yaml'

export default function (moduleOptions) {
  this.options.build.plugins.push({
    apply(compiler) {
      compiler.hooks.emit.tapAsync('GameListJSONPlugin', (compilation, cb) => {
        const dataDir = resolve(__dirname, '../../content/data')
        const ret = []
        for (const i of readdirSync(dataDir)) {
          const metaPath = join(dataDir, i, 'meta.yml')
          if (!existsSync(metaPath)) {
            console.warn(`meta.yml for "${i}" is not found. Skipping.`)
            continue
          }
          const data = yaml.load(readFileSync(metaPath))
          if (!data.name) {
            console.warn(
              `"name" in meta.yml for "${i}" is not found. Skipping.`
            )
            continue
          }
          ret.push({
            name: data.name,
            slug: i,
          })
        }
        console.log(`${ret.length} entries loaded to "games.json".`)
        const text = JSON.stringify(ret)
        compilation.assets['games.json'] = {
          source: () => text,
          size: () => text.length,
        }
        cb()
      })
    },
  })
}
