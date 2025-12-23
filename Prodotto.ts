import { Result, ok, fail, StatoProdotto, Taglia } from "./types.ts";

export class Prodotto {
  private stato: StatoProdotto = StatoProdotto.DISPONIBILE;

  constructor(
    public readonly id: string,
    public readonly nome: string,
    public readonly taglia: Taglia,
    public readonly colore: string
  ) {
    const errors: string[] = [];

    if (!id || id.trim().length === 0) errors.push("ID prodotto non valido.");
    if (!nome || nome.trim().length === 0) errors.push("Nome prodotto non valido.");
    if (!colore || colore.trim().length === 0) errors.push("Colore prodotto non valido.");

    // taglia è un enum: se arriva qui è già un valore ammesso
    // ma manteniamo la robustezza contro eventuali cast forzati:
    const taglieAmmesse = Object.values(Taglia);
    if (!taglieAmmesse.includes(taglia)) errors.push("Taglia prodotto non ammessa.");

    if (errors.length > 0) {
      throw new Error(errors.join(" "));
    }
  }

  public assegnaCliente(): Result {
    if (this.stato === StatoProdotto.ESAURITO) {
      return fail("Prodotto non disponibile: risulta già esaurito.");
    }

    this.stato = StatoProdotto.ESAURITO;
    return ok("Prodotto assegnato correttamente.");
  }

  public getStato(): StatoProdotto {
    return this.stato;
  }
}