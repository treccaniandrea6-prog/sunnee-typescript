import { Prodotto } from "./Prodotto";
import { Cliente } from "./Cliente";
import { ProcessoProduzione } from "./Processoproduzione";

// Creazione prodotti
const costumeRelax = new Prodotto(
  "P001",
  "costume da bagno",
  "M",
  "blu"
);

const costumeActive = new Prodotto(
  "P002",
  "costume da bagno",
  "L",
  "nero"
);

// Creazione clienti
const cliente1 = new Cliente(
  "Luca",
  "Rossi",
  "luca.rossi@email.com",
  "Carta di credito"
);

const cliente2 = new Cliente(
  "Sara",
  "Bianchi",
  "sara.bianchi@email.com",
  "PayPal"
);

// Creazione processo di produzione
const processoRiciclo = new ProcessoProduzione(
  "Riciclo Reti Marine",
  "Produzione di filati da plastica marina riciclata"
);

// Aggiunta prodotti al processo
processoRiciclo.aggiungiProdotto(costumeRelax);
processoRiciclo.aggiungiProdotto(costumeActive);

// Test ordinazioni
cliente1.ordinaProdotto(costumeRelax);
cliente2.ordinaProdotto(costumeRelax); // non disponibile
cliente2.ordinaProdotto(costumeActive);