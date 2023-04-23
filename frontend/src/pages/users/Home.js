import React, { useEffect, useState } from 'react';
import publicApi from '../../api/publicApi';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')

  const getPlayers = async () => {
    const { data } = await publicApi.get('player')
    setData(data);
    console.log(data)
  }

  const getSearch = () => {
    return data.filter((player) => {
      return search.toLowerCase() === ''? player : player.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  useEffect(() => {
     getPlayers();
  }, [])
  
  return(
    <div>
      <h1 style={styles.h1}>AN API DATA OF ARSENAL PLAYERS:</h1>
      <input style={styles.input} type="text"
       placeholder='Search for an Arsenal player'
      onChange={(event) => setSearch(event.target.value)} />
      <Button variant="warning" onClick={() => getSearch()}>Warning</Button>

    <Table striped bordered hover variant="dark">
      <thead style={styles.thead}>
        <tr>
          <th>Name</th> 
          <th>Number</th>
          <th>Nationality</th>
          <th>Goals</th>
          <th>Assist</th>
          <th>Position</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {

        getSearch.map((player) => {
          return(
            <tr key={player._id}>
            <td>{player.name}</td>
            <td>{player.number}</td>
            <td>{player.nationality}</td>
            <td>{player.goals}</td>
            <td>{player.assist}</td>
            <td>{player.position}</td>
            <td> <img src={'http://localhost:5000/' + player.image} alt="Players Photos" style={styles.img} /></td>
          </tr> 
          )
        })
      }
      </tbody>
    </Table>
 </div>

  )
}

const styles = {
  img: {
  height: '100px',
  width: '150px',
  },
  thead: {
    backgroundColor: 'white',
    color: 'red'
  },
  h1: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontStyle: 'italic'
  },
  input: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 'auto 20px',
    width: '500px',
   marginBottom: '10px'
  }
}

export default Home;