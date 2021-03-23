const fs = require('fs')
const yaml = require('js-yaml')
const Ajv = require('ajv') // note it's still ajv@6 due to schema-utils
const ajv = new Ajv({ allErrors: true })

const basedir = 'content/data'

function main() {
  if (!fs.existsSync('.generated/meta.schema.json')) {
    console.error(
      "[ERR ] .generated/meta.schema.json is not present. Run 'schema:generate' to generate one."
    )
    process.exit(255)
  }
  const schema = JSON.parse(
    fs.readFileSync('.generated/meta.schema.json', 'utf-8')
  )
  const validate = ajv.compile(schema)
  const dirs = fs.readdirSync(basedir)

  let err = 0

  console.log('[INFO] Checking meta.yml...')
  for (const dir of dirs) {
    if (!fs.lstatSync(`${basedir}/${dir}`).isDirectory()) continue
    const filename = `${basedir}/${dir}/meta.yml`
    const base = yaml.load(fs.readFileSync(filename, 'utf-8'))
    const valid = validate(base)
    if (valid) {
      console.log(`[ OK ] ${dir}/meta.yml`)
    } else {
      console.error(`[ERR ] ${dir}/meta.yml`)
      const errText = ajv.errorsText(validate.errors)
      for (const i of errText.split(',')) {
        console.error('  ' + i.trim())
      }
      err++
    }
  }

  process.exit(Math.min(err, 255))
}

main()
