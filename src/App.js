import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card  from './carte'


function App() {




  const [users, setUsers] = useState([{}])
  // Fetch Data
  useEffect(() => {
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])


  return (
    <div className="App">

      <ul>
     
        {users.map(users => ( <Card users={users}/>
          /* <li key={users.id}>
            <h2>Name: {users.name}</h2>
            <h2>Email: {users.email}</h2>
               |
          </li> */
        ))}
      </ul>
    </div>
  );

}



export default App;