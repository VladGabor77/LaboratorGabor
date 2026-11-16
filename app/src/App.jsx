import { useState, useEffect } from 'react'
import Rezumat from './components/Rezumat.jsx'
import { getNevizitate, totalZile, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js'
import { getDestinatii, patchVizitat, postDestinatie } from './api/destinatii.js'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import Cautare from './components/Cautare.jsx'
import PanouStatistici from './components/PanouStatistici.jsx'
import './App.css'

export default function App() {
    const [destinatii, setDestinatii] = useState([])
    const [incarcare, setIncarcare] = useState(true)
    const [eroare, setEroare] = useState(null)
    const [seTrimite, setSeTrimite] = useState(false)
    const [cautare, setCautare] = useState('')
    const [pagina, setPagina] = useState(1)
    const [totalPagini, setTotalPagini] = useState(1)

    // Ex 1b: Cererea datelor la pornirea aplicației
    useEffect(() => {
        async function incarca() {
            setIncarcare(true) // Repornim încărcarea la schimbarea paginii
            try {
                const rezultat = await getDestinatii(pagina)
                setDestinatii(rezultat.data) // Extragem lista din .data
                setTotalPagini(rezultat.pages) // Salvăm totalul de pagini
            } catch (err) {
                setEroare(err.message)
            } finally {
                setIncarcare(false)
            }
        }
        incarca()
    }  , [pagina]  ) // Efectul rulează din nou la schimbarea paginii

    // Ex 1c: Actualizarea stării abia după ce serverul confirmă modificarea
    const handleToggle = async (id) => {
        const dest = destinatii.find(d => d.id === id)
        try {
            const salvata = await patchVizitat(id, !dest.vizitat)
            setDestinatii((curent) => curent.map((d) => (d.id === id ? salvata : d)))
        } catch (err) {
            console.error("Eroare la marcare:", err)
        }
    }

    const handleAdd = async (destNoua) => {
        setSeTrimite(true)
        try {
            const salvata = await postDestinatie(destNoua)
            setDestinatii((curent) => [...curent, salvata])
        } catch (err) {
            console.error("Eroare la adăugare:", err)
        } finally {
            setSeTrimite(false)
        }
    }
    const handleDelete = (id) => setDestinatii((curent) => stergeDestinatie(curent, id))
    const textCautat = cautare.trim().toLowerCase()
    const afisate = destinatii.filter(
        (d) => d.oras.toLowerCase().includes(textCautat) ||
            d.tara.toLowerCase().includes(textCautat)
    )
    return (
        <main>
            <h1>City Explorer</h1>
            <PanouStatistici />

            {incarcare && <p className="stare">Se încarcă destinațiile...</p>}
            <h1>City Explorer</h1>

            {incarcare && <p className="stare">Se încarcă destinațiile...</p>}
            {eroare && <p className="stare eroare">Nu am putut încărca datele: {eroare}</p>}

            {!incarcare && !eroare && (
                <>
                    <Rezumat
                        total={destinatii.length}
                        nevizitate={getNevizitate(destinatii).length}
                        zile={totalZile(getNevizitate(destinatii))}
                    />
                    <FormularDestinatie onAdd={handleAdd} seTrimite={seTrimite} />

                    <Cautare valoare={cautare} onChange={setCautare} />

                    {destinatii.length === 0 ? (
                        <p className="gol">Nu există nicio destinație. Adaugă prima din formular.</p>
                    ) : afisate.length === 0 ? (
                        <p className="gol">Niciun rezultat pentru „{cautare}”.</p>
                    ) : (
                        <ListaDestinatii destinatii={afisate} onToggle={handleToggle} onDelete={handleDelete} />
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <button
                            onClick={() => setPagina(p => p - 1)}
                            disabled={pagina === 1 || incarcare}>
                            Înapoi
                        </button>

                        <span>pagina {pagina} din {totalPagini}</span>

                        <button
                            onClick={() => setPagina(p => p + 1)}
                            disabled={pagina === totalPagini || incarcare}>
                            Înainte
                        </button>
                    </div>
                </>
            )}
        </main>
    )
}