// ==========================================
// 🔹 DADOS DA APLICAÇÃO
// ==========================================

const ferramentasIA = [
    { id: 1, nome: "ChatGPT (OpenAI)", descricao: "Modelo de linguagem para conversas, textos, explicações e resolução de dúvidas." },
    { id: 2, nome: "Gemini (Google)", descricao: "Modelo multimodal — trabalha com texto, imagens, áudio e vídeos de forma integrada." },
    { id: 3, nome: "Claude (Anthropic)", descricao: "Focado em análise de documentos longos e segurança nas respostas." },
    { id: 4, nome: "DALL-E", descricao: "Cria imagens realistas e ilustrações a partir de descrições em texto." },
    { id: 5, nome: "Midjourney", descricao: "Ferramenta especializada em geração de imagens com estilo artístico." },
    { id: 6, nome: "Copilot (Microsoft)", descricao: "Assistente integrado a aplicativos como Word, Excel e navegadores." },
    { id: 7, nome: "IA de edição e áudio", descricao: "Ferramentas como ElevenLabs (voz), Canva e Photoshop Generative Fill (edição de imagem)." }
];

const usosIA = [
    { id: 1, uso: "Criação e revisão de textos, relatórios e conteúdos" },
    { id: 2, uso: "Respostas a perguntas e explicações sobre diversos assuntos" },
    { id: 3, uso: "Apoio na programação e desenvolvimento de sistemas" },
    { id: 4, uso: "Criação de imagens, artes visuais e conceitos criativos" },
    { id: 5, uso: "Resumos de documentos longos e organização de informações" },
    { id: 6, uso: "Tradução entre idiomas com agilidade" }
];

const beneficiosIA = [
    { id: 1, beneficio: "Aumento de produtividade em tarefas repetitivas" },
    { id: 2, beneficio: "Apoio à criatividade e geração de ideias" },
    { id: 3, beneficio: "Acesso rápido a informações e explicações" },
    { id: 4, beneficio: "Suporte ao aprendizado em diferentes áreas" },
    { id: 5, beneficio: "Redução de barreiras para quem está começando em um assunto" }
];

const riscosIA = [
    { id: 1, risco: "Informações falsas ou inventadas — mesmo que pareçam verdadeiras" },
    { id: 2, risco: "Reprodução de vieses e preconceitos presentes nos dados de treinamento" },
    { id: 3, risco: "Dependência excessiva — deixar de pensar por conta própria" },
    { id: 4, risco: "Riscos à privacidade ao compartilhar dados pessoais" },
    { id: 5, risco: "Dificuldade em distinguir conteúdo real de conteúdo gerado" },
    { id: 6, risco: "Uso inadequado para enganar ou prejudicar pessoas" }
];

