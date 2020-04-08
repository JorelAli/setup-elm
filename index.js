const core = require('@actions/core');
const exec = require('@actions/exec');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const version = core.getInput('elm-version');
    console.log(`Installing Elm ${version} ...`);

    let os;
    if (process.platform === 'win32') {
      os = 'windows';
    } else if (process.platform === 'darwin') {
      os = 'mac';
    } else {
      os = 'linux';
    }

    await exec.exec(`curl -L -o elm.gz https://github.com/elm/compiler/releases/download/${version}/binary-for-${os}-64-bit.gz`);
    await exec.exec('gunzip elm.gz');
    await exec.exec('chmod +x elm');
    await exec.exec('sudo mv elm /usr/local/bin/');

    console.log(`Elm ${version} installed.`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
