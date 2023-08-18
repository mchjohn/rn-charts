export function formatDate(inputDate: string) {
  const dateParts = inputDate.split(/[- :.]/); // Divide a data em partes usando separadores

  const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0].slice(-2)}`;

  return formattedDate;
}
