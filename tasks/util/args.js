import yargs from 'yargs'

const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: "env all scripts"
    }).option("watch", {
        boolean: true,
        default: false,
        describe: "watch all scripts"
    }).option("verbose", {
        boolean: true,
        default: false,
        describe: "log"
    }).option("sourcemaps", {
        boolean: true,
        default: false,
        describe: "sourcemaps"
    }).options('port', {
        string: true,
        port: 8080,
        describe: "server port"
    }).argv

export default args