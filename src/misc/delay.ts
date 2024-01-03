export const delay = (args?: { sec?: number; msec?: number }): Promise<number> => {
  const { sec, msec } = args ?? { sec: 0, msec: 0 }
  const ms = Math.max((sec ?? 0) * 1000 + (msec ?? 0), 0)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}
