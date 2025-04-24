import React from 'react'

type CardProps = {
    id: number
    image: string,
    name: string,
    species: string,
    status: string
}


function Card({ id, image, name, species, status }: CardProps) {
    console.log('render card', name)

    return (

        <figure key={id}>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>{name}</div>
            <div>{species}</div>
            <div>{status}</div>
        </figure>
    )
}

export default React.memo(Card)