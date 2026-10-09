let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

nextConfig.redirects = async () => [
  {
    source: "/:path*",
    has: [{ type: "host", value: "www.renos101.com" }],
    destination: "https://renos101.com/:path*",
    permanent: true,
  },
  { source: "/buy", destination: "/pricing", permanent: false },
  { source: "/checkout", destination: "/pricing", permanent: false },
  { source: "/upgrade", destination: "/pricing", permanent: false },
  { source: "/plans", destination: "/pricing", permanent: false },
  { source: "/products/:path*", destination: "/pricing", permanent: false },
]

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
