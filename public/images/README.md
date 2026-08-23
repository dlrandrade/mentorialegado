# Fotografias da página

As imagens são carregadas **pelo nome do arquivo**. Basta soltar cada foto nesta
pasta com o nome exato da tabela abaixo — nenhuma alteração de código é
necessária. Enquanto um arquivo não existir, a página exibe, no lugar dele, um
painel sóbrio com a marca (nunca uma imagem quebrada).

| Arquivo                             | Onde aparece                    | Proporção | Tamanho sugerido |
| ----------------------------------- | ------------------------------- | --------- | ---------------- |
| `moises-retrato.jpg`                | Topo da página (hero)           | 4:5       | 1200 × 1500 px   |
| `moises-einstein.jpg`               | Trajetória — Einstein           | 3:4       | 900 × 1200 px    |
| `moises-harvard.jpg`                | Trajetória — Harvard            | 3:4       | 900 × 1200 px    |
| `moises-consultorio.jpg`            | Trajetória — Clínica            | 3:4       | 900 × 1200 px    |
| `moises-sala-de-aula.jpg`           | Trajetória — Ensino             | 3:4       | 900 × 1200 px    |
| `moises-evento.jpg`                 | Trajetória — Eventos            | 3:4       | 900 × 1200 px    |
| `moises-ambiente-profissional.jpg`  | Trajetória — Empreendedorismo   | 3:4       | 900 × 1200 px    |

## Direção de arte

- **Retrato do topo:** terno ou blazer, postura natural, olhar para a câmera ou
  discretamente para o lado. Ambiente sofisticado, iluminação quente. Evitar
  sorriso excessivo — a leitura deve ser de seriedade e presença, não de
  entusiasmo comercial.
- **Galeria de trajetória:** entre 4 e 6 imagens realmente boas. Menos e melhor.
- **Enquadramento:** todas as fotos são recortadas com `object-cover` e
  centralizadas. Deixe respiro em volta do rosto para o corte não cortar mal.
- **Formato:** `.jpg` de boa qualidade (ou `.webp`, ajustando o nome nos
  componentes). Comprima antes de subir — mire abaixo de 300 KB por arquivo.

## Trocar um nome de arquivo

Os caminhos estão declarados em:

- `src/components/sections/Hero.tsx` — retrato do topo
- `src/components/sections/Authority.tsx` — array `GALERIA`
