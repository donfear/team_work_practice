import React from 'react';
import { useTranslation } from 'react-i18next';
import './add-more.scss';
export function AddMore(props: {onClick: Function}) {
    const {t} = useTranslation();
    return (
        <div className='add-more'>
            <div className='add-more__button' onClick={() => props.onClick()}>
                {t('Add more')}
            </div>
        </div>
    )
}