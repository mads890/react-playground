import React from 'react';
import './Notifications.css';

export default function Notifications(props) {
    const badge = props.unread
        ? <div className='unread_count badge'>{props.unread}</div>
        : null;
    return (
        <div className='messages'>
            {props.name}
            {badge}
        </div>
    );
}