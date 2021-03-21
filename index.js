const core = require('@actions/core');
const exec = require('@actions/exec');
const { sep } = require('path');
const { tmpdir } = require('os');
const { mkdtempSync, rmdirSync } = require('fs');

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
    const tmpDir = mkdtempSync(`${tmpdir()}${sep}`);
    
    await exec.exec(`curl -L -o elm.gz https://github.com/elm/compiler/releases/download/${version}/binary-for-${os}-64-bit.gz`, {cwd: tmpDir});
    await exec.exec('gunzip elm.gz', {cwd: tmpDir});
    await exec.exec('chmod +x elm', {cwd: tmpDir});
    await exec.exec('sudo mv elm /usr/local/bin/', {cwd: tmpDir});
    
    rmdirSync(tmpDir, {recursive: true});
    console.log(`Elm ${version} installed.`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
