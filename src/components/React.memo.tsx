import React, {useState} from 'react'
//
// export default {
//     title: 'React.memo demo'
// }
//
//
//
// const UsersCounter = (props: {count: number}) => {
//     return <>
//     <div>
//         {props.count}
//     </div>
//     </>
// }
//
// const UsersList = (props: {users: string[]}) => {
//     return <div>
//         {props.users.map((u,i) => <div key={i}>{u}</div>)}
//     </div>
// }
//
// const Users = React.memo(UsersList)
//
// const Example = () => {
//     const [counterS, setCounter] = useState(0)
//     const [usersS, setUsers] = useState(['Dima', 'Andry', 'Vova'])
//
//     return <>
//         <UsersCounter count={setCounter}/>
//         <UsersList users={setUsers}/>
//     </>
// }