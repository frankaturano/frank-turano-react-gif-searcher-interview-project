/**
 * Cookies: cookie set and get helper methods
 */
export default {
  /**
   * @param {string} name: the name of the cookie you'd like to set
   * @param {*} value: the value of the cookie you'd like to set
   * @param {number} days: the time to live in days for the cookie you are setting
   * @returns {Void}: nothing is returned
   */
  set: (name, value, days) => {
    let date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${JSON.stringify(value)};${expires};path=/`
  },

  /**
   * @param {string} name: the name of the cookie you'd like to retrieve
   * @returns {*}: the cookie is returned parsed if found, false if not found
   */
  get: (name) => {
    name = `${name}=`
    let decodedCookie = decodeURIComponent(document.cookie)
    let cookies = decodedCookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      while (cookies[i].charAt(0) === ' ') {
        cookies[i] = cookies[i].substring(1)
      }
      if (cookies[i].indexOf(name) === 0) {
        return JSON.parse(cookies[i].substring(name.length, cookies[i].length))
      }
    }
    return false
  }
}
