module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      hasuraSecret: 'myadminsecretkey',
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  }