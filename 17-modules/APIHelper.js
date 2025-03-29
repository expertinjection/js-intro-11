function get () {
  return 'GET'
}
function post () {
    return 'POST'
}
function del() {
    return 'DELETE'
}
function updare() {
    return 'UPDATE'
}
const APIHelper = {
    get,
    post,
    del,
    updare
}
module.exports = APIHelper;