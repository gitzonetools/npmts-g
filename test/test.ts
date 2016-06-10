import "typings-test"

import * as npmtsG from "../dist/install";

describe("npmtsCheck",function(){
    it("",function(){
        this.timeout(10000);
        npmtsG.installNpmtsGlobally();
    })
})