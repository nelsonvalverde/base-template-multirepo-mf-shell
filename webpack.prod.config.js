const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mf-auth": "/auth/remoteEntry.js",
    "mf-dashboard": "/dashboard/remoteEntry.js",
    "mf-products": "/products/remoteEntry.js",
    "mf-orders": "/orders/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
