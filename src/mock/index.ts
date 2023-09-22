export async function initMSW() {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === undefined) {
      const { server } = await import('@/mock/server')
      server.listen({ onUnhandledRequest: 'bypass' })
      console.log("server msw on");
    }
    else {
      const { worker } = await import('@/mock/worker')
      worker.start({ onUnhandledRequest: 'bypass' })
      console.log("browser msw on");
    }
  }
}