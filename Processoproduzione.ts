import { Result, ok, fail } from "./types.ts";
import { Cliente } from "./Cliente";
import { Prodotto } from "./Prodotto";

export class ProcessoProduzione {
  private prodottiInProduzione: Prodotto[] = [];

  constructor(
    public readonly nomeProcesso: string,
    public readonly descrizione: string
  ) {
    const errors: string[] = [];
    if (!nomeProcesso || nomeProcesso.trim().length === 0) errors.push("Nome processo non valido.");
    if (!descrizione || descrizione.trim().length === 0) errors.push("Descrizione processo non valida.");
    if (errors.length > 0) throw new Error(errors.join(" "));
  }

  public aggiungiProdotto(prodotto: Prodotto): Result {
    const duplicato = this.prodottiInProduzione.some((p) => p.id === prodotto.id);
    if (duplicato) {
      return fail(
        `Prodotto duplicato: l'ID ${prodotto.id} è già presente nel processo ${this.nomeProcesso}.`
      );
    }

    this.prodottiInProduzione.push(prodotto);
    return ok(`Prodotto ${prodotto.id} aggiunto correttamente al processo ${this.nomeProcesso}.`);
  }

  public listaProdotti(): Prodotto[] {
    // restituiamo una copia per non esporre l’array interno
    return [...this.prodottiInProduzione];
  }

  public ordinaProdottoDaProcesso(cliente: Cliente, prodottoId: string): Result {
    // Ruolo chiaro del processo: ordini SOLO prodotti che sono passati dal processo.
    const prodotto = this.prodottiInProduzione.find((p) => p.id === prodottoId);

    if (!prodotto) {
      return fail(
        `Ordine non possibile: prodotto ${prodottoId} non presente nel processo ${this.nomeProcesso}.`
      );
    }

    // L’ordine lo gestisce il cliente (che delega al prodotto), ma il processo è il gate.
    const ordine = cliente.ordinaProdotto(prodotto);
    if (!ordine.success) {
      return fail(
        `Ordine fallito (Processo ${this.nomeProcesso}): ${ordine.message}`,
        ordine.errors
      );
    }

    return ok(`Ordine completato (Processo ${this.nomeProcesso}): ${prodottoId} assegnato.`);
  }
}