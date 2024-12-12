export interface CepData {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const fetchCepData = async (cep: string): Promise<CepData | null> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar o CEP:', error);
    return null;
  }
};
