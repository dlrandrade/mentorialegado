import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como os dados pessoais coletados no site da Mentoria Legado e no Diagnóstico Profissional são tratados, de acordo com a LGPD.",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  const { professional, links } = site;
  const contato = links.contactEmail || "o canal de contato informado no rodapé do site";

  return (
    <LegalPage title="Política de Privacidade" updatedAt="agosto de 2026">
      <p>
        Esta Política de Privacidade descreve como as informações pessoais são coletadas,
        utilizadas e protegidas neste site e no Diagnóstico Profissional, em conformidade com a
        Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).
      </p>

      <section>
        <h2>1. Quem é o responsável pelo tratamento</h2>
        <p>
          O responsável pelo tratamento dos dados pessoais coletados neste site é{" "}
          <strong>{professional.fullName}</strong>, {professional.title.toLowerCase()} inscrito no{" "}
          <strong>{professional.crp}</strong>. Solicitações relacionadas a esta política podem ser
          encaminhadas por meio de {contato}.
        </p>
      </section>

      <section>
        <h2>2. Quais dados são coletados</h2>
        <p>Coletamos apenas os dados necessários para as finalidades descritas nesta política:</p>
        <ul>
          <li>
            <strong>Dados fornecidos por você</strong> ao responder ao Diagnóstico Profissional,
            como nome, e-mail, telefone, cidade, formação, área de atuação e informações sobre o
            momento da sua carreira profissional.
          </li>
          <li>
            <strong>Dados de navegação</strong>, como endereço IP, tipo de dispositivo, navegador,
            páginas visitadas e origem do acesso, coletados por meio de cookies e ferramentas de
            medição.
          </li>
        </ul>
        <p>
          O Diagnóstico Profissional não solicita dados de pacientes, informações clínicas de
          terceiros ou qualquer conteúdo protegido por sigilo profissional. Pedimos que esse tipo
          de informação não seja inserido nos formulários.
        </p>
      </section>

      <section>
        <h2>3. Para que os dados são utilizados</h2>
        <ul>
          <li>Analisar as respostas do Diagnóstico Profissional e elaborar a devolutiva.</li>
          <li>Entrar em contato para agendar conversas e responder solicitações.</li>
          <li>
            Enviar comunicações sobre a Mentoria e conteúdos relacionados, quando houver
            consentimento para tanto.
          </li>
          <li>Medir o desempenho do site e aprimorar a experiência de navegação.</li>
          <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
        </ul>
      </section>

      <section>
        <h2>4. Base legal</h2>
        <p>
          O tratamento se fundamenta, conforme o caso, no consentimento do titular (art. 7º, I),
          na execução de procedimentos preliminares relacionados a contrato do qual o titular é
          parte (art. 7º, V) e no legítimo interesse (art. 7º, IX), sempre respeitados os direitos
          e liberdades fundamentais do titular.
        </p>
      </section>

      <section>
        <h2>5. Compartilhamento</h2>
        <p>
          Os dados não são vendidos nem cedidos a terceiros para fins publicitários. Podem ser
          compartilhados apenas com prestadores de serviço que viabilizam a operação do site e do
          diagnóstico — hospedagem, formulários, e-mail e ferramentas de análise — e sempre
          limitados ao necessário para a prestação desses serviços, ou quando houver obrigação
          legal ou ordem de autoridade competente.
        </p>
      </section>

      <section>
        <h2>6. Armazenamento e segurança</h2>
        <p>
          Os dados são armazenados em ambientes com controles técnicos e administrativos
          destinados a protegê-los contra acesso não autorizado, perda, alteração ou divulgação
          indevida. São mantidos pelo período necessário ao cumprimento das finalidades descritas
          ou das obrigações legais aplicáveis, e eliminados após esse prazo.
        </p>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          Este site pode utilizar cookies próprios e de terceiros para funcionamento, medição de
          audiência e mensuração de campanhas. Você pode configurar seu navegador para bloquear ou
          alertar sobre cookies, ciente de que algumas funcionalidades podem ser afetadas.
        </p>
      </section>

      <section>
        <h2>8. Seus direitos</h2>
        <p>
          Nos termos do art. 18 da LGPD, você pode solicitar a confirmação da existência de
          tratamento, o acesso, a correção, a anonimização, o bloqueio, a eliminação, a
          portabilidade dos seus dados, informações sobre compartilhamento e a revogação do
          consentimento a qualquer momento. Para exercer esses direitos, entre em contato por meio
          de {contato}.
        </p>
      </section>

      <section>
        <h2>9. Sigilo profissional</h2>
        <p>
          O tratamento de dados descrito nesta política refere-se exclusivamente à relação de
          mentoria profissional. Eventuais atendimentos clínicos observam regras próprias de
          sigilo previstas no Código de Ética Profissional do Psicólogo e na legislação aplicável.
        </p>
      </section>

      <section>
        <h2>10. Alterações desta política</h2>
        <p>
          Esta política pode ser atualizada a qualquer momento. A versão vigente é sempre a
          publicada nesta página, com a respectiva data de atualização.
        </p>
      </section>
    </LegalPage>
  );
}
