/*
 * The Solidity compiler appends a Swarm Hash of compilation metadata to the end
 * of bytecode. We find this hash based on the specification here:
 * https://solidity.readthedocs.io/en/develop/metadata.html#encoding-of-the-metadata-hash-in-the-bytecode
 */

const CONTRACT_METADATA_REGEXPS = [
  // 0.5.8
  'a165627a7a72305820.*0029',
  // 0.5.12
  'a265627a7a72315820.*64736f6c6343.*0032'
]
const GENERAL_METADATA_REGEXP = new RegExp(`^(.*)(${CONTRACT_METADATA_REGEXPS.map(r => '(' + r + ')').join('|')})$`, 'i')

export const stripMetadata = (bytecode: string): string => {
  if (bytecode === '0x') {
    return '0x'
  }

  const match = bytecode.match(GENERAL_METADATA_REGEXP)
  if (match === null) {
    throw new Error('Only support stripping metadata from bytecodes generated by solc up to v0.5.13 with no experimental features.')
  }
  return match[1]
}
