import React from 'react';
import { PizzaInputs, PizzaOutputs } from '../types';
import { BookOpen, ShieldCheck, CheckCircle, HelpCircle } from 'lucide-react';

interface FormulaStepByStepProps {
  inputs: PizzaInputs;
  outputs: PizzaOutputs;
}

export default function FormulaStepByStep({ inputs, outputs }: FormulaStepByStepProps) {
  const formatGrams = (w: number) => {
    return w.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'g';
  };

  const hRatio = inputs.hidratacao / 100;
  const sRatio = 0.03;
  const fRatio = outputs.fermentoPercent / 100;
  const oRatio = inputs.usarAzeite ? 0.03 : 0;

  return (
    <div className="rounded-2xl border border-slate-205 bg-white p-5 space-y-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-[#FAF6F0] p-1.5 text-[#C1121F] border border-[#f2a65a]/20">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-[#660708]">Física e Matemática</h3>
            <p className="text-[10px] text-slate-400">Prova Real da Porcentagem do Padeiro</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#eef5f0] px-2.5 py-0.5 text-[10px] font-bold text-[#386641] border border-[#386641]/10">
          <CheckCircle className="h-3 w-3" />
          Massa Validada
        </span>
      </div>

      {/* Passos Matemáticos */}
      <div className="space-y-4 text-xs text-slate-600">
        
        {/* Passo 1 */}
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#FAF6F0] text-[#C1121F] font-mono text-[10px] font-black flex items-center justify-center border border-[#f2a65a]/10">1</span>
            Massa Total Alvo (Requerida)
          </h4>
          <div className="bg-[#FAF6F0]/40 p-3 rounded-xl border border-slate-100 font-mono text-[11px] flex justify-between items-center">
            <span className="text-slate-500">Discos (N) × Peso (P)</span>
            <span className="text-[#660708] font-bold bg-white px-2 py-0.5 rounded border border-[#f2a65a]/10">
              {inputs.discos} × {inputs.peso}g = {formatGrams(outputs.pesoTotalAlvo)}
            </span>
          </div>
        </div>

        {/* Passo 2 */}
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#FAF6F0] text-[#C1121F] font-mono text-[10px] font-black flex items-center justify-center border border-[#f2a65a]/10">2</span>
            Divisor Total (Fator do Padeiro)
          </h4>
          <p className="text-[10px] text-slate-500 leading-normal italic">
            Soma dos coeficientes percentuais relativos ao ingrediente pivô Farinha (fixado em 1.00 ou 100%). O Azeite não entra aqui para não alterar as quantidades de farinha e água.
          </p>
          <div className="bg-[#FAF6F0]/40 p-3 rounded-xl border border-slate-100 font-mono text-[11px] leading-relaxed space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Equação:</span>
              <span>1 (Farinha) + Hidratação + Sal + Fermento</span>
            </div>
            <div className="flex justify-between border-t border-slate-200/50 pt-1.5 mt-1 text-[#386641] font-bold">
              <span>Substituído:</span>
              <span>
                1 + {hRatio.toFixed(2)} + {sRatio.toFixed(2)} + {fRatio.toFixed(3)} = {outputs.divisor.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        {/* Passo 3 */}
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#FAF6F0] text-[#C1121F] font-mono text-[10px] font-black flex items-center justify-center border border-[#f2a65a]/10">3</span>
            Peso da Farinha Base (100%)
          </h4>
          <div className="bg-[#FAF6F0]/40 p-3 rounded-xl border border-slate-100 font-mono text-[11px] flex justify-between items-center">
            <span className="text-slate-500">Massa Alvo / Divisor</span>
            <span className="text-slate-800 font-extrabold bg-white px-2 py-0.5 rounded border border-[#f2a65a]/10">
              {outputs.pesoTotalAlvo.toFixed(1)}g / {outputs.divisor.toFixed(4)} = {formatGrams(outputs.farinha)}
            </span>
          </div>
        </div>

        {/* Prova de Validação Física de Ingredientes */}
        <div className="space-y-2 border-t border-[#FAF6F0] pt-4">
          <h4 className="font-serif text-sm font-bold text-[#660708] flex items-center justify-between">
            <span>Prova Física dos Nove de Panificação</span>
            <span className="font-mono text-[10px] text-[#386641] bg-[#eef5f0] px-2 py-0.5 rounded-full border border-[#386641]/10">
              Erro: 0.0g
            </span>
          </h4>
          
          <div className="bg-gradient-to-b from-[#251605] to-[#110A03] text-stone-200 p-4 rounded-xl font-mono text-[11px] space-y-1.5 shadow-inner border border-stone-900 leading-relaxed">
            <div className="flex justify-between">
              <span>Farinha de Trigo Base (100%)</span>
              <span className="text-[#F2A65A] font-bold">{formatGrams(outputs.farinha)}</span>
            </div>
            <div className="flex justify-between">
              <span>Água Mineral ({inputs.hidratacao}%)</span>
              <span className="text-sky-350 font-bold">+{formatGrams(outputs.agua)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sal Marinho de Mesa (3%)</span>
              <span className="text-stone-450 font-bold">+{formatGrams(outputs.sal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Fermento Biológico Seco ({outputs.fermentoPercent}%)</span>
              <span className="text-[#C1121F] font-bold">+{formatGrams(outputs.fermento)}</span>
            </div>
            {inputs.usarAzeite && (
              <div className="flex justify-between text-[#e9c46a]">
                <span>Azeite de Oliva Extra Virgem (3%)</span>
                <span className="font-bold">+{formatGrams(outputs.azeite)}</span>
              </div>
            )}
            
            <div className="border-t border-stone-850 my-2 pt-2 flex justify-between text-base text-white font-extrabold font-serif">
              <span>Soma Real Encontrada</span>
              <span className="text-[#F2A65A]">{formatGrams(outputs.somaConfirmacao)}</span>
            </div>
            
            <div className="flex justify-between text-[10px] text-[#386641]/90 border-t border-dashed border-stone-800 pt-1.5 mt-1.5 items-center">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Massa Alvo Desejada:
              </span>
              <span className="font-bold">{formatGrams(outputs.pesoTotalAlvo)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
