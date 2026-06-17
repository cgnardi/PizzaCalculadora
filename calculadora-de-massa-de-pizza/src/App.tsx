import React, { useState, useMemo } from 'react';
import { PizzaInputs } from './types';
import { calculatePizzaDough } from './utils/calculator';
import ParametricPanel from './components/ParametricPanel';
import KitchenScale from './components/KitchenScale';
import { PizzaioloGustavo } from './components/Illustrations';

export default function App() {
  // Inicialização clássica voltada à icônica pizza Napoletana
  const [inputs, setInputs] = useState<PizzaInputs>({
    discos: 4,
    peso: 250,
    hidratacao: 62,
    usarAzeite: false,
    tempo: '2 Days',
  });

  // Cálculo preciso dos ingredientes em tempo real
  const outputs = useMemo(() => calculatePizzaDough(inputs), [inputs]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-16 text-[#1A120B]">
      {/* Linha Fina Superior com as Cores da Itália */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-[#386641]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#C1121F]"></div>
      </div>

      {/* Conteúdo Principal */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 space-y-6">
        
        {/* Banner do Pizzaiolo Gustavo */}
        <section className="bg-white rounded-2xl border border-slate-200/85 p-6 flex flex-col md:flex-row items-center gap-6 shadow-3xs overflow-hidden">
          <div className="w-full md:w-1/3 flex justify-center">
            <PizzaioloGustavo className="w-56 h-56 md:w-64 md:h-64" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef5f0] px-3.5 py-1 text-[10px] font-black text-[#386641] border border-[#386641]/10 uppercase tracking-widest font-mono">
              ★ Pizzaiolo Gustavo ★
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-black text-[#660708] leading-tight">
              A Fórmula de Ouro da Pizza Napoletana
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
              Ajuste suas proporções e o nosso sistema calculará os pesos perfeitos. Siga o balanço exato dos ingredientes para obter uma fermentação ideal e uma massa exuberante! 🍕
            </p>
          </div>
        </section>

        {/* Grade do Sistema de Engenharia (Controles & Balança lado a lado) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Coluna 1: Entrada de Parâmetros */}
          <section className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-3xs hover:border-[#f2a65a]/20 transition-all duration-300">
            <ParametricPanel inputs={inputs} setInputs={setInputs} />
          </section>

          {/* Coluna 2: A Balança Analítica */}
          <section className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-3xs hover:border-[#f2a65a]/20 transition-all duration-300">
            <KitchenScale inputs={inputs} outputs={outputs} />
          </section>

        </div>

      </main>
    </div>
  );
}
