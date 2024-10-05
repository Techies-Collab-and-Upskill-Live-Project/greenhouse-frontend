import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/config/axios';

function Users() {
 const [users, setUsers ] = useState();

     useEffect(()=> {
      let isMounted = true;
      const controller = new AbortController();

      const getUsers = async () => {
        try {
            const response = await axios.get('/users',)
        } catch (err) {
            console.error(err);
        }
      }
     },[])

    return (
       <article>
        <h2>Users List</h2>
        {users?.length
        ? (
            <ul>
                {users.map((user,i) => <li key={i}>{user?.username}</li>)}
            </ul>
        ) : <p>No users to display</p>
        }
       </article>
  )
}

export default Users