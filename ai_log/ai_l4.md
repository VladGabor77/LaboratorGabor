Etapa 1: Configurare și Comunicare REST

Acțiune: Conectarea aplicației React cu serverul backend (json-server) rulat pe portul 3001 (db.json) și configurarea cererilor asincrone folosind fetch (GET, POST, PATCH).

Asistență AI: Verificarea corectitudinii antetelor HTTP, a codurilor de status (200 OK, 201 Created) și a structurii payload-ului trimis din formular.

Etapa 2: Validarea Formularelor și Tipul Datelor

Acțiune: Implementarea funcției de validare pentru adăugarea destinațiilor (verificare lungime minimă oraș, prezență țară, interval numeric pentru zile).

Asistență AI: Analizarea comportamentului datelor transmise din inputurile HTML de tip număr și identificarea necesității conversiei explicite (Number()) pentru a evita lipirea șirurilor de caractere în calculele din componenta de rezumat.

Etapa 3: Depanarea Panoului de Statistici (PanouStatistici.jsx)

Acțiune: Identificarea și corectarea celor 7 erori critice din componenta de statistici (erori de sintaxă JSX, dependenciști lipsă în useEffect, mutarea greșită a stării, calculul eronat al mediilor și accesarea proprietăților nedefinite).

Asistență AI: Ghidaj pas cu pas pentru izolarea fiecărei erori prin intermediul consolei de dezvoltare și refactorizarea codului curat.

Etapa 4: Optimizare și Paginare (Set de date mare - 2000 elemente)

Acțiune: Testarea aplicației cu fișierul db-mare.json pe portul 3002. Măsurarea performanței pentru varianta nepaginată vs. varianta paginată (?_page=1&_per_page=20).

Asistență AI: Setarea măsurătorilor de performanță folosind performance.now(), numărarea cardurilor din DOM prin document.querySelectorAll('.card').length și extragerea dimensiunilor din Network tab (Size și Time).