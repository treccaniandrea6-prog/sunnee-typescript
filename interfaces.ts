export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;

  ordinaProdotto(prodotto: IProdotto): void;
}

export interface IProdotto {
  id: string;
  tipo: "costume da bagno" | "pareo" | "cappello";
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";

  assegnaCliente(cliente: ICliente): void;
}

export interface IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}