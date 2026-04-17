export function useNaive() {
  if (typeof window === 'undefined') {
    throw new Error('Naive UI APIs are not available outside the browser.')
  }

  const apis = {
    message: window.$message,
    dialog: window.$dialog,
    notification: window.$notification,
    loadingBar: window.$loadingBar,
  }

  if (!apis.message || !apis.dialog || !apis.notification || !apis.loadingBar) {
    throw new Error('Naive UI APIs are not ready. Make sure AppProvider is mounted.')
  }

  return apis
}
