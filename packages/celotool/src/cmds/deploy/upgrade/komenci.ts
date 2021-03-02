import { UpgradeArgv } from 'src/cmds/deploy/upgrade'
import { addContextMiddleware, ContextArgv, switchToContextCluster } from 'src/lib/context-utils'
import { exitIfCelotoolHelmDryRun } from 'src/lib/helm_deploy'
import { upgradeKomenciChart } from 'src/lib/komenci'
import yargs from 'yargs'

export const command = 'komenci'

export const describe = 'upgrade komenci on an AKS cluster'

type OracleUpgradeArgv = UpgradeArgv &
  ContextArgv & {
    useForno: boolean
  }

export const builder = (argv: yargs.Argv) => {
  return addContextMiddleware(argv).option('useForno', {
    description: 'Uses forno for RPCs from the komenci clients',
    default: false,
    type: 'boolean',
  })
}

export const handler = async (argv: OracleUpgradeArgv) => {
  // Do not allow --helmdryrun because komenciIdentityHelmParameters function. It could be refactored to allow
  exitIfCelotoolHelmDryRun()
  await switchToContextCluster(argv.celoEnv, argv.context)
  await upgradeKomenciChart(argv.celoEnv, argv.context, argv.useForno)
}
