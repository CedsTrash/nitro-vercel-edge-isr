// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'vercel_edge',
  routeRules: {
    '/': { isr: 3600 },
    '/second-page': { swr: true, cache: { maxAge: 60 * 40 } },
    '/third-page': { isr: 3600, cache: { maxAge: 60 } },
    '/fourth-page': { cache: { maxAge: 60 } },
  },
});
