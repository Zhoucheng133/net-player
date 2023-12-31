process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      customFileProtocol: "./",
      builderOptions: {
        "extraResources": ["./build/**"],
        artifactName: '${productName}-${version}-${os}-${arch}.${ext}',
        mac: {
          target: {
            arch: ['x64', 'arm64'],
            target: 'zip'
          }
        }
      },
    },
  },
}
