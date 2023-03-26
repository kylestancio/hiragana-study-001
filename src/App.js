import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import dataset from './dataset'
// import PropTypes from 'prop-types';

export default function App() {
    
  const [data, setData] = useState({})
  const [showAnswer, setShowAnswer] = useState(false)

  const getRandomCharacter = () => {
    setShowAnswer(false)
    setData(dataset[Math.floor(Math.random() * dataset.length)])
  }

  useEffect(() => {
    document.title = "Hiragana Practice"
    getRandomCharacter()

    return () => {
      setData({})
    }
  }, [])
  

  return (
    <>
      <Container>
        <h1 className='text-center mt-5 '>Hiragana Training</h1>
        <Card style={{width: '350px'}} className='mx-auto mt-4'>
          <Card.Header> Write this in hiragana/katakana character </Card.Header>
          <Card.Body>
            <p className="display-2 text-center">{ showAnswer ? data.hiragana : data.furigana }</p>
          </Card.Body>
          <Card.Footer>
            <Button variant={`outline-${showAnswer ? 'danger' : 'primary'} me-3`} onClick={()=>{setShowAnswer(!showAnswer)}}>{showAnswer ? 'Hide' : 'Show'} Answer</Button>
            <Button variant='outline-success' onClick={getRandomCharacter}>Next</Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}
