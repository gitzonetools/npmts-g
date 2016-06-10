import * as plugins from "./npmts-g.plugins";

export let installNpmtsGlobally = function(){
  let packJson = require("../package.json");
  let requiredNpmtsVersion = "^" + packJson.version;
  if (!plugins.shelljs.which('npmts')) {
    console.log("NPMTS wasn't found globally, so it is being installed now");
    plugins.shelljs.cd("../..");
    plugins.shelljs.exec("npm install npmts@latest");
  } else {
    let globalNpmtsVersion = plugins.shelljs.exec("npmts -v").stdout;
    if(plugins.semver.satisfies(globalNpmtsVersion,requiredNpmtsVersion)){
      console.log("OK! global npmts version satisfies needed version");
    } else {
      console.log("GlobalNPMTS does not satisfy required version, so we are installing it locally.");
      plugins.shelljs.cd("../..");
      plugins.shelljs.exec("npm install npmts@latest");
    }
  }
}

installNpmtsGlobally();


