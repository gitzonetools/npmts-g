"use strict";
var plugins = require("./npmts-g.plugins");
exports.installNpmtsGlobally = function () {
    var packJson = require("../package.json");
    var requiredNpmtsVersion = "^" + packJson.version;
    if (!plugins.shelljs.which('npmts')) {
        console.log("NPMTS wasn't found globally, so it is being installed now");
        plugins.shelljs.cd("../..");
        plugins.shelljs.exec("npm install npmts@latest");
    }
    else {
        var globalNpmtsVersion = plugins.shelljs.exec("npmts -v").stdout;
        if (plugins.semver.satisfies(globalNpmtsVersion, requiredNpmtsVersion)) {
            console.log("OK! global npmts version satisfies needed version");
        }
        else {
            console.log("GlobalNPMTS does not satisfy required version, so we are installing it locally.");
            plugins.shelljs.cd("../..");
            plugins.shelljs.exec("npm install npmts@latest");
        }
    }
};
exports.installNpmtsGlobally();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFbEMsNEJBQW9CLEdBQUc7SUFDaEMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUMsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1lBQy9GLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUE7QUFFRCw0QkFBb0IsRUFBRSxDQUFDIiwiZmlsZSI6Imluc3RhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwbHVnaW5zIGZyb20gXCIuL25wbXRzLWcucGx1Z2luc1wiO1xyXG5cclxuZXhwb3J0IGxldCBpbnN0YWxsTnBtdHNHbG9iYWxseSA9IGZ1bmN0aW9uKCl7XHJcbiAgbGV0IHBhY2tKc29uID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKTtcclxuICBsZXQgcmVxdWlyZWROcG10c1ZlcnNpb24gPSBcIl5cIiArIHBhY2tKc29uLnZlcnNpb247XHJcbiAgaWYgKCFwbHVnaW5zLnNoZWxsanMud2hpY2goJ25wbXRzJykpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTlBNVFMgd2Fzbid0IGZvdW5kIGdsb2JhbGx5LCBzbyBpdCBpcyBiZWluZyBpbnN0YWxsZWQgbm93XCIpO1xyXG4gICAgcGx1Z2lucy5zaGVsbGpzLmNkKFwiLi4vLi5cIik7XHJcbiAgICBwbHVnaW5zLnNoZWxsanMuZXhlYyhcIm5wbSBpbnN0YWxsIG5wbXRzQGxhdGVzdFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGdsb2JhbE5wbXRzVmVyc2lvbiA9IHBsdWdpbnMuc2hlbGxqcy5leGVjKFwibnBtdHMgLXZcIikuc3Rkb3V0O1xyXG4gICAgaWYocGx1Z2lucy5zZW12ZXIuc2F0aXNmaWVzKGdsb2JhbE5wbXRzVmVyc2lvbixyZXF1aXJlZE5wbXRzVmVyc2lvbikpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9LISBnbG9iYWwgbnBtdHMgdmVyc2lvbiBzYXRpc2ZpZXMgbmVlZGVkIHZlcnNpb25cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbE5QTVRTIGRvZXMgbm90IHNhdGlzZnkgcmVxdWlyZWQgdmVyc2lvbiwgc28gd2UgYXJlIGluc3RhbGxpbmcgaXQgbG9jYWxseS5cIik7XHJcbiAgICAgIHBsdWdpbnMuc2hlbGxqcy5jZChcIi4uLy4uXCIpO1xyXG4gICAgICBwbHVnaW5zLnNoZWxsanMuZXhlYyhcIm5wbSBpbnN0YWxsIG5wbXRzQGxhdGVzdFwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmluc3RhbGxOcG10c0dsb2JhbGx5KCk7XHJcblxyXG5cclxuIl19
