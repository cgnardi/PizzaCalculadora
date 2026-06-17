export type TempoMaturacao = 'Mesmo Dia' | '1 Dia' | '2 Dias' | '3 Dias';

export interface PizzaInputs {
  discos: number;
  peso: number;
  hidratacao: number;
  usarAzeite: boolean;
  tempo: TempoMaturacao;
}

export interface PizzaOutputs {
  pesoTotalAlvo: number;
  divisor: number;
  fermentoPercent: number;
  farinha: number;
  agua: number;
  sal: number;
  fermento: number;
  azeite: number;
  somaConfirmacao: number;
  isValid: boolean;
}

export interface PizzaPreset {
  id: string;
  name: string;
  description: string;
  hidratacao: number;
  usarAzeite: boolean;
  tempo: TempoMaturacao;
  origin: string;
}
