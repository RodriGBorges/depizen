import React from 'react'

const Galeria = () => {
    const images = [
        '/images/abdomen.jpg',
        '/images/espalda.jpg',
        '/images/pecho.jpg',
        '/images/piernas.jpg'
    ]

  return (
    <section>
        {
            images.map((src, index) => (
                <img key={index} src={src} alt={`imagen${index + 1}`}/>
            )
        )
        }
    </section>
)
}

export default Galeria