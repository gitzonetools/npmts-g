import * as plugins from "./npmts-g.plugins";

if (!plugins.shelljs.which('git')) {
  plugins.shelljs.echo('Sorry, this script requires git');
  process.exit(1);
}