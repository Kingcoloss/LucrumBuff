import fs from 'fs'
const { parse } = require('dotenv')

export default function (filename) {
  const envCfg = parse(fs.readFileSync(filename))
  for (const k in envCfg) {
    process.env[k] = envCfg[k]
  }
}
