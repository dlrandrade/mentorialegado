# Fotografias da página

As imagens são carregadas **pelo nome do arquivo**. Basta substituir um arquivo
por outro com o mesmo nome — nenhuma alteração de código é necessária. Enquanto
um arquivo não existir, a página exibe, no lugar dele, um painel sóbrio com a
marca (nunca uma imagem quebrada).

Todas já estão em uso, selecionadas e recortadas a partir do material enviado
(orientação EXIF aplicada, redimensionadas e comprimidas para a web).

| Arquivo                            | Onde aparece                     | Proporção | Foto de origem                                       |
| ----------------------------------- | --------------------------------- | --------- | ----------------------------------------------------- |
| `moises-retrato.jpg`                | Topo da página (hero)             | 4:5       | busto, blazer bege                                     |
| `moises-einstein.jpg`               | Trajetória — Einstein             | 3:4       | fachada do Hospital Israelita Albert Einstein          |
| `moises-harvard.jpg`                | Trajetória — Harvard              | 3:4       | jaleco com brasão da Harvard T.H. Chan                 |
| `moises-consultorio.jpg`            | Trajetória — Clínica              | 3:4       | sentado, consultório                                   |
| `moises-sala-de-aula.jpg`           | Trajetória — Ensino               | 3:4       | fachada da Harvard T.H. Chan School of Public Health   |
| `moises-evento.jpg`                 | Trajetória — Eventos              | 3:4       | varanda, blazer bege                                   |
| `moises-ambiente-profissional.jpg`  | Trajetória — Empreendedorismo     | 3:4       | de pé, braços cruzados                                 |
| `moises-sombra.jpg`                 | Fundo atmosférico do Diagnóstico  | livre     | busto em contraluz, dramático                          |

O ponto focal de cada foto (para o recorte automático) é ajustado por uma prop
`focal` (`object-position`) passada ao componente `Photo` em `Hero.tsx` e
`Authority.tsx` — ajuste ali se um recorte cortar mal um rosto.

## Direção de arte

- **Retrato do topo:** terno ou blazer, postura natural, olhar para a câmera ou
  discretamente para o lado. Ambiente sofisticado, iluminação quente. Evitar
  sorriso excessivo — a leitura deve ser de seriedade e presença, não de
  entusiasmo comercial.
- **Galeria de trajetória:** entre 4 e 6 imagens realmente boas. Menos e melhor.
- **Enquadramento:** todas as fotos são recortadas com `object-cover` e
  um `object-position` ajustável via prop `focal`. Deixe respiro em volta do
  rosto para o corte não cortar mal.
- **Formato:** `.jpg` de boa qualidade (ou `.webp`, ajustando o nome nos
  componentes). Comprima antes de subir — mire abaixo de 300 KB por arquivo.

## Trocar uma fotografia

Os caminhos e o ponto focal de cada imagem estão declarados em:

- `src/components/sections/Hero.tsx` — retrato do topo
- `src/components/sections/Authority.tsx` — array `GALERIA`
- `src/components/sections/Diagnostic.tsx` — fundo atmosférico (`moises-sombra.jpg`)
