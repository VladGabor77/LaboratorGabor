import { useState } from 'react'

export default function FormularDestinatie({ onAdd }) {
    const [oras, setOras] = useState('')
    const [tara, setTara] = useState('')
    const [zile, setZile] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault() // Oprește reîncărcarea paginii
        if (!oras || !tara) return // Se oprește dacă sunt goale

        onAdd({
            id: crypto.randomUUID(),
            oras,
            tara,
            zile: Number(zile),
            vizitat: false
        })

        // Golește câmpurile după adăugare
        setOras('')
        setTara('')
        setZile('')
    }

    return (
        <form className="formular" onSubmit={handleSubmit}>
            <input placeholder="Oraș" value={oras} onChange={(e) => setOras(e.target.value)} />
            <input placeholder="Țară" value={tara} onChange={(e) => setTara(e.target.value)} />
            <input placeholder="Zile" type="number" value={zile} onChange={(e) => setZile(e.target.value)} />
            <button type="submit">Adaugă</button>
        </form>
    )
}