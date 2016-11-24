"use strict";
const plugins = require("./npmts-g.plugins");
exports.installNpmtsGlobally = function () {
    let packJson = require('../package.json');
    let requiredNpmtsVersion = '^' + packJson.version;
    if (!plugins.shelljs.which('npmts')) {
        console.log("NPMTS wasn't found globally, so it is being installed now");
        if (process.env.CI === 'true') {
            console.log('Since we are in a Docker based CI we will install it globally');
            plugins.shelljs.exec('npm install npmts@latest -g');
        }
        else {
            plugins.shelljs.cd('../..');
            plugins.shelljs.exec('npm install npmts@latest');
        }
    }
    else {
        let globalNpmtsVersionOutput = plugins.shelljs.exec('npmts -v', { silent: true }).stdout;
        let npmtsVersion = /\n?(.*)\n?\s*$/.exec(globalNpmtsVersionOutput)[1];
        console.log(`found global npmts in version ${npmtsVersion}`);
        if (plugins.semver.satisfies(npmtsVersion, requiredNpmtsVersion)) {
            console.log(`OK! global npmts version satisfies needed version`);
        }
        else {
            console.log('GlobalNPMTS does not satisfy required version, so we are installing it locally.');
            plugins.shelljs.cd('../..');
            plugins.shelljs.exec('npm install npmts@latest');
        }
    }
};
exports.installNpmtsGlobally();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2luc3RhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE0QztBQUVqQyxRQUFBLG9CQUFvQixHQUFHO0lBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3pDLElBQUksb0JBQW9CLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUE7SUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFBO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrREFBK0QsQ0FBQyxDQUFBO1lBQzVFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDM0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osSUFBSSx3QkFBd0IsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDeEYsSUFBSSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtRQUM1RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFBO1FBQ3BFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUZBQWlGLENBQUMsQ0FBQTtZQUM5RixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUMzQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3BELENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsNEJBQW9CLEVBQUUsQ0FBQSJ9