import React from 'react';
import { PizzaInputs, PizzaOutputs } from '../types';
import { 
  IllusFarinha, 
  IllusAgua, 
  IllusSal, 
  IllusFermento, 
  IllusAzeite 
} from './Illustrations';

interface KitchenScaleProps {
  inputs: PizzaInputs;
  outputs: PizzaOutputs;
}

const illustrationMap: Record<string, React.ReactNode> = {
  farinha: <IllusFarinha width={34} height={34} />,
  agua: <IllusAgua width={34} height={34} />,
  sal: <IllusSal width={34} height={34} />,
  fermento: <IllusFermento width={34} height={34} />,
  azeite: <IllusAzeite width={34} height={34} />,
};

export default function KitchenScale({ inputs, outputs }: KitchenScaleProps) {
  const formatGrams = (weight: number) => {
    return weight.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'g';
  };

  const ingredients = [
    {
      id: 'farinha',
      name: 'Farinha',
      weight: outputs.farinha,
      percentage: 100,
      color: 'bg-[#F2A65A]', // Dourado
    },
    {
      id: 'agua',
      name: 'Água',
      weight: outputs.agua,
      percentage: inputs.hidratacao,
      color: 'bg-sky-450', // Água
    },
    {
      id: 'sal',
      name: 'Sal Marinho',
      weight: outputs.sal,
      percentage: 3,
      color: 'bg-slate-300',
    },
    {
      id: 'fermento',
      name: 'Fermento Biológico Seco',
      weight: outputs.fermento,
      percentage: outputs.fermentoPercent,
      color: 'bg-[#C1121F]', // Vermelho
    },
    ...(inputs.usarAzeite
      ? [
          {
            id: 'azeite',
            name: 'Azeite',
            weight: outputs.azeite,
            percentage: 3,
            color: 'bg-[#386641]', // Verde
          },
        ]
      : []),
  ];

  return (
    <div className="space-y-5">
      {/* Balança Digital Italiana */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#660708] to-[#1A120B] p-6 text-white shadow-xl italic-border-top">
        {/* Decorative Flag Corner */}
        <div className="absolute right-0 top-0 w-24 h-24 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5px] right-[-35px] w-[110px] h-[34px] rotate-45 flex shadow-md">
            <div className="flex-1 bg-[#386641]"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-[#C1121F]"></div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
        
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-sm:items-center max-sm:text-center">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#F2A65A]">
                <span className="h-2 w-2 rounded-full bg-[#386641] animate-pulse"></span>
                Cálculo de Proporção • Peso Líquido
              </div>
            </div>
          </div>

          {/* Visor LCD Digital */}
          <div className="bg-[#0f172a] px-5 py-3 rounded-xl border-2 border-[#FAF6F0]/25 text-center sm:text-right font-mono flex flex-col justify-center min-w-[185px] shadow-inner max-sm:items-center">
            <span className="text-[9px] text-[#A6A29F] block uppercase tracking-wider text-center sm:text-right">Massa Total Pronta</span>
            <span className="text-3xl font-black text-[#F2A65A] tracking-tighter text-center sm:text-right">
              {formatGrams(outputs.pesoTotalAlvo)}
            </span>
          </div>
        </div>
      </div>

      {/* Lista de Ingredientes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 max-sm:justify-center">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
            Pesos Calculados
          </h3>
        </div>

        <div className="space-y-2">
          {ingredients.map((ing) => {
            return (
              <div
                key={ing.id}
                className="relative overflow-hidden rounded-xl border p-3 bg-white border-slate-200/80 hover:border-[#f2a65a]/30 transition-all duration-200 shadow-3xs"
              >
                {/* Visual Accent from the ingredient color */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100">
                  <div
                    className={`h-full ${ing.color} transition-all duration-300`}
                    style={{ height: '100%' }}
                  ></div>
                </div>

                <div className="pl-2 space-y-2.5 sm:space-y-0 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  {/* Info + Icon Row: on mobile icon is on the right, on desktop it is on the left */}
                  <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                    <div className="flex flex-col items-start text-left">
                      <span className="text-sm font-bold text-slate-800">
                        {ing.name}
                      </span>
                      <span className="font-mono text-[9px] text-slate-400 font-semibold uppercase">
                        Proporção: {ing.percentage}%
                      </span>
                    </div>
                    <div className="shrink-0 bg-slate-50/70 p-1 rounded-lg border border-slate-150 shadow-3xs sm:order-first">
                      {illustrationMap[ing.id]}
                    </div>
                  </div>

                  {/* Weight Value underneath on mobile, to the right on desktop */}
                  <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-slate-800 bg-[#FAF6F0] px-3 py-1 rounded-lg border border-slate-200/60 shadow-3xs text-center w-full sm:w-auto">
                      {formatGrams(ing.weight)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
