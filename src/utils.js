export function setLocal(key, data) {
  data = JSON.stringify(data)
  localStorage.setItem(key, data)
}

export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key))
}
