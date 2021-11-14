import { api } from './api';

export const fetcher = (url: string): Promise<any> => {
  return api.get(url).then(res => res.data);
}