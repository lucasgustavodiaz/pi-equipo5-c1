const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://pi-equipo5-c1.vercel.app/'

export async function dynamicBlurDataUrl(url) {
  // generate the smallest image conver to base64
  const base64str = await fetch(
    `${baseURL}/_next/image?url=${url}&w=16&q=60`
  ).then(async res => Buffer.from(await res.arrayBuffer()).toString('base64'))

  const blurSvg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
        <filter id='b' color-interpolation-filters='sRGB'>
          <feGaussianBlur stdDeviation='1'/>
        </filter>
        <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' href='data:image/avif;base64,${base64str}'/>
      </svg>
  `

  const toBase64 = str =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}
