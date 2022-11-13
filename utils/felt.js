import BN from "bn.js";

export function hexToFelt(number) {
  return new BN(number.slice(2), 16).toString(10);
}
