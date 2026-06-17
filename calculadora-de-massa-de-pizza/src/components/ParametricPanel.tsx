import React from 'react';
import { PizzaInputs, TempoMaturacao } from '../types';
import { 
  IllusDiscos, 
  IllusPeso, 
  IllusHidratacao, 
  IllusAzeitePanel, 
  IllusTempo 
} from './Illustrations';

interface ParametricPanelProps {
  inputs: PizzaInputs;
  setInputs: React.Dispatch<React.SetStateAction<PizzaInputs>>;
}

export default function ParametricPanel({ inputs, setInputs }: ParametricPanelProps) {
  const handleChange = (field: keyof PizzaInputs, value: any) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const incrementDiscos = () => {
    handleChange('discos', Math.min(100, inputs.discos + 1));
  };

  const decrementDiscos = () => {
    handleChange('discos', Math.max(1, inputs.discos - 1));
  };

  const incrementPeso = (step = 10) => {
    handleChange('peso', Math.min(1000, inputs.peso + step));
  };

  const decrementPeso = (step = 10) => {
    handleChange('peso', Math.max(50, inputs.peso - step));
  };

  const incrementHidratacao = () => {
    handleChange('hidratacao', Math.min(100, inputs.hidratacao + 1));
  };

  const decrementHidratacao = () => {
    handleChange('hidratacao', Math.max(45, inputs.hidratacao - 1));
  };

  const tempos: { label: string; value: TempoMaturacao }[] = [
    { label: 'Mesmo Dia', value: 'Mesmo Dia' },
    { label: '1 Dia', value: '1 Dia' },
    { label: '2 Dias', value: '2 Dias' },
    { label: '3 Dias', value: '3 Dias' },
  ];

  return (
    <div className="space-y-5 relative overflow-hidden">
      {/* Decoração da bandeira italiana no topo da caixinha */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#386641]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#C1121F]"></div>
      </div>

      <div className="flex items-center justify-center border-b border-[#F7EBE1] pb-3 pt-2">
        <h2 className="font-serif text-xl font-bold text-[#660708] text-center">Parâmetros Ajustáveis</h2>
      </div>

      {/* 1. Quantidade de Discos / Bolas */}
      <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all hover:bg-white hover:border-[#f2a65a]/25 shadow-3xs">
        <div className="flex-1 w-full space-y-2">
          {/* Header row: Label + mobile-only Icon */}
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 text-left">
              Quantidade de Discos
            </span>
            <div className="sm:hidden block shrink-0 bg-white/40 p-1 rounded-lg border border-slate-100 shadow-3xs">
              <IllusDiscos width={48} height={30} />
            </div>
          </div>
          
          {/* Row 2: Selected Value */}
          <div className="flex justify-center sm:justify-start w-full">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#386641] bg-[#eef5f0] border border-[#386641]/10 px-2.5 py-0.5 rounded-lg shadow-3xs text-center">
              {inputs.discos} {inputs.discos === 1 ? 'disco' : 'discos'}
            </span>
          </div>

          {/* Row 3: Control Bar */}
          <div className="flex items-center gap-2.5 w-full">
            <button
              type="button"
              onClick={decrementDiscos}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              -
            </button>
            <input
              type="range"
              min="1"
              max="100"
              value={inputs.discos}
              onChange={(e) => handleChange('discos', parseInt(e.target.value, 10) || 1)}
              className="h-1.5 w-full cursor-pointer accent-[#C1121F] rounded-lg bg-slate-200"
            />
            <button
              type="button"
              onClick={incrementDiscos}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Large desktop-only Icon */}
        <div className="hidden sm:block shrink-0 bg-white/40 p-1.5 rounded-lg border border-slate-100 shadow-3xs">
          <IllusDiscos width={80} height={50} />
        </div>
      </div>

      {/* 2. Peso de Cada Bola / Disco */}
      <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all hover:bg-white hover:border-[#f2a65a]/25 shadow-3xs">
        <div className="flex-1 w-full space-y-2">
          {/* Header row: Label + mobile-only Icon */}
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 text-left">
              Peso da Bola
            </span>
            <div className="sm:hidden block shrink-0 bg-white/40 p-1 rounded-lg border border-slate-100 shadow-3xs">
              <IllusPeso width={48} height={30} />
            </div>
          </div>

          {/* Row 2: Selected Value */}
          <div className="flex justify-center sm:justify-start w-full">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#C1121F] bg-[#fdf0d5] border border-[#C1121F]/10 px-2.5 py-0.5 rounded-lg shadow-3xs text-center">
              {inputs.peso}g
            </span>
          </div>

          {/* Row 3: Control Bar */}
          <div className="flex items-center gap-2.5 w-full">
            <button
              type="button"
              onClick={() => decrementPeso(10)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              -
            </button>
            <input
              type="range"
              min="50"
              max="1000"
              step="5"
              value={inputs.peso}
              onChange={(e) => handleChange('peso', parseInt(e.target.value, 10) || 50)}
              className="h-1.5 w-full cursor-pointer accent-[#C1121F] rounded-lg bg-slate-200"
            />
            <button
              type="button"
              onClick={() => incrementPeso(10)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Large desktop-only Icon */}
        <div className="hidden sm:block shrink-0 bg-white/40 p-1.5 rounded-lg border border-slate-100 shadow-3xs">
          <IllusPeso width={80} height={50} />
        </div>
      </div>

      {/* 3. Porcentagem de Hidratação */}
      <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all hover:bg-white hover:border-[#f2a65a]/25 shadow-3xs">
        <div className="flex-1 w-full space-y-2">
          {/* Header row: Label + mobile-only Icon */}
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 text-left">
              Taxa de Hidratação
            </span>
            <div className="sm:hidden block shrink-0 bg-white/40 p-1 rounded-lg border border-slate-100 shadow-3xs">
              <IllusHidratacao width={48} height={30} />
            </div>
          </div>

          {/* Row 2: Selected Value */}
          <div className="flex justify-center sm:justify-start w-full">
            <span className="font-mono text-xs sm:text-sm font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-lg shadow-3xs text-center">
              {inputs.hidratacao}%
            </span>
          </div>

          {/* Row 3: Control Bar */}
          <div className="flex items-center gap-2.5 w-full">
            <button
              type="button"
              onClick={decrementHidratacao}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              -
            </button>
            <input
              type="range"
              min="45"
              max="100"
              value={inputs.hidratacao}
              onChange={(e) => handleChange('hidratacao', parseInt(e.target.value, 10) || 45)}
              className="h-1.5 w-full cursor-pointer accent-[#386641] rounded-lg bg-slate-200"
            />
            <button
              type="button"
              onClick={incrementHidratacao}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-[#FAF6F0] hover:border-[#F2A65A]/40 active:bg-slate-100 transition-colors cursor-pointer shadow-3xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Large desktop-only Icon */}
        <div className="hidden sm:block shrink-0 bg-white/40 p-1.5 rounded-lg border border-slate-100 shadow-3xs">
          <IllusHidratacao width={80} height={50} />
        </div>
      </div>

      {/* 4. Usar Azeite de Oliva Extra Virgem? */}
      <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all hover:bg-white hover:border-[#f2a65a]/25 shadow-3xs">
        <div className="flex-1 w-full space-y-2">
          {/* Header row: Label + mobile-only Icon */}
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 text-left">
              Gostaria de usar azeite?
            </span>
            <div className="sm:hidden block shrink-0 bg-white/40 p-1 rounded-lg border border-slate-100 shadow-3xs">
              <IllusAzeitePanel width={48} height={30} />
            </div>
          </div>

          {/* Row 2: Selected Value */}
          <div className="flex justify-center sm:justify-start w-full">
            <span className={`font-mono text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-lg shadow-3xs text-center border ${
              inputs.usarAzeite
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-slate-500 bg-slate-100 border-slate-200'
            }`}>
              {inputs.usarAzeite ? 'Sim, adicionar azeite' : 'Não usar azeite'}
            </span>
          </div>

          {/* Row 3: Selector toggle bar */}
          <div className="flex items-center bg-white p-1 rounded-lg border border-[#f2a65a]/15 shadow-3xs max-w-[200px] max-sm:mx-auto w-full sm:w-[200px]">
            <button
              type="button"
              onClick={() => handleChange('usarAzeite', true)}
              className={`flex-1 py-1 text-xs font-bold rounded-md transition-all cursor-pointer text-center ${
                inputs.usarAzeite
                  ? 'bg-[#386641] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => handleChange('usarAzeite', false)}
              className={`flex-1 py-1 text-xs font-bold rounded-md transition-all cursor-pointer text-center ${
                !inputs.usarAzeite
                  ? 'bg-slate-200 text-slate-700'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Não
            </button>
          </div>
        </div>

        {/* Large desktop-only Icon */}
        <div className="hidden sm:block shrink-0 bg-white/40 p-1.5 rounded-lg border border-slate-100 shadow-3xs">
          <IllusAzeitePanel width={80} height={50} />
        </div>
      </div>

      {/* 5. Tempo de Fermentação & Maturação */}
      <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all hover:bg-white hover:border-[#f2a65a]/25 shadow-3xs">
        <div className="flex-1 w-full space-y-2">
          {/* Header row: Label + mobile-only Icon */}
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 text-left">
              Tempo de Fermentação
            </span>
            <div className="sm:hidden block shrink-0 bg-white/40 p-1 rounded-lg border border-slate-100 shadow-3xs">
              <IllusTempo width={48} height={30} />
            </div>
          </div>

          {/* Row 2: Selected Value */}
          <div className="flex justify-center sm:justify-start w-full">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#386641] bg-[#eef5f0] border border-[#386641]/10 px-2.5 py-0.5 rounded-lg shadow-3xs text-center">
              {tempos.find(t => t.value === inputs.tempo)?.label || inputs.tempo}
            </span>
          </div>

          {/* Row 3: Grid of options */}
          <div className="grid grid-cols-2 gap-1.5 w-full">
            {tempos.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => handleChange('tempo', t.value)}
                className={`p-2 rounded-lg border text-[11px] transition-all cursor-pointer flex items-center justify-center h-9 ${
                  inputs.tempo === t.value
                    ? 'border-[#386641] bg-[#eef5f0] text-[#386641] ring-1 ring-[#386641]/30 font-bold'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-350 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large desktop-only Icon */}
        <div className="hidden sm:block shrink-0 bg-white/40 p-1.5 rounded-lg border border-slate-100 shadow-3xs">
          <IllusTempo width={80} height={50} />
        </div>
      </div>
    </div>
  );
}
