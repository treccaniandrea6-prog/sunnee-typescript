import { ICliente, IProdotto } from "./interfaces";

export class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamentoPreferito: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato === "disponibile") {
      prodotto.assegnaCliente(this);
      console.log(
        `${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.id}`
      );
    } else {
      console.log(
        `Il prodotto ${prodotto.id} non è disponibile`
      );
    }
  }
}