const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mf-auth": "http://localhost:4201/remoteEntry.js",
    "mf-dashboard": "http://localhost:4202/remoteEntry.js",
    "mf-products": "http://localhost:4203/remoteEntry.js",
    "mf-orders": "http://localhost:4204/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
