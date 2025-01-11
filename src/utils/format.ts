export function sanitizeLink(link?: string): string {
  if (!link) return ''

  return (
    link
      .replace(/\s/g, '')
      // eslint-disable-next-line no-useless-escape
      .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, '')
      .toLocaleLowerCase()
  )
}

export function formatUrl({ url }: { url: string }): string {
  const formattedUrl = url.startsWith('http') ? url : `https://${url}`
  return formattedUrl
}
