"use strict";
const plugins = require("./npmts-g.plugins");
exports.installNpmtsGlobally = function () {
    let packJson = require("../package.json");
    let requiredNpmtsVersion = "^" + packJson.version;
    if (!plugins.shelljs.which('npmts')) {
        console.log("NPMTS wasn't found globally, so it is being installed now");
        plugins.shelljs.cd("../..");
        plugins.shelljs.exec("npm install npmts@latest");
    }
    else {
        let globalNpmtsVersionOutput = plugins.shelljs.exec("npmts -v", { silent: true }).stdout;
        let npmtsVersion = /\n?(.*)\n?\s*$/.exec(globalNpmtsVersionOutput)[1];
        console.log(`found global npmts in version ${npmtsVersion}`);
        if (plugins.semver.satisfies(npmtsVersion, requiredNpmtsVersion)) {
            console.log(`OK! global npmts version satisfies needed version`);
        }
        else {
            console.log("GlobalNPMTS does not satisfy required version, so we are installing it locally.");
            plugins.shelljs.cd("../..");
            plugins.shelljs.exec("npm install npmts@latest");
        }
    }
};
exports.installNpmtsGlobally();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2luc3RhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFbEMsNEJBQW9CLEdBQUc7SUFDaEMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUMsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRixJQUFJLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzdELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1lBQy9GLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUE7QUFFRCw0QkFBb0IsRUFBRSxDQUFDIn0=