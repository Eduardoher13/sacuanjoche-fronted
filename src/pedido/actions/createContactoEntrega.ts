import { floristeriaApi } from '@/shared/api/FloristeriaApi';

export interface ContactoEntrega {
  idContactoEntrega?: number;
  nombre: string;
  apellido: string;
  telefono: string | null;
}

export interface CreateContactoEntregaDto {
  nombre: string;
  apellido: string;
  telefono: string | null;
}

export const createContactoEntrega = async (
  data: CreateContactoEntregaDto
): Promise<ContactoEntrega> => {
  try {
    const response = await floristeriaApi.post<ContactoEntrega>('/contacto-entrega', data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

