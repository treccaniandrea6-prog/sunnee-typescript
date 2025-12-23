import { Prodotto } from "./Prodotto.ts";
import { Cliente } from "./Cliente.ts";
import { ProcessoProduzione } from "./Processoproduzione.ts";
import { Taglia, MetodoPagamento } from "./types.ts";

// Creazione prodotti (con taglie validate via enum)
const costumeRelax = new Prodotto("P001", "Costume Relax", Taglia.M, "blu");
const costumeActive = new Prodotto("P002", "Costume Active", Taglia.L, "nero");

// Creazione clienti (email + metodo pagamento validati)
const cliente1 = new Cliente("Luca", "Rossi", "luca.rossi@email.com", MetodoPagamento.CARTA);
const cliente2 = new Cliente("Sara", "Bianchi", "sara.bianchi@email.com", MetodoPagamento.PAYPAL);

// Creazione processo di produzione
const processoRiciclo = new ProcessoProduzione(
  "Riciclo Reti Marine",
  "Produzione di filati da plastica marina riciclata"
);

// Aggiunta prodotti al processo (con blocco duplicati)
console.log(processoRiciclo.aggiungiProdotto(costumeRelax));
console.log(processoRiciclo.aggiungiProdotto(costumeRelax)); // duplicato -> fail
console.log(processoRiciclo.aggiungiProdotto(costumeActive));

// Test ordinazioni: ora passano dal processo (ruolo chiaro)
console.log(processoRiciclo.ordinaProdottoDaProcesso(cliente1, "P001"));
console.log(processoRiciclo.ordinaProdottoDaProcesso(cliente2, "P001")); // già esaurito -> fail
console.log(processoRiciclo.ordinaProdottoDaProcesso(cliente2, "P002"));