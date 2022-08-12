export function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return undefined;
}

export const isDef = val => val !== undefined && val !== null && val !== "";

export const isNumeric = val => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
