import { IProdotto, ICliente } from "./interfaces";

export class Prodotto implements IProdotto {
  id: string;
  tipo: "costume da bagno" | "pareo" | "cappello";
  taglia: string;
  colore: string;
  stato: "disponibile" | "esaurito";

  private clienteAssegnato?: ICliente;

  constructor(
    id: string,
    tipo: "costume da bagno" | "pareo" | "cappello",
    taglia: string,
    colore: string
  ) {
    this.id = id;
    this.tipo = tipo;
    this.taglia = taglia;
    this.colore = colore;
    this.stato = "disponibile";
  }

  assegnaCliente(cliente: ICliente): void {
    if (this.stato === "esaurito") {
      console.log("Prodotto non disponibile");
      return;
    }

    this.clienteAssegnato = cliente;
    this.stato = "esaurito";
    console.log(
      `Prodotto ${this.id} assegnato a ${cliente.nome} ${cliente.cognome}`
    );
  }
}