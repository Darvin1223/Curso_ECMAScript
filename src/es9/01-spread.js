const user = {username:'thedeltadr',age:26,country:'DOM'};
const {username, ...values} = user;
console.log(username)
console.log(values)