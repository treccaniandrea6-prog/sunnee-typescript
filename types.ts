export type Result<T = undefined> =
  | { success: true; message: string; data?: T }
  | { success: false; message: string; errors?: string[] };

export const ok = <T = undefined>(message: string, data?: T): Result<T> => ({
  success: true,
  message,
  data,
});

export const fail = <T = undefined>(message: string, errors?: string[]): Result<T> => ({
  success: false,
  message,
  errors,
});

export enum StatoProdotto {
  DISPONIBILE = "DISPONIBILE",
  ESAURITO = "ESAURITO",
}

export enum Taglia {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export enum MetodoPagamento {
  CARTA = "CARTA",
  PAYPAL = "PAYPAL",
  BONIFICO = "BONIFICO",
}

export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);