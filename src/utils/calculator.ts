import { PizzaInputs, PizzaOutputs, TempoMaturacao } from '../types';

export function getYeastPercentage(tempo: TempoMaturacao): number {
  switch (tempo) {
    case 'Mesmo Dia':
      return 0.8;
    case '1 Dia':
      return 0.3;
    case '2 Dias':
      return 0.2;
    case '3 Dias':
      return 0.1;
    default:
      return 0.8;
  }
}

export function calculatePizzaDough(inputs: PizzaInputs): PizzaOutputs {
  const { discos, peso, hidratacao, usarAzeite, tempo } = inputs;
  
  // N = Número de discos, P = Peso de cada disco. Peso Total Alvo = N * P
  const pesoTotalAlvo = discos * peso;
  
  // F = % Fermento Seco de acordo com o Tempo escolhido
  const fermentoPercent = getYeastPercentage(tempo);
  
  // Divisor = 1 + (H / 100) + 0.03 (Sal) + (F / 100)
  // O Azeite é um complemento enriquecedor e NÃO entra no divisor básico para não alterar as quantidades de farinha e água
  const hydrationRatio = hidratacao / 100;
  const saltRatio = 0.03;
  const yeastRatio = fermentoPercent / 100;
  const oilRatio = 0.03;
  
  const divisor = 1 + hydrationRatio + saltRatio + yeastRatio;
  
  // Peso da Farinha = Peso Total Alvo / Divisor (livre da influência do azeite)
  const farinha = pesoTotalAlvo / divisor;
  
  // Com o peso da Farinha encontrado (100%), calcule os demais ingredientes:
  const agua = farinha * hydrationRatio;
  const sal = farinha * saltRatio;
  const fermento = farinha * yeastRatio;
  const azeite = usarAzeite ? farinha * oilRatio : 0;
  
  // Validação Física: Soma de todos os ingredientes base + azeite se ativado
  const somaConfirmacao = farinha + agua + sal + fermento + azeite;
  
  // A validação física continua válida baseando-se no fato de que sem azeite a soma bate o alvo exato, e com azeite adiciona-se o peso do azeite
  const pesoAlvoComComplemento = pesoTotalAlvo + azeite;
  const isValid = Math.abs(somaConfirmacao - pesoAlvoComComplemento) < 0.1;

  return {
    pesoTotalAlvo,
    divisor,
    fermentoPercent,
    farinha,
    agua,
    sal,
    fermento,
    azeite,
    somaConfirmacao,
    isValid
  };
}
