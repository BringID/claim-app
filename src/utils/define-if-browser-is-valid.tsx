function defineIfBrowserIsValid(): boolean {
  const ua = navigator.userAgent;

  const isBrave = (navigator as any).brave && typeof (navigator as any).brave.isBrave === 'function';
  const isChrome = /Chrome\/\d+/.test(ua) &&
                   !/Edg\//.test(ua) &&
                   !/OPR\//.test(ua) &&
                   !/YaBrowser\//.test(ua) &&
                   !/Vivaldi\//.test(ua) &&
                   !/SamsungBrowser\//.test(ua) &&
                   !/DuckDuckGo\//.test(ua);

  return isBrave || isChrome;
}

export default defineIfBrowserIsValid