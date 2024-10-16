# Tehnologii și Platforme Java pentru Aplicații Distribuite

## Program de Master: Semestrul 1 (2024-2025)

**Titular de curs**:  
Lect. Dr. Ioan Badarinza

Email: ioan.badarinza@cs.ubbcluj.ro

Cod Teams: op6k72c

---

## Prezentarea Cursului

Acest curs are ca scop familiarizarea studenților cu tehnologiile Java esențiale pentru dezvoltarea aplicațiilor
distribuite. Vor fi acoperite concepte de sisteme distribuite, utilizarea platformelor Java EE, EJB, JPA, și servleturi,
împreună cu practica de deploy pe diverse servere de aplicații.

---

## Cerințe pentru Promovarea Cursului

Există **5 cerințe obligatorii**, fiecare dintre ele necesitând o notă de trecere pentru a promova cursul:

1. **Examen Scris**
    - Examenul va acoperi toată materia predată în timpul cursului și va fi susținut în sesiune.

2. **Tema Servlet**
    - Instalarea / configurarea pe calculatoarele proprii a unor servere de aplicații (AS): containerele Tomcat, Jetty
      și WildFly.

   - Realizarea unei aplicații relevante ce folosește servleturi. Sunt necesare minimum două servleturi care să comunice
     între ele, eventual unul pe post de dispecer. 
   - Deploy și execuție a aplicației prin modalitățile de deploy: arhive WAR pe cele trei AS; context extern (fără WAR!)
     pentru Tomcat și Jetty; aplicații embedded pentru Tomcat și Jetty.
   - Elaborarea unei documentații a aplicației care să respecte niște [cerințe minimale](docs/cerinte-minimale.md)!
   
   - **Data limită**: 30 noiembrie 2024  
   (Întârzierile vor fi penalizate cu un punct pe săptămână).


3. **Tema Baze de date** 
   - Instalarea / configurarea pe calculatoarele proprii a următoarelor baze de date: PostgreSQL, MicrosoftSQL, Oracle.
   - Realizarea unei aplicații care să folosească EJB, JPA, Servleturi, eventual JSP. Aplicația va trebui să conțină un 
   server ce să gestioneze minimum două tabele în DB care să aibă relații între ele.
   - Elaborarea unei documentații a aplicației care să respecte niște [cerințe minimale](docs/cerinte-minimale.md)!
   - **Data limită**: 15 decembrie 2024  
    (Întârzierile vor fi penalizate cu un punct pe săptămână).


4. **Referat**
    - Realizarea unui referat pe temă aleasă de student din [PropuneriReferate](docs/propuneri-referate.md). 
      Se poate propune întocmirea unui referat pe o temă proprie, de comun acord cu cadrul didactic, dacă 
      tema propusă este adiacentă cu tematica cursului TPJAD. Alegerea temei de referat se va face până la 10.11.2024. 
    - Pentru acceptare se cere:
         - **Data limită pentru alegerea temei**: 10 noiembrie 2024, se face prin completarea formularului: [Formular alegere tema referat](https://docs.google.com/forms/d/e/1FAIpQLSfVadGnQzDXGqD-zi1HzARnlRVM37EjwasDgujeNrbMbneJwA/viewform?usp=sf_link)
         - **Data limită de predare**: 12 ianuarie 2025, se face prin completarea formularului: [Formular incarcare referat](https://docs.google.com/forms/d/e/1FAIpQLSeP_LVBJu53rEbixz53nidb3Sk94vqe6C14kC2eCJ6x4Tkpyw/viewform?usp=sf_link)
         (Prezentarea este necesară; în caz contrar, nota se va reduce cu 50%).
         - **[Referate alese](https://docs.google.com/spreadsheets/d/1kHTwSvYlEYYwaQM39vhKhkdyvbmCYnTKKLImyYYv1yY/edit?usp=sharing)**


5. **Proiect de Aplicație Distribuită**
   - Proiectul va avea implementare majoritară folosind tehnologii Java. Proiectul este elaborat de un colectiv 
   de 2-4 studenți. Tema este stabilită de comun acord cu echipa, aleasă din [PropuneriProiecte](docs/propuneri-proiecte.md). 
   Se poate propune un proiect pe o temă proprie, de comun acord cu cadrul didactic, și dacă tema propusă este adiacentă cu tematica 
   cursului TPJAD. Alegerea temei de proiect se va face până la 10.11.2024. Un draft al conținutului proiectului va fi 
   discutat cu echipa prin mail / întâlnire online în cadrul seminarului.

   - Pentru componentele view se recomandă folosirea unor tehnologii de nivel mai înalt decât JSP (în caz contrar este
   posibilă depunctarea). Aceeași recomandare este valabilă pentru DataLayer, pentru a se folosi, dacă este posibil, 
   tehnologii mai evoluate decât JDBC, cum ar fi Hibernate sau JPA.
   - Pentru fiecare proiect se cer:
      - Documentația proiectului care să respecte cerințe minimale docs! În plus, trebuie să conțină: arhitectura, 
     precizarea intrărilor și explicarea ieșirilor, capturi semnificative, descrierea implementării până la nivel de 
     funcționalitate a fiecărei metode; structura de directoare, fișierele (în principal sursele comentate) și arhivele folosite în aplicație. (Documentatia trebuie sa fie asemanatoare cu partea din lucrarea de licenta unde ati descris aplicatia implementata).
      - Demonstrarea funcționalității aplicației, incluzând o suita de teste pentru partea principală a funcționării 
     proiectului.
      - Se va menționa cu precizie contribuția fiecărui membru al echipei. 
      - Proiectul trebuie prezentat în prezența întregii echipe, fiecare membru va prezenta o parte din proiect. Prezentarea se poate face până la sfârșitul semestrului sau în ziua examenului, după susținerea probei scrise.
      - **Data limită**: Până la sfârșitul semestrului (Proiectul trebuie prezentat de întreaga echipă).

---

## Criterii de Notare

- **Tema Servlet**: 20%
- **Tema Baze de date**: 20%
- **Referat**: 20%
- **Proiect**: 20%
- **Examen Scris**: 20%


- Toate cerințele trebuie îndeplinite individual, fiecare cu o notă de trecere. Neîndeplinirea oricărei cerințe va duce la
nepromovarea cursului.
- Studenţii restanţieri sunt obligaţi să susţină, în condiţiile de mai sus, doar cerinţele 1-5 nepromovate în anul precedent.

Nota finală = 20% Servlet + 20% DB + 20% Referat + 20% Proiect + 20% Examen
---

## Date Importante

- **Alegerea temei pentru referat**: 10 noiembrie 2024
- **Termen limită Tema Servlet**: 30 noiembrie 2024
- **Termen limită Tema Baze de date**: 15 decembrie 2024
- **Termen limită pentru Referat**: 12 ianuarie 2025
- **Termen limită pentru Proiect**: Până la sfârșitul semestrului

---

## Contact și Suport

- Pentru suport tehnic și întrebări, contactați Lect. Ioan Badarinza prin Teams & email.
- Materialele cursului, inclusiv slide-urile și documentațiile aferente, sunt disponibile [aici](TBA).
