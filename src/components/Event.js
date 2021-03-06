import React from 'react'
import { Card } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Evnt = (props) => {

  return (
    <Card>
    <Card.Content>
     <Card.Header>{props.title}</Card.Header>
     <Card.Meta>
       <span className='date'>{props.type}</span>
     </Card.Meta>
     <Card.Description>
     {props.datetime}<br/>
     {props.venue}<br/>
     {props.address}<br/>
     {props.extended_address}<br/>
     </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button primary onClick={() => props.save(props)}>Select</Button>
    </Card.Content>
    </Card>
  )

}

export default Evnt
