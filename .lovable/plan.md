

## Plano: Portfólio para Consultor Financeiro — Cartas de Crédito

Vou transformar o template atual (portfólio de fotógrafo) em um site profissional para você, consultor financeiro especializado em **cartas de crédito** (consórcios) para diversos objetivos de vida.

### Estrutura do site

**1. Home (Início)**
- Hero impactante: "Realize seus sonhos com cartas de crédito inteligentes"
- Subtítulo apresentando você como consultor + CTA "Fale com um consultor"
- Faixa de logos/ícones das modalidades atendidas
- Seção "Por que carta de crédito?" (sem juros, parcelas acessíveis, planejamento)
- Depoimentos de clientes
- CTA final para contato via WhatsApp

**2. Modalidades** (página dedicada substituindo "Portfolio")
Grid visual com cada categoria, cada uma com página de detalhe explicando como funciona:
- Casa própria
- Carro
- Moto
- Barco
- Avião
- Construção
- Reforma
- Viagem
- Casamento
- Cirurgias e procedimentos
- Investimentos

Cada card terá ícone, imagem, descrição curta e botão "Simular".

**3. Sobre** (substitui About do fotógrafo)
- Sua história e experiência como consultor
- Valores: transparência, planejamento, atendimento personalizado
- Diferenciais do seu trabalho
- Espaço para foto profissional

**4. Como Funciona**
Passo-a-passo em 4 etapas: Consulta gratuita → Análise do perfil → Escolha da carta ideal → Acompanhamento.

**5. Contato**
- Formulário (nome, email, telefone, modalidade de interesse, mensagem)
- Botão WhatsApp em destaque
- Email e telefone
- Horário de atendimento

### Identidade visual

- **Paleta:** azul-marinho profundo + dourado/champagne (transmite confiança financeira e sofisticação) sobre fundo claro elegante
- **Tipografia:** serifa moderna para títulos (autoridade) + sans-serif limpa para texto
- **Estilo:** minimalista, espaçoso, com fotografias aspiracionais (casa dos sonhos, carro novo, viagens) como pano de fundo das seções

### Conteúdo placeholder
Vou usar textos profissionais em português (BR) prontos para você ajustar com seus dados reais (nome, telefone, CRECI/registro se houver, depoimentos verdadeiros, etc.).

### Detalhes técnicos

- Corrigir o erro de build em `src/components/ui/expand-on-hover.tsx` removendo os imports inexistentes do `swiper/css` (componente não usa Swiper de fato)
- Reescrever páginas em `src/pages/` (Home, Portfolio→Modalidades, About, Contact, ProjectDetail→ModalidadeDetalhe)
- Atualizar `src/data/projects.ts` para `src/data/modalidades.ts` com as 11 modalidades
- Atualizar `src/types/index.ts` para refletir o novo modelo (Modalidade ao invés de Project)
- Ajustar header/footer em `src/components/layout/` com nova navegação e marca
- Atualizar tokens de cor em `src/index.css` e `tailwind.config.ts` para a nova paleta
- Formulário de contato funcional no front-end (validação); envio real pode ser conectado a Lovable Cloud em uma etapa futura se desejar

### Antes de começar — duas perguntas rápidas

Pra eu personalizar de verdade:

1. **Nome / marca** que você quer exibir no site (seu nome pessoal ou da empresa)?
2. **WhatsApp / telefone e e-mail** de contato pra eu já deixar configurados (pode ser placeholder se preferir e você troca depois)?

Pode responder no chat após aprovar o plano que eu já começo com as informações.

