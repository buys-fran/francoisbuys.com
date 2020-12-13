// Toggle Ligth and Dark mode
const isDarkTheme = function () {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

const toggleTheme = function () {
  if (isDarkTheme()) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
}

toggleTheme()

document.getElementById('theme-toggle').onclick = function () {
  localStorage['theme'] = isDarkTheme() ? 'light' : 'dark'
  toggleTheme()
}
