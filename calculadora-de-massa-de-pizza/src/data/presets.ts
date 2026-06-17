import { PizzaPreset } from '../types';

export const PIZZA_PRESETS: PizzaPreset[] = [
  {
    id: 'napoletana',
    name: 'Napoletana Tradicional',
    description: 'A joia da Campânia. Massa extremamente leve, com bordas altas, infladas e alvéolos pretos ("leopardatura"). Assada em forno a lenha ultrarrápido.',
    hidratacao: 62,
    usarAzeite: false,
    tempo: '2 Dias',
    origin: 'Nápoles, Itália 🇮🇹'
  },
  {
    id: 'new_york',
    name: 'Estilo New York',
    description: 'Grandes fatias flexíveis e crocantes. O azeite é fundamental para reter umidade em fornos domésticos comuns, deixando a massa maleável e dourada.',
    hidratacao: 65,
    usarAzeite: true,
    tempo: '2 Dias',
    origin: 'Nova Iorque, EUA 🇺🇸'
  },
  {
    id: 'pinsa_romana',
    name: 'Pinsa Romana',
    description: 'Uma verdadeira nuvem artesanal. Leveza extrema e altíssima digestibilidade devido à altíssima hidratação (80%) e longa maturação de até 3 dias na geladeira.',
    hidratacao: 80,
    usarAzeite: true,
    tempo: '3 Dias',
    origin: 'Roma, Itália 🇮🇹'
  },
  {
    id: 'pan_sicilian',
    name: 'Siciliana / Sfincione',
    description: 'Tradicional "pan pizza", assada em forma retangular generously untada com azeite de oliva. Miolo macio, fofo e base crocante e frita.',
    hidratacao: 70,
    usarAzeite: true,
    tempo: '1 Dia',
    origin: 'Sicília, Itália 🇮🇹'
  },
  {
    id: 'same_day_quick',
    name: 'Caseira de Fermentação Rápida',
    description: 'Para quando a fome não pode esperar. Feita e assada no mesmo dia através de uma fermentação rápida à temperatura ambiente de 4 a 6 horas.',
    hidratacao: 60,
    usarAzeite: false,
    tempo: 'Mesmo Dia',
    origin: 'Prática & Rápida ⚡'
  }
];
