# npmts-g
npmts-g speeds up builds with npmts in CI

This is achieved by checking for a globally installed npmts version first
and only installing npmts in local mode when there is no npmts or when the global version
does not satisfy the required one.
