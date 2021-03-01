import React from 'react'
import { Button } from 'react-bootstrap'

const PageNotFound = ({history}) => {
    return(
        <div>
            <h1>404</h1>
            <p>Couldn't quite find what you're looking for...</p>
            <Button onClick={() => history.push('/main')}>Go Home?</Button>
        </div>
    )
}
export default PageNotFound