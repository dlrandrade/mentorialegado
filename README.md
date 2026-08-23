# Mentoria Legado

Landing page da Mentoria para Psicólogos e Neuropsicólogos de
**Moisés Barbosa Oliveira** — Psicólogo, CRP 13/11227.

A página **não vende a Mentoria**. Ela vende o próximo passo do funil:

```
Página → Diagnóstico Profissional → Agendamento → Devolutiva → Oferta da Mentoria
```

Todo CTA da página aponta para o Diagnóstico Profissional.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Cormorant
Garamond + Inter (auto-hospedadas via `next/font`).

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Onde editar o quê

| O que                                         | Arquivo                                    |
| --------------------------------------------- | ------------------------------------------ |
| Nome, CRP, credenciais, links, URL do funil   | `src/lib/site.ts`                          |
| Perguntas frequentes (também alimenta o SEO)  | `src/lib/faq.ts`                           |
| Cores, tipografia, espaçamento                | `src/app/globals.css` (bloco `@theme`)     |
| Ordem das seções                              | `src/app/page.tsx`                         |
| Cada seção                                    | `src/components/sections/`                 |
| Fotografias                                   | `public/images/` (ver README de lá)        |

### Paleta

| Token          | Cor       | Uso                          |
| -------------- | --------- | ---------------------------- |
| `ivory`        | `#f6f3ed` | fundo principal (marfim)     |
| `paper`        | `#ffffff` | blocos alternados            |
| `petrol`       | `#0d3b3e` | cor institucional            |
| `petrol-deep`  | `#072a2d` | seções escuras e rodapé      |
| `graphite`     | `#14171a` | texto                        |
| `gold`         | `#a98a55` | detalhes, réguas, numeração  |
| `sand`         | `#e2dacc` | texto sobre fundo escuro     |

Usam-se como utilitários do Tailwind: `bg-petrol`, `text-sand/80`, `border-gold/30`.

## Estrutura da página

1. Hero — promessa, retrato e primeiro CTA
2. Um método construído a partir da prática
3. Identificação com a dor
4. O problema não é a Psicologia
5. O futuro desejado
6. A história e a origem da Travessia
7. Autoridade — Einstein, Harvard, clínica, ensino
8. Apresentação da Mentoria
9. Método TRAVESSIA em cinco etapas
10. O que está incluído
11. Estratégia individual, não fórmula pronta
12. Para quem é
13. Para quem não é
14. Provas e trajetória
15. Construindo a meta de R$ 30 mil
16. Diagnóstico Profissional
17. Perguntas frequentes
18. CTA final + rodapé

## Conformidade ética (CFP)

A página foi redigida observando as regras de publicidade profissional em
Psicologia. Ao editar textos, preservar:

- **Identificação profissional visível** — nome completo, "Psicólogo" e número do
  CRP aparecem no hero e no rodapé.
- **Sem previsão taxativa de resultado** — a meta de R$ 30 mil é apresentada como
  objetivo de trabalho e a seção de composição de receita traz selo de "exemplo
  ilustrativo" e nota de rodapé explícita.
- **Sem sensacionalismo** — sem contagem regressiva, desconto, ancoragem de
  preço, escassez artificial ou preço como propaganda.
- **Somente títulos efetivamente possuídos** — as credenciais ficam centralizadas
  em `src/lib/site.ts`.

## Pendências antes de publicar

- [ ] Subir as fotografias em `public/images/` (ver `public/images/README.md`)
- [ ] Substituir `public/brand/marca-legado.svg` e `src/app/icon.svg` pela marca
      oficial, caso a atual seja provisória
- [ ] Preencher `links.instagram` e `links.contactEmail` em `src/lib/site.ts`
      (enquanto vazios, os links simplesmente não aparecem no rodapé)
- [ ] Confirmar `site.url` com o domínio definitivo (afeta SEO, sitemap e Open Graph)
- [ ] Revisar Política de Privacidade e Termos de Uso com apoio jurídico
- [ ] Criar a imagem de Open Graph (`src/app/opengraph-image.png`, 1200 × 630)
- [ ] Substituir a seção "Provas" por depoimentos reais assim que houver
      mentorados — basta preencher o array `DEPOIMENTOS` em
      `src/components/sections/Proof.tsx`
