## PROGETTO DI VISUALIZZAZIONE DELLE INFORMAZIONI

Studente: Paolo Tardioli
Matricola: 571467


### AVVIO

Per visualizzare il progetto, digitare da terminale il comando:

<i>python3 -m http.server 8000 </i>

oppure

<i>python -m http.server 8000 </i>

Quindi, aprire il browser e digitare il seguente link:

http://localhost:8000/about.html


### STAKEHOLDERS

I principali destinatari delle analisi e delle visualizzazioni sono:

-Giornalisti

-Scrittori

-Telecronisti

-Esperti di tennis

Questi utenti sono interessati a studiare l'evoluzione dello sport nel corso degli anni.


### DATASET

I dati utilizzati provengono da:

Un dataset che include tutti i match disputati a livello ATP dal 1970 al 2024.

Un ulteriore dataset contenente informazioni personali sui giocatori ATP nello stesso periodo.

Entrambi i dataset sono disponibili nella cartella "data" del progetto.


### QUERY

Le seguenti query sono state definite per estrarre i dati di interesse:

<b>Query1_A</b>: Percentuale di match giocati per anno (1970-2024), suddivisa per nazione (241 nazioni) e altezza media dei giocatori per anno.

<b>Query1_B</b>: Percentuale di match giocati per anno (1970-2024), suddivisa per nazione (241 nazioni).

<b>QueryHeight</b>: Altezza media dei giocatori per anno (1970-2024), distinta per superficie di gioco (terra, cemento ed erba).

<b>QueryAge</b>: Età media dei giocatori per anno (1970-2024), distinta per superficie di gioco (terra, cemento ed erba).


### STRATEGIA DI VISUALIZZAZIONE

Per rappresentare in modo efficace i risultati delle query, sono stati adottati diversi approcci grafici:

<b>Query1_A</b> e <b>Query1_B</b>

I dati vengono visualizzati tramite un grafico a barre sovrapposte (Stacked Bar Chart) combinato con un grafico a linee (Line Chart).

Asse X: rappresenta l'anno (1970-2024).

Due assi Y separati: mostrano rispettivamente la percentuale di match giocati e l'altezza media dei giocatori.

Colori distinti per rappresentare le nazioni (non saturi per evitare eccessivo contrasto visivo).

Interattività: passando il mouse su un elemento del grafico, appare una finestra con informazioni dettagliate.

<b>QueryHeight</b>

I risultati sono rappresentati attraverso quattro grafici a linee (Line Chart):

Tre grafici mostrano l'altezza media dei giocatori in funzione dell'anno per ciascuna superficie (terra, cemento ed erba).

Un quarto grafico rappresenta l'altezza media generale, indipendentemente dalla superficie.

<b>QueryAge</b>

Vengono utilizzati quattro grafici a linee (Line Chart) con la stessa logica della QueryHeight:

Tre grafici mostrano l'andamento dell'età media dei giocatori per ciascuna superficie.

Un quarto grafico rappresenta l'età media generale nel tempo.