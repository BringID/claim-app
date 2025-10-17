function defineIfBrowserIsMises(): boolean {
  const ua = navigator.userAgent;

  const isMises = ua.includes('MisesBrowser')
  
  return isMises;
}
export default defineIfBrowserIsMises