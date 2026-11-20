import { pedidoApi } from '../api/pedidoApi';

export const deletePedido = async (id: number): Promise<void> => {
  await pedidoApi.delete(`/${id}`);
};