const perguntasQuiz = [
    {
        id: 1,
        pergunta: "O que a IA Generativa faz?",
        alternativas: [
            "Pensa e tem consciência",
            "Cria conteúdo a partir de padrões aprendidos",
            "Sabe tudo e nunca erra",
            "Substitui completamente o ser humano"
        ],
        correta: 1,
        explicacao: "A IA gera conteúdo com base em padrões que aprendeu. Ela não pensa nem tem consciência."
    },
    {
        id: 2,
        pergunta: "Qual é uma limitação importante da IA?",
        alternativas: [
            "Sempre diz a verdade absoluta",
            "Nunca se engana",
            "Pode apresentar informações incorretas como verdadeiras",
            "Possui todas as respostas do mundo"
        ],
        correta: 2,
        explicacao: "A IA pode inventar informações. Sempre verifique as respostas."
    },
    {
        id: 3,
        pergunta: "Como devemos tratar os dados pessoais ao usar IA?",
        alternativas: [
            "Compartilhar tudo, sem preocupação",
            "Nunca compartilhar informações sensíveis ou confidenciais",
            "Enviar senhas e documentos para treinar a IA",
            "Usar dados de outras pessoas sem permissão"
        ],
        correta: 1,
        explicacao: "Proteja suas informações. Dados enviados podem ser armazenados e usados de formas que você não controla."
    },
    {
        id: 4,
        pergunta: "Sobre como a IA aprende, é correto dizer:",
        alternativas: [
            "Ela compreende o significado de tudo",
            "Ela memoriza e repete exatamente",
            "Ela identifica padrões estatísticos em grandes volumes de dados",
            "Não precisa de dados para funcionar"
        ],
        correta: 2,
        explicacao: "A IA não entende — ela reconhece padrões estatísticos aprendidos a partir de dados."
    },
    {
        id: 5,
        pergunta: "Qual é a melhor forma de usar a IA Generativa?",
        alternativas: [
            "Confiar cegamente em tudo que ela diz",
            "Usar sem nunca conferir",
            "Como ferramenta de apoio, sempre verificando as informações",
            "Copiar respostas e apresentar como se fosse sua sem entender"
        ],
        correta: 2,
        explicacao: "A IA é uma ferramenta. Você continua sendo responsável pelo que produz e compartilha."
    },
    {
        id: 6,
        pergunta: "Em qual ordem correta acontece o processo de treinamento de uma IA?",
        alternativas: [
            "Coleta de dados → Identificação de padrões → Treinamento → Uso (Inferência)",
            "Uso → Coleta de dados → Treinamento → Padrões",
            "Treinamento → Uso → Coleta de dados → Padrões",
            "Coleta → Uso → Padrões → Treinamento"
        ],
        correta: 0,
        explicacao: "Primeiro coleta-se os dados, depois o modelo identifica padrões, passa pelo treinamento e só então está pronto para ser utilizado."
    },
    {
        id: 7,
        pergunta: "O que significa 'inferência' no contexto da IA?",
        alternativas: [
            "O processo de coletar dados para treinamento",
            "Quando o modelo já está treinado e gera respostas para novas entradas",
            "Corrigindo erros durante o treinamento",
            "Apagando dados antigos do modelo"
        ],
        correta: 1,
        explicacao: "Inferência é quando o modelo já está treinado e pronto para usar os padrões aprendidos em novas perguntas."
    },
    {
        id: 8,
        pergunta: "Qual destas ferramentas é mais focada na geração de IMAGENS a partir de texto?",
        alternativas: [
            "ChatGPT",
            "Claude",
            "DALL-E",
            "Gemini (texto)"
        ],
        correta: 2,
        explicacao: "DALL-E e Midjourney são ferramentas especializadas na criação de imagens a partir de descrições."
    },
    {
        id: 9,
        pergunta: "Qual é uma característica correta sobre como a IA 'aprende'?",
        alternativas: [
            "Ela compreende o significado real das coisas",
            "Quanto menos dados usados no treinamento, melhor",
            "Ela reconhece padrões estatísticos, sem compreender o significado",
            "O conhecimento da IA não muda após o treinamento"
        ],
        correta: 2,
        explicacao: "A IA não entende o que significa — ela apenas reconhece padrões estatísticos nos dados com que foi treinada."
    },
    {
        id: 10,
        pergunta: "Sobre as ferramentas de IA disponíveis ao público, é correto afirmar:",
        alternativas: [
            "Todas fazem exatamente a mesma coisa",
            "Não é preciso ter cuidado ao enviar dados pessoais para nenhuma delas",
            "Cada ferramenta tem finalidades e políticas de privacidade diferentes",
            "São todas pagas e nenhuma tem versão gratuita"
        ],
        correta: 2,
        explicacao: "Cada ferramenta foi criada com um propósito diferente e tem suas próprias regras de privacidade. Sempre confira antes de usar!"
    }
];

