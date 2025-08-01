"use client"

import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs = [
    {
      question: "Qual plano escolher?",
      answer: "Recomendamos começar com o plano WhatsApp+Agentes, nosso mais popular. Ele oferece funcionários de IA ilimitados e todas as integrações essenciais. Você pode fazer upgrade a qualquer momento."
    },
    {
      question: "Como funciona o consumo de créditos?",
      answer: "Cada interação com seus funcionários de IA consome créditos baseado na complexidade da tarefa. Planos maiores incluem mais créditos mensais e melhores taxas por interação."
    },
    {
      question: "Quais as formas de pagamento disponíveis? Posso pagar por PIX?",
      answer: "Aceitamos cartão de crédito, débito, boleto bancário e PIX. Para pagamentos via PIX, oferecemos 5% de desconto no plano anual."
    },
    {
      question: "Os funcionários de IA funcionam no Whatsapp?",
      answer: "Sim! Nossos funcionários de IA se integram nativamente com WhatsApp, WhatsApp Business e Evolution API. A configuração é simples e leva menos de 5 minutos."
    },
    {
      question: "Como acessar o Programa de Aceleração?",
      answer: "O Programa de Aceleração é 100% gratuito para todos os clientes ativos. Após assinar qualquer plano, você recebe acesso imediato ao conteúdo e trilhas de aprendizado."
    },
    {
      question: "Posso ter mais de um funcionário de IA na mesma conta?",
      answer: "Sim! Nos planos WhatsApp+Agentes e Multicanal, você pode criar funcionários de IA ilimitados, cada um especializado em diferentes funções da sua empresa."
    },
    {
      question: "Os Agentes Integrados tem opção de Whitelabel?",
      answer: "Sim, oferecemos solução whitelabel completa para agências e revendedores. Entre em contato com nosso time comercial para conhecer as opções disponíveis."
    },
    {
      question: "Posso transferir meu plano da conta agência para uma conta cliente?",
      answer: "Sim, a transferência é simples e pode ser feita diretamente no painel. Todos os dados, configurações e histórico são mantidos na transferência."
    },
    {
      question: "Qual a diferença entre conta agência e conta cliente?",
      answer: "Contas agência permitem gerenciar múltiplos clientes em um único painel, com faturamento centralizado. Contas cliente são individuais, ideais para uso próprio da empresa."
    },
    {
      question: "Preciso esperar até o final do meu teste para assinar um plano pago?",
      answer: "Não. Você pode selecionar um plano e inserir informações de cobrança a qualquer momento durante o teste. O período restante do teste é convertido em créditos."
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">• FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Você tem perguntas?<br />
            Nós temos as respostas.
          </h2>
          <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all transform hover:scale-105">
            💬 Converse com nossa equipe pelo WhatsApp
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`
                  transform transition-transform duration-300
                  ${openIndex === index ? 'rotate-180' : ''}
                `}>
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Answer */}
              <div className={`
                transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}