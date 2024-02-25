export const copyUrl = location => {
  const { pathname } = location
  const url = window.location.origin + pathname
  navigator.clipboard.writeText(url)
}
