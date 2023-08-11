import React, { useEffect, useState } from 'react'
import './mynotes.css'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import axios from 'axios'


const MyNotes = () => {

  const [notes, setNotes] = useState([])
  // const navigate = useNavigate();

  const deleteHandler = (e, id) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete')) {
      console.log("Deleting", id)
    }
  }


  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes');
    // const { data } = await axios.get('http://localhost:5000/api/notes');
    setNotes(data)
    // console.log(data);
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <MainScreen title='Welcome Back junaid'>
      <Link to="createnote">
        <Button style={{ marginLeft: 5, marginBottom: 6 }} size="lg" >
          Create New Notes
        </Button>
      </Link>
      {
        notes.map((note) => (
          <Accordion defaultActiveKey="0" key={note._id}>
            <Card>
              <Accordion.Item>


                <Card.Header className='cardHeader'>
                  <Accordion.Header >
                    <div>
                      {note.title}
                    </div>
                    <div className="addanddeletebutton">
                      <Button
                        href={`/note/${note._id}`}
                      // onClick={() => {
                      //   navigate(`/note/${note._id}`)
                      // }}
                      >
                        Edit
                      </Button>
                      <Button variant='danger' className='mx-2' onClick={(e) => deleteHandler(e, note._id)}>
                        Delete
                      </Button>
                    </div>
                  </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge variant='success'>
                        Categories - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {note.content}
                      </p>
                      <footer className="blockquote-footer">
                        Create On - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        ))
      }
    </MainScreen>
  )
}

export default MyNotes