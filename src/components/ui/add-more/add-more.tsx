import React from 'react';
import './add-more.scss';
export function AddMore(props: {onClick: Function}) {
    return (
        <div className='add-more'>
            <div className='add-more__button' onClick={() => props.onClick()}>
                Add more
            </div>
        </div>
    )
}