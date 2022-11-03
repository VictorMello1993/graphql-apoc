import { gql, useQuery } from "@apollo/client"
import { UserForm } from "./components/UserForm";

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

type User = {
  id: string;
  name: string
}

function App() {
  const {data, loading} = useQuery<{users: User[]}>(GET_USERS)

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <UserForm/>
    </div>
  )
}

export default App
