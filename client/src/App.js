import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const hello = gql`
  query {
    hello
    anotherQuery
  }
`

const MY_MUTATION = gql`
  mutation MY_MUTATION {
    myMutation
  }
`

export default () => {

  const [myString, setMyString] = useState('')
  const [submitME] = useMutation(MY_MUTATION)

  const { error, loading, data, refetch } = useQuery(hello)

  useEffect(() => {
    if (data) setMyString(`${data.hello} -- ${data.anotherQuery}`)
    print('*********')
    print('data : ', data)
  }, [data])

  if (error) return <h1> error </h1>
  if (loading) return <p>loading ...</p>

  const clickMe = async () => {

    try {
      const { data: { myMutation } } = await submitME()
      
      if (myMutation === 'success') refetch()

    } catch (error) {
      alert('error')
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          {myString}
        </h2>
        <div onClick={() => clickMe()} > click me </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}