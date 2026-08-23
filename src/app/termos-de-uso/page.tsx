import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site da Mentoria Legado, do Diagnóstico Profissional e das informações nele publicadas.",
  robots: { index: true, follow: true },
};

export default function TermosDeUso() {
  const { professional } = site;

  return (
    <LegalPage title="Termos de Uso" updatedAt="agosto de 2026">
      <p>
        Ao acessar este site e utilizar o Diagnóstico Profissional, você concorda com as condições
        descritas abaixo. Caso não concorde, pedimos que não utilize os serviços aqui oferecidos.
      </p>

      <section>
        <h2>1. Identificação</h2>
        <p>
          Este site é mantido por <strong>{professional.fullName}</strong>,{" "}
          {professional.title.toLowerCase()} inscrito no <strong>{professional.crp}</strong>, e
          destina-se à divulgação de serviço de mentoria profissional dirigido a psicólogos e
          neuropsicólogos.
        </p>
      </section>

      <section>
        <h2>2. Natureza do serviço</h2>
        <p>
          A Mentoria é um serviço de <strong>orientação e desenvolvimento profissional</strong>,
          voltado a posicionamento, precificação, captação e gestão de carreira.
        </p>
        <p>
          A Mentoria <strong>não constitui atendimento psicológico, psicoterapia, avaliação
          psicológica, supervisão clínica, consultoria jurídica, contábil ou de investimentos</strong>.
          Nenhum conteúdo deste site substitui acompanhamento profissional individualizado nessas
          áreas.
        </p>
      </section>

      <section>
        <h2>3. Ausência de garantia de resultado</h2>
        <p>
          As informações publicadas neste site, incluindo exemplos de composição de receita, têm
          caráter <strong>ilustrativo e educacional</strong>. Não constituem promessa, garantia ou
          previsão de resultado financeiro.
        </p>
        <p>
          Os resultados de cada profissional dependem de fatores próprios do seu contexto — região,
          público, mercado, formação, estrutura, tempo disponível e, principalmente, do grau de
          implementação das estratégias trabalhadas. A execução do plano é responsabilidade do
          mentorado.
        </p>
      </section>

      <section>
        <h2>4. Diagnóstico Profissional</h2>
        <p>
          O Diagnóstico Profissional é gratuito e não gera obrigação de contratação para nenhuma
          das partes. O preenchimento não garante vaga na Mentoria: a continuidade do processo
          depende de análise das informações prestadas e da adequação do perfil ao serviço.
        </p>
        <p>
          Você se compromete a fornecer informações verdadeiras e a não inserir dados de pacientes
          ou qualquer informação protegida por sigilo profissional.
        </p>
      </section>

      <section>
        <h2>5. Contratação da Mentoria</h2>
        <p>
          Valores, formato, duração, cronograma e demais condições da Mentoria são apresentados
          individualmente após a devolutiva do diagnóstico e formalizados em contrato próprio, que
          prevalece sobre qualquer informação divulgada neste site.
        </p>
      </section>

      <section>
        <h2>6. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo deste site — textos, marcas, identidade visual, fotografias, materiais e
          a estrutura do Método TRAVESSIA — é protegido por direitos autorais e de propriedade
          intelectual. É vedada a reprodução, distribuição, comercialização ou criação de obras
          derivadas sem autorização prévia e por escrito.
        </p>
        <p>
          Os materiais entregues durante a Mentoria são de uso pessoal e intransferível do
          mentorado.
        </p>
      </section>

      <section>
        <h2>7. Conduta ética</h2>
        <p>
          As atividades divulgadas neste site observam o Código de Ética Profissional do Psicólogo
          e as resoluções do Conselho Federal de Psicologia aplicáveis à publicidade profissional,
          incluindo a identificação do profissional, a vedação à previsão taxativa de resultados e
          à divulgação sensacionalista.
        </p>
      </section>

      <section>
        <h2>8. Links externos</h2>
        <p>
          Este site pode conter links para páginas de terceiros. Não nos responsabilizamos pelo
          conteúdo, pelas práticas de privacidade ou pela disponibilidade desses endereços.
        </p>
      </section>

      <section>
        <h2>9. Disponibilidade</h2>
        <p>
          Empregamos esforços razoáveis para manter o site disponível e atualizado, mas não
          garantimos funcionamento ininterrupto ou livre de falhas. O conteúdo pode ser alterado ou
          removido a qualquer momento.
        </p>
      </section>

      <section>
        <h2>10. Alterações e foro</h2>
        <p>
          Estes Termos podem ser atualizados a qualquer momento, valendo a versão publicada nesta
          página. Aplica-se a legislação brasileira, elegendo-se o foro do domicílio do consumidor
          para dirimir eventuais controvérsias.
        </p>
      </section>
    </LegalPage>
  );
}
