import React, { useState } from 'react';
import { PizzaInputs, PizzaOutputs } from '../types';
import { Code, Terminal, Copy, Check, Info } from 'lucide-react';

interface DeveloperApiSandboxProps {
  inputs: PizzaInputs;
  outputs: PizzaOutputs;
}

export default function DeveloperApiSandbox({ inputs, outputs }: DeveloperApiSandboxProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('response');

  const requestJson = {
    metodo: "POST",
    endpoint_calculo: "/api/massa/calcular",
    cabecalhos: {
      "Content-Type": "application/json"
    },
    corpo_requisicao: {
      discos: inputs.discos,
      peso_por_disco_g: inputs.peso,
      hidratacao_percent: inputs.hidratacao,
      usar_azeite: inputs.usarAzeite,
      tempo_maturacao: inputs.tempo
    }
  };

  const responseJson = {
    status: "sucesso",
    carimbo_data_hora: new Date().toISOString(),
    configuracao: {
      checksum_entradas: `${inputs.discos}x${inputs.peso}g@${inputs.hidratacao}%`,
      regras_estritas_panificacao: {
        farinha_base_percent: 100,
        fator_sal_percent: 3.0,
        fator_fermento_percent: outputs.fermentoPercent,
        fator_azeite_percent: inputs.usarAzeite ? 3.0 : 0.0
      }
    },
    motor_calculo: {
      peso_massa_total_alvo_g: outputs.pesoTotalAlvo,
      divisor_sistema_baker_factor: parseFloat(outputs.divisor.toFixed(4)),
      ingredientes_balanca_g: {
        farinha_trigo_forte: parseFloat(outputs.farinha.toFixed(2)),
        agua_mineral_gelada: parseFloat(outputs.agua.toFixed(2)),
        sal_marinho_fino: parseFloat(outputs.sal.toFixed(2)),
        fermento_biologico_seco: parseFloat(outputs.fermento.toFixed(2)),
        ...(inputs.usarAzeite ? { azeite_oliva_extra_virgem: parseFloat(outputs.azeite.toFixed(2)) } : {})
      },
      validacao_fisica: {
        soma_total_materiais_g: parseFloat(outputs.somaConfirmacao.toFixed(2)),
        diferenca_precisao_g: parseFloat((outputs.somaConfirmacao - outputs.pesoTotalAlvo).toFixed(6)),
        validacao_estrita_aprovada: outputs.isValid
      }
    }
  };

  const copyToClipboard = () => {
    const textToCopy = activeTab === 'request' 
      ? JSON.stringify(requestJson, null, 2) 
      : JSON.stringify(responseJson, null, 2);
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-205 bg-white p-5 space-y-4 relative overflow-hidden">
      {/* Italian ribbon decorative spacer */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#386641]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#C1121F]"></div>
      </div>

      <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-3 pt-1">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-slate-900 p-1.5 text-slate-100">
            <Terminal className="h-4 w-4 text-[#F2A65A]" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-800">Console de Desenvolvedor</h3>
            <p className="text-[10px] text-slate-400">Representação em tempo real do Payload JSON</p>
          </div>
        </div>

        {/* Botão de Copiar */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 bg-[#C1121F] text-white hover:bg-[#660708] border-none px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-3xs"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-300" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copiar JSON</span>
            </>
          )}
        </button>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('request')}
          className={`flex-1 py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'request'
              ? 'bg-slate-900 text-white shadow-3xs'
              : 'text-slate-500 hover:text-slate-855'
          }`}
        >
          Requisição (Request Input)
        </button>
        <button
          onClick={() => setActiveTab('response')}
          className={`flex-1 py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'response'
              ? 'bg-slate-900 text-white shadow-3xs'
              : 'text-slate-500 hover:text-slate-855'
          }`}
        >
          Resposta (Response Output)
        </button>
      </div>

      {/* Visualizador de Código */}
      <div className="relative rounded-xl bg-slate-900 p-4 font-mono text-xs text-emerald-400/90 leading-relaxed max-h-[300px] overflow-y-auto shadow-inner border border-slate-950">
        <pre className="whitespace-pre-wrap break-all">
          {activeTab === 'request' 
            ? JSON.stringify(requestJson, null, 2) 
            : JSON.stringify(responseJson, null, 2)}
        </pre>
      </div>

      {/* Roda de Notas */}
      <div className="flex gap-2.5 bg-[#FAF6F0] p-3 rounded-lg border border-[#f2a65a]/15">
        <Info className="h-4 w-4 text-[#C1121F] shrink-0 mt-0.5" />
        <p className="text-[10px] text-slate-600 leading-normal font-sans italic">
          <strong>Arquitetura Integradora:</strong> O motor de cálculo utiliza os dados exatos do pivô da massa de trigo sem aproximações empíricas grosseiras. O output é ideal para integração em sistemas legados ou ERPs automotivos de cozinhas comerciais e pizzarias de delivery.
        </p>
      </div>
    </div>
  );
}
