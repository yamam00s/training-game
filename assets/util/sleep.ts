export default (sec): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, sec)
  })
}
