import { useState } from 'react'
import Rezumat from './components/Rezumat.jsx'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import './App.css'

export default function App() {
    const [destinatii, setDestinatii] = useState(destinatiiInitiale)

    const handleToggle = (id) => setDestinatii((curent) => marcheazaVizitat(curent, id))
    const handleAdd = (destNoua) => setDestinatii((curent) => adaugaDestinatie(curent, destNoua))
    const handleDelete = (id) => setDestinatii((curent) => stergeDestinatie(curent, id))

    return (
        <main>
            <h1>City Explorer</h1>
            <Rezumat
                total={destinatii.length}
                nevizitate={getNevizitate(destinatii).length}
                zile={totalZile(getNevizitate(destinatii))}
            />
            <FormularDestinatie onAdd={handleAdd} />
            <ListaDestinatii destinatii={destinatii} onToggle={handleToggle} onDelete={handleDelete} />
        </main>
    )
}