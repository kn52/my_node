
import * as React from 'react';

interface Props {
    count: number
    hits: number
}

export const Count: React.FC<Props> = (props) => {
    return(
        <React.Fragment>
            <h1 className='txt'>{`Count: ${props.count}`}</h1> 
            <h1 className='txt mt-0'>{`Number of hits: ${props.hits}`}</h1> 
        </React.Fragment>
    )
};