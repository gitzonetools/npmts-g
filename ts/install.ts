import * as plugins from './npmts-g.plugins'

export let installNpmtsGlobally = function () {
    let packJson = require('../package.json')
    let requiredNpmtsVersion = '^' + packJson.version
    if (!plugins.shelljs.which('npmts')) {
        console.log("NPMTS wasn't found globally, so it is being installed now")
        if (process.env.CI === 'true') {
            console.log('Since we are in a Docker based CI we will install it globally')
            plugins.shelljs.exec('npm install npmts@latest -g')
        } else {
            plugins.shelljs.cd('../..')
            plugins.shelljs.exec('npm install npmts@latest')
        }
    } else {
        let globalNpmtsVersionOutput = plugins.shelljs.exec('npmts -v', { silent: true }).stdout
        let npmtsVersion = /\n?(.*)\n?\s*$/.exec(globalNpmtsVersionOutput)[1]
        console.log(`found global npmts in version ${npmtsVersion}`)
        if (plugins.semver.satisfies(npmtsVersion, requiredNpmtsVersion)) {
            console.log(`OK! global npmts version satisfies needed version`)
        } else {
            console.log('GlobalNPMTS does not satisfy required version, so we are installing it locally.')
            plugins.shelljs.cd('../..')
            plugins.shelljs.exec('npm install npmts@latest')
        }
    }
}

installNpmtsGlobally()


