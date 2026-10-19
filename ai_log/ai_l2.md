# Jurnal de utilizare AI - Laboratorul 2 (Vite & JavaScript)
**Proiect:** City Explorer  
**Instrument folosit:** Asistent AI (Gemini)

## 1. Depanare server Vite
- **Prompt/Problemă:** Site-ul nu se încărca ("localhost refused to connect").
- **Soluție oferită de AI:** Am identificat că procesul a fost oprit accidental în terminal în timpul instalării dependențelor. Am rulat din nou `npm install` și `npm run dev`, păstrând terminalul deschis în fundal.

## 2. Rezolvarea erorilor de sintaxă și import în React
- **Prompt/Problemă:** Eroare la compilare `[PARSE_ERROR] Identifier 'StrictMode' has already been declared`.
- **Soluție oferită de AI:** AI-ul mi-a explicat că am duplicat importurile de bază din `main.jsx`. Am curățat fișierul și am lăsat o singură declarație pentru `StrictMode` și `createRoot`.
- **Prompt/Problemă:** Eroare `Failed to resolve import "./data/destinatii.js"`.
- **Soluție oferită de AI:** Am verificat ierarhia folderelor și m-am asigurat că folderul `data` este în interiorul folderului `src`, remediind astfel calea de import.

## 3. Structura proiectului și Exercițiile
- **Prompt/Problemă:** Clarificări legate de unde trebuie plasate fișierele și cum se combină importurile.
- **Soluție oferită de AI:** M-a ghidat pas cu pas să creez manual folderul `api` și fișierul `orase.js`, și mi-a arătat cum să comasez importurile multiple într-o singură linie în `main.jsx`. De asemenea, am testat împreună prinderea erorilor HTTP (schimbând ID-ul utilizatorului în 999 pentru a genera un 404).