// 🤖 Base de Conhecimento — Assistente IA
const baseConhecimento = [
    {
        palavras: ["o que é", "definição", "conceito", "ia generativa"],
        resposta: "A IA Generativa é uma tecnologia capaz de criar conteúdos novos — textos, imagens, áudios e códigos — a partir de instruções. Ela não pensa nem entende: reconhece padrões em grandes volumes de dados e gera respostas com base nesses padrões."
    },
    {
        palavras: ["como aprende", "treinamento", "como funciona", "aprende"],
        resposta: "O aprendizado da IA acontece em 4 etapas: 📚 1) Coleta de dados — muitos textos, imagens e conteúdos; 🔍 2) Identificação de padrões — o modelo aprende relações entre as informações; ⚙️ 3) Treinamento — ajustes e correções repetidos milhões de vezes; 🎯 4) Inferência — quando o modelo está pronto e responde suas perguntas. Importante: ela não entende o significado, só reconhece padrões estatísticos!"
    },
    {
        palavras: ["ferramentas", "quais", "exemplos", "disponiveis"],
        resposta: "Algumas ferramentas disponíveis ao público: 📝 ChatGPT — textos e explicações; 🖼️ DALL-E e Midjourney — imagens; 🔍 Gemini — multimodal; 📄 Claude — análise de documentos; 💻 Copilot — auxílio em programas. Cada uma tem finalidades e políticas de privacidade diferentes — sempre confira antes de usar!"
    },
    {
        palavras: ["beneficios", "vantagens", "bom"],
        resposta: "✅ Principais benefícios: Aumenta produtividade em tarefas repetitivas, apoia a criatividade, dá acesso rápido a informações, ajuda no aprendizado e reduz barreiras para quem está começando em um assunto."
    },
    {
        palavras: ["riscos", "perigos", "problemas", "cuidado"],
        resposta: "⚠️ Cuidados importantes: A IA pode inventar informações — sempre verifique! Pode reproduzir preconceitos dos dados de treinamento. Evite depender demais dela. Nunca compartilhe dados pessoais confidenciais. Fique atento a conteúdos falsos gerados por IA."
    },
    {
        palavras: ["segurança", "privacidade", "dados", "usar bem"],
        resposta: "🔒 Boas práticas: Sempre confira as informações. Não envie senhas, documentos ou dados pessoais. Respeite direitos autorais. Use como apoio, não como verdade absoluta. Você é sempre responsável pelo que compartilha."
    },
    {
        palavras: ["prompt", "como pedir", "escrever bem", "bom prompt"],
        resposta: "💡 Para melhores resultados: Seja específico — diga o que quer, o formato e o tom. Dê contexto. Peça para explicar de forma simples. Revise e refine seu pedido. Quanto mais claro, melhor o resultado!"
    },
    {
        palavras: ["inferencia", "o que é inferencia"],
        resposta: "🎯 Inferência é quando o modelo JÁ FOI TREINADO e está pronto para uso. É quando você faz uma pergunta e ele usa os padrões aprendidos para gerar uma resposta nova."
    },
    {
        palavras: ["vieses", "preconceito", "neutra"],
        resposta: "⚠️ A IA NÃO é neutra! Ela reproduz o que aprendeu nos dados. Se os dados contêm preconceitos, a IA vai reproduzi-los. Por isso é importante sempre avaliar criticamente as respostas."
    },
    {
        palavras: ["ajuda", "oi", "olá", "ola", "quem é você"],
        resposta: "Olá! 👋 Sou seu assistente de estudos sobre IA Generativa. Você pode me perguntar sobre: o que é IA, como ela aprende, ferramentas disponíveis, benefícios, riscos, segurança e boas práticas de uso. Estou aqui para te guiar!"
    }
];

const respostaPadrao = "Desculpe, ainda não sei responder a essa pergunta 😅 Tente perguntar sobre: o que é IA, como ela aprende, ferramentas disponíveis, benefícios, riscos, segurança ou boas práticas de uso.";

// Estado da aplicação
let indiceAtual = 0;
let pontuacao = 0;

// ==========================================
// 🔹 FUNÇÃO: Trocar de Seção
// ==========================================
function trocarSecao(nomeSecao) {
    document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('ativo'));
    
    document.getElementById(nomeSecao).classList.add('ativa');
    document.querySelector(`[data-secao="${nomeSecao}"]`).classList.add('ativo');
    
    if (nomeSecao === 'usos') carregarUsos();
    if (nomeSecao === 'beneficios') carregarBeneficios();
    if (nomeSecao === 'riscos') carregarRiscos();
    if (nomeSecao === 'ferramentas') carregarFerramentas();
    if (nomeSecao === 'assistente') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (nomeSecao === 'quiz') iniciarQuiz();
}

// ==========================================
// 🔹 FUNÇÕES: Preencher Listas
// ==========================================
function carregarFerramentas() {
    const lista = document.getElementById('lista-ferramentas');
    lista.innerHTML = '';
    ferramentasIA.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = '<strong>' + item.nome + ':</strong> ' + item.descricao;
        lista.appendChild(li);
    });
}

function carregarUsos() {
    const lista = document.getElementById('lista-usos');
    lista.innerHTML = '';
    usosIA.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.uso;
        lista.appendChild(li);
    });
}

function carregarBeneficios() {
    const lista = document.getElementById('lista-beneficios');
    lista.innerHTML = '';
    beneficiosIA.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.beneficio;
        lista.appendChild(li);
    });
}

function carregarRiscos() {
    const lista = document.getElementById('lista-riscos');
    lista.innerHTML = '';
    riscosIA.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.risco;
        lista.appendChild(li);
    });
}

// ==========================================
// 🔹 FUNÇÃO: Mostrar/Esconder Detalhes
// ==========================================
function configurarBotaoDetalhes() {
    const btn = document.getElementById('btn-conceito');
    const caixa = document.getElementById('detalhes-conceito');
    
    btn.addEventListener('click', function() {
        caixa.classList.toggle('visivel');
        if (caixa.classList.contains('visivel')) {
            btn.textContent = 'Ocultar detalhes';
        } else {
            btn.textContent = 'Ver mais detalhes';
        }
    });
}

