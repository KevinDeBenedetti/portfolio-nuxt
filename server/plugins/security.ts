/**
 * Nitro plugin to remove X-Powered-By header
 * Runs on every response before it's sent to the client
 */
export default defineNitroPlugin((nitroApp) => {
  // Hook into render response to remove headers just before sending
  nitroApp.hooks.hook('render:response', (response, { event: _event }) => {
    // Remove X-Powered-By from response headers
    delete response.headers['x-powered-by'];
    delete response.headers['X-Powered-By'];
  });

  // Also hook beforeResponse as fallback
  nitroApp.hooks.hook('beforeResponse', (event) => {
    event.node.res.removeHeader('X-Powered-By');
    event.node.res.removeHeader('x-powered-by');
  });
});
