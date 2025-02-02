PROGETTO DI VISUALIZZAZIONE DELLE INFORMAZIONI

Studente: Paolo Tardioli
Matricola: 571467

AVVIO
Per visualizzare il progetto digitare da terminale il comando

python3 -m http.server 8000
oppure
python -m http.server 8000

Digitare quindi su browser il seguente link:
http://localhost:8000/about.html

STAKEHOLDERS
I principali destinatari delle analisi e delle visualizzazioni sono giornalisti, scrittori, telecronisti ed esperti di tennis interessati a studiare l'evoluzione dello sport nel corso degli anni.


DATASET
I dati sono stati raccolti da un dataset che include tutti i match disputati a livello ATP dal 1970 al 2024. Inoltre, è stato integrato un ulteriore dataset contenente informazioni personali sui giocatori ATP nello stesso periodo. Entrambi i dataset sono disponibili nella cartella "data" del progetto.


QUERY
Le seguenti query sono state definite per estrarre i dati di interesse:

    • Query1_A : Percentuale di match giocati per anno (1970-2024), suddivisa per nazione (241 nazioni) e altezza media dei giocatori per anno.
    • Query1_B :  Percentuale di match giocati per anno (1970-2024), suddivisa per nazione (241 nazioni).
    • QueryHeight : Altezza media dei giocatori per anno (1970-2024), distinta per superficie di gioco (terra, cemento ed erba).
    • QueryAge : Età media dei giocatori per anno (1970-2024), distinta per superficie di gioco (terra, cemento ed erba).


STRATEGIA DI VISUALIZZAZIONE
Per rappresentare in modo efficace i risultati delle query, sono stati adottati diversi approcci grafici:

Query1_A e Query1_B: I dati vengono visualizzati tramite un grafico a barre sovrapposte (Stacked Bar Chart) combinato con un grafico a linee (Line Chart).
    • L'asse x rappresenta l'anno (1970-2024).
    • Due assi y separati mostrano rispettivamente la percentuale di match giocati e l'altezza media dei giocatori.
    • I contributi delle diverse nazioni sono evidenziati con colori distinti (non saturi per evitare eccessivo contrasto visivo).
    • Passando il mouse su un elemento del grafico, viene visualizzata una finestra con informazioni dettagliate sui dati corrispondenti.

QueryHeight: I risultati sono rappresentati attraverso quattro grafici a linee (Line Chart):
    • Tre grafici mostrano l'altezza media dei giocatori in funzione dell'anno per ciascuna superficie (terra, cemento ed erba).
    • Un quarto grafico rappresenta l'altezza media generale, indipendentemente dalla superficie.

QueryAge: Anche in questo caso vengono utilizzati quattro grafici a linee (Line Chart) con la stessa logica della QueryHeight:
    • Tre grafici mostrano l'andamento dell'età media dei giocatori per ciascuna superficie.
    • Un quarto grafico rappresenta l'età media generale nel tempo.