import React from 'react';

export default function Header(props) {
    return (
        <header className="app__header">
            <h1 className="app__title">{props.title}</h1>
            <h2 className="app__subtitle">{props.subtitle}</h2>
            <p className="app__content">{props.content}</p>
        </header>
    )
}