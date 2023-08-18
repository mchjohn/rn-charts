import axios from 'axios';

const baseUrl = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata';

export const api = axios.create({
  baseURL: baseUrl
});
