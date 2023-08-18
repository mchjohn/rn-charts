import { api } from './api';



interface GetDollarPeriodProps {
  initialDate: string;
  finalDate: string;
}

function parseUrl({ initialDate, finalDate }: GetDollarPeriodProps): string {
  const url = `/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${initialDate}'&@dataFinalCotacao='${finalDate}'&$top=100&$format=json`;

  return url;
}

export async function getDollarPeriod({ initialDate, finalDate }: GetDollarPeriodProps) {
  const response = await api.get(parseUrl({initialDate, finalDate}));

  return response.data;
}
