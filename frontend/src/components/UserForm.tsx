import { gql, useMutation } from '@apollo/client'
import React, { FormEvent, useState } from 'react'
import ReactDOM from 'react-dom/client'

const CREATE_USER = gql`
  mutation($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`

export function UserForm() {
  const [name, setName] = useState('')
  const [createUser, {data, loading, error}] = useMutation(CREATE_USER)

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault()

    if(!name){
      return;
    }

    await  createUser({
      variables: {
        name
      },
    })    
  }

  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}