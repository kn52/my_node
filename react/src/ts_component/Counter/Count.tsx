
import * as React from 'react';

interface Props {
    count: number
}

export const Count: React.FC<Props>= (props) => <h1 className='txt'>{props.count}</h1>;