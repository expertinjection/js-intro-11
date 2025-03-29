// import statements

const {UIHelper, hello, appURL} = require('./UIHelper');
const DBHelper = require('./DBHelper');
const APIHelper = require('./APIHelper');
const {connect, teardown} = require('./ServerHelper');
console.log(UIHelper.component);
console.log(UIHelper.getUrl());

console.log(DBHelper.DB_PASSWORD)
console.log(APIHelper.get());
console.log(connect());