// src/data/users.jsx
const users = [
  { user: "user", pass: "pass", role: "user", token: "user" },
  { user: "admin", pass: "admin", role: "admin", token: "admin" },
  { user: "guest", pass: "guest", role: "guest", token: "guest" },
];

export function verifyUser(username, password) {
  // หา user จาก array users
  const userFound = users.find((u) => u.user === username && u.pass === password);
  return userFound ? { role: userFound.role, token: userFound.token } : null;
}



// import { use } from "react"

// const users = [
//     { user: 'user', pass: 'pass', role: 'user', token: 'user'},
//     { user: 'admin', pass: 'admin', role: 'admin', token: 'admin'},
//     { user: 'guest', pass: 'guest', role: 'guest', token: 'guest'},
// ]

// export function verifyUser(user, pass) {
//     const userFound = user.find((u) => {
//         return u.user === user && u.pass === pass
//     })

//     return userFound ? { role: userFound.role, token: userFound.token} : null
// }
