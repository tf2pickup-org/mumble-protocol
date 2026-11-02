// protobuf-ts writes proto2 required fields like proto3 ones and skips them when they hold the
// default value, e.g. ACL.channel_id 0 for the root channel; Murmur drops a message missing them.
import { readFileSync, writeFileSync } from 'node:fs'

const file = 'Mumble.ts'
const source = readFileSync(file, 'utf8')
const fixed = source.replace(/(\/\* required [^*]+ = \d+; \*\/\n)(\s*)if \(.+\)\n\s*/g, '$1$2')
writeFileSync(file, fixed)
