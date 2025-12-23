import { Result, ok, fail, MetodoPagamento, isValidEmail } from "./types.ts";
import { Prodotto } from "./Prodotto";

export class Cliente {
  constructor(
    public readonly nome: string,
    public readonly cognome: string,
    public readonly email: string,
    public readonly metodoPagamento: MetodoPagamento
  ) {
    const errors: string[] = [];

    if (!nome || nome.trim().length === 0) errors.push("Nome cliente non valido.");
    if (!cognome || cognome.trim().length === 0) errors.push("Cognome cliente non valido.");

    if (!email || email.trim().length === 0) {
      errors.push("Email cliente mancante.");
    } else if (!isValidEmail(email)) {
      errors.push("Email cliente non valida.");
    }

    const metodiAmmessi = Object.values(MetodoPagamento);
    if (!metodiAmmessi.includes(metodoPagamento)) {
      errors.push("Metodo di pagamento non ammesso.");
    }

    if (errors.length > 0) {
      throw new Error(errors.join(" "));
    }
  }

  public ordinaProdotto(prodotto: Prodotto): Result {
    // Il Cliente NON controlla lo stato: delega al prodotto (come richiesto da Giorgio).
    const result = prodotto.assegnaCliente();
    if (!result.success) {
      return fail(
        `Ordine fallito per ${this.nome} ${this.cognome}: ${result.message}`,
        result.errors
      );
    }
    return ok(`Ordine completato per ${this.nome} ${this.cognome}.`);
  }
}