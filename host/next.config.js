const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const federationConfig = {
  name: 'host',
  filename: 'static/chunks/remoteEntry.js',
  remotes: {
    remote: 'remote@http://localhost:8081/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
}

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin(federationConfig),
      );
    }

    return config;
  },
};
