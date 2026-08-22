// Registry validation script — run by CI on every push.
// Validates manifest.json and all sets/*/meta.json for structural correctness.
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

let errors = 0

function fail(msg) {
  console.error('  FAIL:', msg)
  errors++
}

function assertSetMeta(meta, source) {
  if (typeof meta.slug !== 'string' || !meta.slug) fail(`${source}: missing slug`)
  if (typeof meta.name !== 'string' || !meta.name) fail(`${source}: missing name`)
  if (!Array.isArray(meta.illustrations)) fail(`${source}: illustrations must be an array`)
  if (typeof meta.count !== 'number') fail(`${source}: count must be a number`)
  for (const ill of meta.illustrations ?? []) {
    if (!ill.slug) fail(`${source} > illustration: missing slug`)
    if (!ill.defaultVariant) fail(`${source} > ${ill.slug}: missing defaultVariant`)
    if (!ill.variants || typeof ill.variants !== 'object') fail(`${source} > ${ill.slug}: missing variants`)
    if (!ill.variants?.[ill.defaultVariant]) fail(`${source} > ${ill.slug}: defaultVariant "${ill.defaultVariant}" not in variants`)
  }
}

// Validate root manifest
console.log('Validating manifest.json...')
const manifest = JSON.parse(readFileSync('manifest.json', 'utf-8'))
if (!manifest.sets || typeof manifest.sets !== 'object') {
  fail('manifest.json: missing sets object')
}
for (const [slug, setMeta] of Object.entries(manifest.sets ?? {})) {
  assertSetMeta(setMeta, `manifest.json > ${slug}`)
}

// Validate per-set meta.json files
console.log('Validating sets/*/meta.json...')
const setsDir = 'sets'
if (existsSync(setsDir)) {
  for (const slug of readdirSync(setsDir)) {
    const metaPath = join(setsDir, slug, 'meta.json')
    if (!existsSync(metaPath)) {
      fail(`${metaPath}: missing`)
      continue
    }
    const meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
    assertSetMeta(meta, metaPath)

    // Cross-check with root manifest
    if (manifest.sets[slug]) {
      if (meta.count !== manifest.sets[slug].count) {
        fail(`${metaPath}: count mismatch with manifest (${meta.count} vs ${manifest.sets[slug].count})`)
      }
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} validation error(s) found.`)
  process.exit(1)
}

const setCount = Object.keys(manifest.sets ?? {}).length
console.log(`\nValidated ${setCount} sets — OK.`)
