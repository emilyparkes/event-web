const localStorage = global.window.localStorage
const TOKEN = 'token'

export function saveToken (token) {
  if (!token) {
    localStorage.removeItem(TOKEN)
  } else {
    localStorage.setItem(TOKEN, token)
  }
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}



// export function saveToken (key, value) {
//   if (value === null) {
//     localStorage.removeItem(key)
//   } else {
//     localStorage.setItem(key, value)
//   }
// }

// export function getToken (key) {
//   return localStorage.getItem(key)
// }
