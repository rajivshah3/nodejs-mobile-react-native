const { resolve } = require('path');
const { spawnSync, spawn } = require('child_process');

if (process.platform !== 'darwin') {
    return;
}

const zipPath = resolve(__dirname, '../ios/NodeMobile.xcframework.zip');
spawnSync('unzip', ['-t', zipPath], { stdio: 'inherit', cwd: resolve(__dirname, '../ios') });
spawnSync('unzip', ['-o', zipPath], { stdio: 'inherit', cwd: resolve(__dirname, '../ios') });
