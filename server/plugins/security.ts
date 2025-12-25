/**
 * Nitro plugin to enforce security headers
 * Runs on every response before it's sent to the client
 */
export default defineNitroPlugin((nitroApp) => {
  // Security headers configuration
  const securityHeaders: Record<string, string> = {
    // Prevent clickjacking attacks
    'X-Frame-Options': 'SAMEORIGIN',
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    // XSS Protection (legacy but still useful for older browsers)
    'X-XSS-Protection': '1; mode=block',
    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // Permissions Policy (replaces Feature-Policy)
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    // Cross-Origin policies for Spectre mitigation
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  };

  // Production-only headers (HSTS breaks local dev)
  const productionHeaders: Record<string, string> = {
    // Strict Transport Security (HSTS) - 2 years with preload
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    // Expect-CT header for Certificate Transparency
    'Expect-CT': 'max-age=86400, enforce',
  };

  // Hook into render response to set headers just before sending
  nitroApp.hooks.hook('render:response', (response, { event: _event }) => {
    // Remove X-Powered-By from response headers
    delete response.headers['x-powered-by'];
    delete response.headers['X-Powered-By'];

    // Apply security headers
    for (const [key, value] of Object.entries(securityHeaders)) {
      response.headers[key] = value;
    }

    // Apply production-only headers
    if (process.env.NODE_ENV === 'production') {
      for (const [key, value] of Object.entries(productionHeaders)) {
        response.headers[key] = value;
      }
    }
  });

  // Also hook beforeResponse as fallback for API routes
  nitroApp.hooks.hook('beforeResponse', (event) => {
    const res = event.node.res;

    // Remove X-Powered-By
    res.removeHeader('X-Powered-By');
    res.removeHeader('x-powered-by');

    // Apply security headers
    for (const [key, value] of Object.entries(securityHeaders)) {
      if (!res.getHeader(key)) {
        res.setHeader(key, value);
      }
    }

    // Apply production-only headers
    if (process.env.NODE_ENV === 'production') {
      for (const [key, value] of Object.entries(productionHeaders)) {
        if (!res.getHeader(key)) {
          res.setHeader(key, value);
        }
      }
    }
  });
});