// ==========================================
// 🔹 FUNÇÕES: Quiz
// ==========================================
function iniciarQuiz() {
    indiceAtual = 0;
    pontuacao = 0;
    document.getElementById('acertos').textContent = '0';
    document.getElementById('total').textContent = perguntasQuiz.length;
    mostrarPergunta();
}

function mostrarPergunta() {
    const perguntaAtual = perguntasQuiz[indiceAtual];
    const container = document.getElementById('pergunta-container');
    const botoesDiv = document.getElementById('botoes-respostas');
    const feedback = document.getElementById('feedback');
    
    feedback.textContent = '';
    feedback.className = '';
    botoesDiv.innerHTML = '';
    
    container.innerHTML = '<h3>Pergunta ' + (indiceAtual + 1) + ' de ' + perguntasQuiz.length + '</h3><p>' + perguntaAtual.pergunta + '</p>';
    
    perguntaAtual.alternativas.forEach(function(texto, indice) {
        const btn = document.createElement('button');
        btn.textContent = (indice + 1) + '. ' + texto;
        btn.className = 'btn-resposta';
        btn.addEventListener('click', function() {
            verificarResposta(indice);
        });
        botoesDiv.appendChild(btn);
    });
    
    document.getElementById('proxima').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';
}

function verificarResposta(indiceEscolhido) {
    const perguntaAtual = perguntasQuiz[indiceAtual];
    const feedback = document.getElementById('feedback');
    
    const todosBotoes = document.querySelectorAll('.btn-resposta');
    todosBotoes.forEach(function(b) {
        b.disabled = true;
    });
    
    if (indiceEscolhido === perguntaAtual.correta) {
        todosBotoes[indiceEscolhido].classList.add('correta');
        feedback.textContent = '✅ Correto! ' + perguntaAtual.explicacao;
        feedback.className = 'feedback-correto';
        pontuacao++;
        document.getElementById('acertos').textContent = pontuacao;
    } else {
        todosBotoes[indiceEscolhido].classList.add('errada');
        todosBotoes[perguntaAtual.correta].classList.add('correta');
        feedback.textContent = '❌ Errado. ' + perguntaAtual.explicacao;
        feedback.className = 'feedback-errado';
    }
    
    if (indiceAtual < perguntasQuiz.length - 1) {
        document.getElementById('proxima').style.display = 'inline-block';
    } else {
        setTimeout(function() {
            feedback.textContent = '🏆 Quiz concluído! Você acertou ' + pontuacao + ' de ' + perguntasQuiz.length + ' perguntas.';
            document.getElementById('proxima').style.display = 'none';
            document.getElementById('reiniciar').style.display = 'inline-block';
        }, 1500);
    }
}

// ==========================================
// 🤖 ASSISTENTE IA — Funções
// ==========================================
function encontrarResposta(pergunta) {
    const texto = pergunta.toLowerCase();
    for (let i = 0; i < baseConhecimento.length; i++) {
        const item = baseConhecimento[i];
        const encontrou = item.palavras.some(function(palavra) {
            return texto.includes(palavra);
        });
        if (encontrou) return item.resposta;
    }
    return respostaPadrao;
}

function adicionarMensagem(texto, tipo) {
    const container = document.getElementById('chat-mensagens');
    const div = document.createElement('div');
    div.className = 'mensagem ' + tipo;
    div.textContent = texto;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function processarPergunta() {
    const input = document.getElementById('pergunta-usuario');
    const pergunta = input.value.trim();
    
    if (!pergunta) return;
    
    adicionarMensagem(pergunta, 'usuario');
    input.value = '';
    
    setTimeout(function() {
        const resposta = encontrarResposta(pergunta);
        adicionarMensagem(resposta, 'ia');
    }, 600);
}

// ==========================================
// 🔹 INICIALIZAÇÃO — Eventos da página
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Botões de navegação
    document.querySelectorAll('.nav-btn').forEach(function(botao) {
        botao.addEventListener('click', function() {
            const nomeSecao = botao.getAttribute('data-secao');
            trocarSecao(nomeSecao);
        });
    });
    
    configurarBotaoDetalhes();
    
    // Botões do Quiz
    document.getElementById('proxima').addEventListener('click', function() {
        indiceAtual++;
        mostrarPergunta();
    });
    
    document.getElementById('reiniciar').addEventListener('click', iniciarQuiz);
    
    // Eventos do Assistente IA
    document.getElementById('btn-enviar').addEventListener('click', processarPergunta);
    document.getElementById('pergunta-usuario').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') processarPergunta();
    });
    
    // Seção inicial ativa
    document.querySelector('[data-secao="conceito"]').classList.add('ativo');
});

