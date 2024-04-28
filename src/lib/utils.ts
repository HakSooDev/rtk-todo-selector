import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomId(): string {
  // Current time in milliseconds, encoded in base36
  const timeComponent = new Date().getTime().toString(36);

  // Generate secure random values
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);

  // Convert the random values to a hexadecimal string
  const randomBytes = Array.from(array, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");

  // Custom string manipulation to intersperse time and random components
  let complexId = "";
  for (
    let i = 0, j = 0;
    i < randomBytes.length || j < timeComponent.length;
    i += 2, j += 1
  ) {
    complexId += randomBytes.slice(i, i + 2);
    if (j < timeComponent.length) {
      complexId += timeComponent.charAt(j);
    }
  }

  return complexId;
}
