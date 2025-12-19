import { IProcessoProduzione, IProdotto } from "./interfaces";

export class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  constructor(nomeProcesso: string, descrizione: string) {
    this.nomeProcesso = nomeProcesso;
    this.descrizione = descrizione;
    this.prodottiInProduzione = [];
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Prodotto ${prodotto.id} aggiunto al processo ${this.nomeProcesso}`
    );
  }
}