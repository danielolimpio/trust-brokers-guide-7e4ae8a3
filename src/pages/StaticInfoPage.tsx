import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

type StaticPageKey =
  | "team"
  | "methodology"
  | "careers"
  | "press"
  | "privacy"
  | "terms"
  | "cookies"
  | "disclaimer"
  | "risk-warning";

type Lang = "en" | "pt" | "es";

type PageContent = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  keywords: string[];
  lastUpdated?: string;
  sections: { title: string; body?: string; list?: string[] }[];
};

type PageBundle = Record<Lang, PageContent>;

const lastUpdatedLabel: Record<Lang, string> = {
  en: "Last updated: January 2026",
  pt: "Última atualização: Janeiro de 2026",
  es: "Última actualización: Enero de 2026",
};

// ---------- PRIVACY ----------
const privacy: PageBundle = {
  en: {
    title: "Privacy Policy - BrokerTrusted | Data Protection 2026",
    description:
      "BrokerTrusted privacy policy: how we collect, use, store, and protect personal data, cookies, analytics, and your rights under GDPR, LGPD and CCPA.",
    heading: "Privacy Policy",
    intro:
      "BrokerTrusted (\"we\", \"us\") respects your privacy. This Privacy Policy explains in detail what personal data we collect, why we collect it, how we use and protect it, with whom we share it, and the rights you have under GDPR (EU), LGPD (Brazil), CCPA (California) and other applicable data protection laws.",
    keywords: ["privacy policy", "data protection", "GDPR", "LGPD", "CCPA", "BrokerTrusted privacy"],
    lastUpdated: lastUpdatedLabel.en,
    sections: [
      {
        title: "1. Data Controller",
        body: "BrokerTrusted operates this website as data controller. For any privacy request you may contact us through our Contact page. We respond to verified privacy requests within 30 days.",
      },
      {
        title: "2. Information We Collect",
        body: "We collect only the minimum data needed to operate the site and improve our broker reviews:",
        list: [
          "Technical data: IP address, browser type, device, operating system, language, referrer URL.",
          "Usage data: pages visited, time on page, clicks, scroll depth, search terms used inside the site.",
          "Contact data: name and email when you voluntarily fill in a contact or newsletter form.",
          "Cookies and similar technologies (see Cookie Policy).",
          "We do NOT collect financial data, trading account credentials, or government IDs.",
        ],
      },
      {
        title: "3. Legal Basis for Processing (GDPR / LGPD)",
        list: [
          "Legitimate interest: to operate, secure and improve the website and broker reviews.",
          "Consent: for non-essential cookies, analytics and marketing communications.",
          "Legal obligation: to comply with tax, accounting and regulatory requirements.",
        ],
      },
      {
        title: "4. How We Use Your Data",
        list: [
          "Deliver, maintain and secure the website.",
          "Measure traffic and content performance via Google Analytics 4.",
          "Respond to your contact requests and editorial enquiries.",
          "Detect and prevent fraud, abuse and security incidents.",
          "Comply with legal obligations.",
        ],
      },
      {
        title: "5. Sharing With Third Parties",
        body: "We share data only with vetted processors strictly required to operate the service:",
        list: [
          "Google Analytics (traffic measurement).",
          "Hosting and CDN providers.",
          "Email and form-processing providers.",
          "Authorities when legally required.",
          "We never sell personal data.",
        ],
      },
      {
        title: "6. International Data Transfers",
        body: "Some processors are located outside the EU/Brazil. When data is transferred internationally, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission and equivalent safeguards required by the LGPD.",
      },
      {
        title: "7. Data Retention",
        list: [
          "Analytics data: up to 14 months.",
          "Contact form messages: up to 24 months after the last interaction.",
          "Newsletter data: until you unsubscribe.",
          "Server logs: up to 12 months for security purposes.",
        ],
      },
      {
        title: "8. Your Rights",
        body: "Subject to applicable law you may exercise the following rights free of charge:",
        list: [
          "Access, rectify or delete your personal data.",
          "Restrict or object to processing.",
          "Data portability.",
          "Withdraw consent at any time.",
          "Lodge a complaint with your local data protection authority (ANPD in Brazil, ICO in the UK, CNIL in France, AEPD in Spain, etc.).",
        ],
      },
      {
        title: "9. Children",
        body: "BrokerTrusted is not intended for minors under 18. We do not knowingly collect data from children. If you believe a minor has provided data, contact us so we can delete it.",
      },
      {
        title: "10. Security Measures",
        body: "We apply HTTPS encryption, access controls, hardened hosting, logging and periodic reviews. No system is 100% secure; however we follow industry best practices to protect your data.",
      },
      {
        title: "11. Changes to this Policy",
        body: "We may update this Privacy Policy to reflect legal, technical or operational changes. Material changes will be highlighted on this page with a new \"last updated\" date.",
      },
    ],
  },
  pt: {
    title: "Política de Privacidade - BrokerTrusted | Proteção de Dados 2026",
    description:
      "Política de privacidade da BrokerTrusted: como coletamos, usamos, armazenamos e protegemos dados pessoais, cookies, analytics e seus direitos sob LGPD, GDPR e CCPA.",
    heading: "Política de Privacidade",
    intro:
      "A BrokerTrusted (\"nós\") respeita a sua privacidade. Esta Política de Privacidade explica em detalhe quais dados pessoais coletamos, por que coletamos, como usamos e protegemos, com quem compartilhamos e quais são seus direitos sob a LGPD (Brasil), GDPR (UE), CCPA (Califórnia) e demais leis de proteção de dados aplicáveis.",
    keywords: ["política de privacidade", "proteção de dados", "LGPD", "GDPR", "privacidade BrokerTrusted"],
    lastUpdated: lastUpdatedLabel.pt,
    sections: [
      {
        title: "1. Controlador dos Dados",
        body: "A BrokerTrusted opera este site na qualidade de controlador de dados. Para qualquer solicitação relacionada à privacidade, entre em contato pela página de Contato. Respondemos solicitações verificadas em até 30 dias.",
      },
      {
        title: "2. Informações que Coletamos",
        body: "Coletamos apenas o mínimo necessário para operar o site e melhorar nossas análises de corretoras:",
        list: [
          "Dados técnicos: endereço IP, tipo de navegador, dispositivo, sistema operacional, idioma e URL de origem.",
          "Dados de uso: páginas visitadas, tempo na página, cliques, rolagem e termos buscados no site.",
          "Dados de contato: nome e e-mail quando você preenche voluntariamente um formulário.",
          "Cookies e tecnologias similares (ver Política de Cookies).",
          "NÃO coletamos dados financeiros, credenciais de conta de trading ou documentos oficiais.",
        ],
      },
      {
        title: "3. Bases Legais (LGPD / GDPR)",
        list: [
          "Legítimo interesse: operar, proteger e aprimorar o site e as análises.",
          "Consentimento: cookies não essenciais, analytics e comunicações de marketing.",
          "Obrigação legal: cumprimento de obrigações fiscais, contábeis e regulatórias.",
        ],
      },
      {
        title: "4. Como Usamos seus Dados",
        list: [
          "Entregar, manter e proteger o site.",
          "Medir tráfego e desempenho do conteúdo via Google Analytics 4.",
          "Responder a contatos e solicitações editoriais.",
          "Detectar e prevenir fraudes, abusos e incidentes de segurança.",
          "Cumprir obrigações legais.",
        ],
      },
      {
        title: "5. Compartilhamento com Terceiros",
        body: "Compartilhamos dados apenas com operadores estritamente necessários:",
        list: [
          "Google Analytics (medição de tráfego).",
          "Hospedagem e CDN.",
          "Provedores de e-mail e formulários.",
          "Autoridades, quando legalmente exigido.",
          "Nunca vendemos dados pessoais.",
        ],
      },
      {
        title: "6. Transferências Internacionais",
        body: "Alguns operadores estão fora do Brasil/UE. Nessas transferências utilizamos Cláusulas Contratuais Padrão aprovadas pela Comissão Europeia e salvaguardas equivalentes exigidas pela LGPD.",
      },
      {
        title: "7. Retenção de Dados",
        list: [
          "Dados de analytics: até 14 meses.",
          "Mensagens de formulário: até 24 meses após a última interação.",
          "Newsletter: até o cancelamento da inscrição.",
          "Logs de servidor: até 12 meses para fins de segurança.",
        ],
      },
      {
        title: "8. Seus Direitos",
        body: "Conforme a legislação aplicável, você pode exercer gratuitamente os seguintes direitos:",
        list: [
          "Acesso, correção ou exclusão de dados.",
          "Restrição ou oposição ao tratamento.",
          "Portabilidade dos dados.",
          "Revogação do consentimento a qualquer momento.",
          "Reclamação perante a ANPD (Brasil) ou autoridade equivalente.",
        ],
      },
      {
        title: "9. Crianças",
        body: "O site não é destinado a menores de 18 anos. Não coletamos dados intencionalmente de crianças. Caso identifique tal coleta, entre em contato para que seja excluída.",
      },
      {
        title: "10. Segurança",
        body: "Aplicamos criptografia HTTPS, controles de acesso, hospedagem reforçada, logging e revisões periódicas. Nenhum sistema é 100% seguro, mas seguimos as melhores práticas do setor.",
      },
      {
        title: "11. Alterações nesta Política",
        body: "Podemos atualizar esta Política para refletir mudanças legais, técnicas ou operacionais. Alterações relevantes terão nova data de atualização.",
      },
    ],
  },
  es: {
    title: "Política de Privacidad - BrokerTrusted | Protección de Datos 2026",
    description:
      "Política de privacidad de BrokerTrusted: cómo recopilamos, usamos, almacenamos y protegemos datos personales, cookies, analítica y tus derechos bajo GDPR, LGPD y CCPA.",
    heading: "Política de Privacidad",
    intro:
      "BrokerTrusted (\"nosotros\") respeta tu privacidad. Esta Política explica con detalle qué datos personales recopilamos, por qué, cómo los usamos y protegemos, con quién los compartimos y los derechos que tienes bajo el GDPR (UE), la LGPD (Brasil), la CCPA (California) y otras leyes de protección de datos aplicables.",
    keywords: ["política de privacidad", "protección de datos", "GDPR", "LGPD", "privacidad BrokerTrusted"],
    lastUpdated: lastUpdatedLabel.es,
    sections: [
      {
        title: "1. Responsable del Tratamiento",
        body: "BrokerTrusted opera este sitio como responsable del tratamiento. Para cualquier solicitud de privacidad puedes contactarnos a través de la página de Contacto. Respondemos solicitudes verificadas en un máximo de 30 días.",
      },
      {
        title: "2. Información que Recopilamos",
        body: "Recopilamos solo el mínimo necesario para operar el sitio y mejorar nuestras reseñas:",
        list: [
          "Datos técnicos: IP, navegador, dispositivo, sistema operativo, idioma y URL de origen.",
          "Datos de uso: páginas vistas, tiempo en página, clics, scroll y términos buscados.",
          "Datos de contacto: nombre y email cuando rellenas voluntariamente un formulario.",
          "Cookies y tecnologías similares (ver Política de Cookies).",
          "NO recopilamos datos financieros, credenciales de cuentas de trading ni documentos oficiales.",
        ],
      },
      {
        title: "3. Base Legal (GDPR / LGPD)",
        list: [
          "Interés legítimo: operar, proteger y mejorar el sitio y las reseñas.",
          "Consentimiento: cookies no esenciales, analítica y comunicaciones de marketing.",
          "Obligación legal: cumplir obligaciones fiscales, contables y regulatorias.",
        ],
      },
      {
        title: "4. Cómo Usamos tus Datos",
        list: [
          "Entregar, mantener y proteger el sitio.",
          "Medir el tráfico y el rendimiento del contenido con Google Analytics 4.",
          "Responder solicitudes de contacto y editoriales.",
          "Detectar y prevenir fraudes, abusos e incidentes de seguridad.",
          "Cumplir obligaciones legales.",
        ],
      },
      {
        title: "5. Compartición con Terceros",
        body: "Compartimos datos solo con encargados estrictamente necesarios:",
        list: [
          "Google Analytics (medición de tráfico).",
          "Hosting y CDN.",
          "Proveedores de email y formularios.",
          "Autoridades cuando lo exija la ley.",
          "Nunca vendemos datos personales.",
        ],
      },
      {
        title: "6. Transferencias Internacionales",
        body: "Algunos encargados están fuera de la UE/Brasil. Aplicamos Cláusulas Contractuales Tipo aprobadas por la Comisión Europea y garantías equivalentes exigidas por la LGPD.",
      },
      {
        title: "7. Conservación de Datos",
        list: [
          "Datos de analítica: hasta 14 meses.",
          "Mensajes de formularios: hasta 24 meses tras la última interacción.",
          "Newsletter: hasta que te des de baja.",
          "Logs de servidor: hasta 12 meses por seguridad.",
        ],
      },
      {
        title: "8. Tus Derechos",
        body: "Conforme a la legislación aplicable puedes ejercer gratuitamente los siguientes derechos:",
        list: [
          "Acceso, rectificación o supresión de tus datos.",
          "Limitación u oposición al tratamiento.",
          "Portabilidad.",
          "Retirar el consentimiento en cualquier momento.",
          "Reclamar ante tu autoridad local (AEPD en España, ANPD en Brasil, etc.).",
        ],
      },
      {
        title: "9. Menores",
        body: "El sitio no está destinado a menores de 18 años. No recopilamos datos de menores deliberadamente. Si detectas lo contrario, contáctanos para eliminarlos.",
      },
      {
        title: "10. Seguridad",
        body: "Aplicamos cifrado HTTPS, controles de acceso, hosting reforzado, logging y revisiones periódicas. Ningún sistema es 100% seguro; seguimos las mejores prácticas del sector.",
      },
      {
        title: "11. Cambios en esta Política",
        body: "Podemos actualizar esta Política por motivos legales, técnicos u operativos. Los cambios relevantes se reflejarán con una nueva fecha de actualización.",
      },
    ],
  },
};

// ---------- TERMS ----------
const terms: PageBundle = {
  en: {
    title: "Terms of Service - BrokerTrusted | User Agreement 2026",
    description:
      "BrokerTrusted Terms of Service: rules for using broker reviews, rankings, guides and market analysis, including disclaimers, IP, affiliate links and liability.",
    heading: "Terms of Service",
    intro:
      "These Terms of Service govern your access to and use of BrokerTrusted. By using the website you agree to these Terms. Please read them carefully — they include important disclaimers, intellectual-property rules, affiliate disclosures and limitations of liability.",
    keywords: ["terms of service", "user agreement", "BrokerTrusted terms", "broker review terms"],
    lastUpdated: lastUpdatedLabel.en,
    sections: [
      { title: "1. Acceptance of Terms", body: "By accessing BrokerTrusted you confirm that you are 18+ and legally allowed to view financial educational content in your jurisdiction. If you disagree with any part of these Terms, you must stop using the site." },
      { title: "2. Nature of the Service", body: "BrokerTrusted is an independent editorial platform that publishes forex broker reviews, rankings, comparisons, guides and market analysis. We are not a broker, exchange, advisor, or regulated financial entity." },
      { title: "3. No Financial Advice", body: "All content is for informational and educational purposes only. Nothing on BrokerTrusted constitutes investment, financial, tax or legal advice, nor a recommendation to open, fund or trade on any specific broker account. You are solely responsible for your trading decisions." },
      {
        title: "4. Affiliate Disclosure",
        body: "BrokerTrusted may earn commissions when readers register with brokers through links on the site. This compensation never affects ratings or rankings, which follow our published Methodology. Where possible we mark affiliate links and disclose partnerships transparently.",
      },
      {
        title: "5. Accuracy of Information",
        list: [
          "Trading conditions (spreads, leverage, fees, bonuses, regulation) change frequently.",
          "BrokerTrusted strives for accuracy but does not guarantee that information is current, complete or error-free.",
          "Always verify details directly with the broker before opening or funding an account.",
        ],
      },
      { title: "6. Intellectual Property", body: "All text, graphics, logos, broker rankings, methodology and source code on BrokerTrusted are owned by BrokerTrusted or its licensors and protected by copyright and trademark law. You may share short quotes with attribution and a link, but you may not republish, scrape or commercially redistribute the content without prior written consent." },
      { title: "7. Acceptable Use", body: "You agree not to: (a) use automated scrapers, bots or crawlers that overload our infrastructure; (b) reverse engineer the site; (c) post unlawful, defamatory or misleading content via any form; (d) attempt to bypass security measures; (e) use the site to violate applicable laws." },
      { title: "8. Third-Party Links and Services", body: "BrokerTrusted links to third-party brokers, tools and services. We do not control those sites and are not responsible for their content, terms, privacy practices or trading conditions." },
      { title: "9. Disclaimers", body: "The site is provided on an \"AS IS\" and \"AS AVAILABLE\" basis, without warranties of any kind. We disclaim all warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement to the maximum extent permitted by law." },
      { title: "10. Limitation of Liability", body: "To the maximum extent permitted by law, BrokerTrusted, its team and partners shall not be liable for any direct, indirect, incidental, special or consequential damages, including trading losses, arising from use of the site or reliance on its content." },
      { title: "11. Indemnification", body: "You agree to indemnify BrokerTrusted against claims arising from your misuse of the site or your violation of these Terms or applicable law." },
      { title: "12. Termination", body: "We may suspend or terminate access to the site at any time, with or without notice, particularly in cases of abuse or violation of these Terms." },
      { title: "13. Governing Law", body: "These Terms are governed by the laws of Brazil, without prejudice to mandatory consumer protection laws in your country of residence." },
      { title: "14. Changes", body: "We may update these Terms at any time. Continued use after publication of changes constitutes acceptance of the updated Terms." },
    ],
  },
  pt: {
    title: "Termos de Uso - BrokerTrusted | Condições 2026",
    description:
      "Termos de Uso da BrokerTrusted: regras para uso das análises de corretoras, rankings, guias e análises de mercado, incluindo isenções, PI, afiliados e responsabilidade.",
    heading: "Termos de Uso",
    intro:
      "Estes Termos de Uso regem seu acesso e uso da BrokerTrusted. Ao utilizar o site, você concorda com estes Termos. Leia com atenção — incluem isenções importantes, regras de propriedade intelectual, divulgação de afiliados e limitações de responsabilidade.",
    keywords: ["termos de uso", "condições BrokerTrusted", "termos análises de corretoras"],
    lastUpdated: lastUpdatedLabel.pt,
    sections: [
      { title: "1. Aceitação", body: "Ao acessar a BrokerTrusted você confirma ter 18 anos ou mais e estar autorizado a visualizar conteúdo educacional financeiro em sua jurisdição. Caso discorde de qualquer parte, deve cessar o uso." },
      { title: "2. Natureza do Serviço", body: "A BrokerTrusted é uma plataforma editorial independente que publica análises, rankings, comparações, guias e análises de mercado sobre corretoras de Forex. Não somos corretora, exchange, consultor ou entidade financeira regulada." },
      { title: "3. Não é Aconselhamento Financeiro", body: "Todo conteúdo é apenas informativo e educacional. Nada na BrokerTrusted constitui aconselhamento de investimento, financeiro, fiscal ou jurídico, nem recomendação para abrir ou operar conta em corretora específica. As decisões de trading são de sua exclusiva responsabilidade." },
      {
        title: "4. Divulgação de Afiliados",
        body: "A BrokerTrusted pode receber comissões quando leitores se registram em corretoras por links do site. Essa remuneração nunca afeta avaliações ou rankings, que seguem nossa Metodologia pública. Sempre que possível, sinalizamos links de afiliados e divulgamos parcerias.",
      },
      {
        title: "5. Precisão das Informações",
        list: [
          "Condições de trading (spreads, alavancagem, taxas, bônus, regulação) mudam frequentemente.",
          "A BrokerTrusted busca precisão, mas não garante que as informações estejam sempre atualizadas ou livres de erros.",
          "Sempre confirme os detalhes diretamente com a corretora antes de abrir ou depositar.",
        ],
      },
      { title: "6. Propriedade Intelectual", body: "Todos os textos, gráficos, logos, rankings, metodologia e código-fonte são de propriedade da BrokerTrusted ou de seus licenciadores, protegidos por direitos autorais e marca. Você pode compartilhar trechos curtos com atribuição e link, mas não pode republicar, raspar ou redistribuir comercialmente sem autorização." },
      { title: "7. Uso Aceitável", body: "Você concorda em não: (a) usar scrapers ou bots que sobrecarreguem nossa infraestrutura; (b) realizar engenharia reversa do site; (c) postar conteúdo ilegal, difamatório ou enganoso; (d) burlar medidas de segurança; (e) usar o site para violar leis aplicáveis." },
      { title: "8. Links de Terceiros", body: "A BrokerTrusted possui links para corretoras, ferramentas e serviços de terceiros. Não controlamos esses sites e não nos responsabilizamos por seu conteúdo, termos, privacidade ou condições de trading." },
      { title: "9. Isenções", body: "O site é fornecido \"COMO ESTÁ\" e \"CONFORME DISPONÍVEL\", sem garantias de qualquer espécie. Renunciamos a todas as garantias de comerciabilidade, adequação a um propósito específico, precisão e não violação, no máximo permitido em lei." },
      { title: "10. Limitação de Responsabilidade", body: "Na máxima extensão permitida em lei, a BrokerTrusted, sua equipe e parceiros não serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais, incluindo perdas em trading, decorrentes do uso do site ou confiança em seu conteúdo." },
      { title: "11. Indenização", body: "Você concorda em indenizar a BrokerTrusted por reclamações decorrentes do uso indevido do site ou da violação destes Termos ou da legislação aplicável." },
      { title: "12. Rescisão", body: "Podemos suspender ou encerrar o acesso ao site a qualquer momento, com ou sem aviso, especialmente em casos de abuso ou violação destes Termos." },
      { title: "13. Lei Aplicável", body: "Estes Termos são regidos pelas leis do Brasil, sem prejuízo das normas consumeristas obrigatórias do país de residência do usuário." },
      { title: "14. Alterações", body: "Podemos atualizar estes Termos a qualquer momento. O uso continuado após publicação implica aceitação da nova versão." },
    ],
  },
  es: {
    title: "Términos de Servicio - BrokerTrusted | Acuerdo 2026",
    description:
      "Términos de Servicio de BrokerTrusted: reglas para usar reseñas de brókers, rankings, guías y análisis de mercado, incluyendo descargos, PI, afiliados y responsabilidad.",
    heading: "Términos de Servicio",
    intro:
      "Estos Términos rigen tu acceso y uso de BrokerTrusted. Al usar el sitio aceptas estos Términos. Léelos con atención — incluyen descargos importantes, normas de propiedad intelectual, divulgación de afiliados y limitaciones de responsabilidad.",
    keywords: ["términos de servicio", "condiciones BrokerTrusted", "términos reseñas de brókers"],
    lastUpdated: lastUpdatedLabel.es,
    sections: [
      { title: "1. Aceptación", body: "Al acceder a BrokerTrusted confirmas ser mayor de 18 años y estar autorizado a ver contenido educativo financiero en tu jurisdicción. Si no estás de acuerdo, debes dejar de usar el sitio." },
      { title: "2. Naturaleza del Servicio", body: "BrokerTrusted es una plataforma editorial independiente que publica reseñas, rankings, comparativas, guías y análisis de mercado sobre brókers Forex. No somos bróker, exchange, asesor ni entidad regulada." },
      { title: "3. No es Asesoramiento Financiero", body: "Todo el contenido es informativo y educativo. Nada en BrokerTrusted constituye asesoramiento de inversión, financiero, fiscal o legal, ni una recomendación para abrir u operar en un bróker específico. Las decisiones son tu responsabilidad." },
      {
        title: "4. Divulgación de Afiliados",
        body: "BrokerTrusted puede recibir comisiones cuando los lectores se registran en brókers a través de enlaces del sitio. Esta retribución nunca afecta las valoraciones ni los rankings, que siguen nuestra Metodología pública. Cuando es posible, marcamos los enlaces de afiliados.",
      },
      {
        title: "5. Exactitud de la Información",
        list: [
          "Las condiciones de trading (spreads, apalancamiento, comisiones, bonos, regulación) cambian con frecuencia.",
          "BrokerTrusted busca la precisión, pero no garantiza que la información esté siempre actualizada o libre de errores.",
          "Verifica siempre los detalles directamente con el bróker antes de abrir o financiar una cuenta.",
        ],
      },
      { title: "6. Propiedad Intelectual", body: "Todos los textos, gráficos, logotipos, rankings, metodología y código fuente son propiedad de BrokerTrusted o de sus licenciantes y están protegidos por derechos de autor y marca. Puedes compartir citas cortas con atribución y enlace, pero no republicar, hacer scraping ni redistribuir comercialmente sin autorización." },
      { title: "7. Uso Aceptable", body: "Aceptas no: (a) usar scrapers o bots que sobrecarguen la infraestructura; (b) realizar ingeniería inversa; (c) publicar contenido ilegal, difamatorio o engañoso; (d) eludir medidas de seguridad; (e) usar el sitio para infringir leyes aplicables." },
      { title: "8. Enlaces de Terceros", body: "BrokerTrusted enlaza a brókers, herramientas y servicios de terceros. No controlamos esos sitios ni respondemos por su contenido, términos, privacidad o condiciones de trading." },
      { title: "9. Descargos", body: "El sitio se ofrece \"TAL CUAL\" y \"SEGÚN DISPONIBILIDAD\", sin garantías de ningún tipo. Renunciamos a toda garantía de comerciabilidad, idoneidad para un fin concreto, exactitud y no infracción, en la máxima medida permitida por la ley." },
      { title: "10. Limitación de Responsabilidad", body: "En la máxima medida permitida por la ley, BrokerTrusted, su equipo y socios no serán responsables de daños directos, indirectos, incidentales, especiales o consecuentes, incluidas pérdidas en trading, derivados del uso del sitio." },
      { title: "11. Indemnización", body: "Aceptas indemnizar a BrokerTrusted por reclamaciones derivadas del uso indebido del sitio o de la infracción de estos Términos o de la ley." },
      { title: "12. Terminación", body: "Podemos suspender o terminar el acceso al sitio en cualquier momento, con o sin aviso, especialmente en casos de abuso o infracción." },
      { title: "13. Ley Aplicable", body: "Estos Términos se rigen por las leyes de Brasil, sin perjuicio de las normas de consumo obligatorias en tu país de residencia." },
      { title: "14. Cambios", body: "Podemos actualizar estos Términos en cualquier momento. El uso continuado implica aceptación de la nueva versión." },
    ],
  },
};

// ---------- COOKIES ----------
const cookies: PageBundle = {
  en: {
    title: "Cookie Policy - BrokerTrusted | Cookies & Tracking 2026",
    description:
      "BrokerTrusted Cookie Policy: types of cookies we use (essential, analytics, preferences), third-party providers, retention and how to manage cookies in your browser.",
    heading: "Cookie Policy",
    intro:
      "This Cookie Policy explains what cookies and similar technologies are, which ones BrokerTrusted uses, why we use them, who places them, how long they last and how you can control them. It complements our Privacy Policy.",
    keywords: ["cookie policy", "cookies BrokerTrusted", "tracking technologies", "GDPR cookies"],
    lastUpdated: lastUpdatedLabel.en,
    sections: [
      { title: "1. What Are Cookies?", body: "Cookies are small text files stored on your device when you visit a website. They allow the site to remember preferences, measure usage and provide essential functionality. Similar technologies include local storage, pixels and SDKs." },
      {
        title: "2. Types of Cookies We Use",
        list: [
          "Strictly necessary: required for the site to function (security, load balancing, language preference). Cannot be disabled.",
          "Analytics: Google Analytics 4 (_ga, _ga_*) measures aggregated, pseudonymous traffic.",
          "Preferences: store language selection and UI choices.",
          "We do NOT use advertising or retargeting cookies.",
        ],
      },
      {
        title: "3. Third-Party Cookies",
        list: [
          "Google Analytics (Google Ireland Ltd / Google LLC) — traffic measurement.",
          "Hosting/CDN providers may set technical cookies for security and performance.",
        ],
      },
      {
        title: "4. Retention",
        list: [
          "Session cookies: deleted when you close the browser.",
          "Persistent cookies: from a few days up to 24 months.",
          "Google Analytics _ga: 13 months by default.",
        ],
      },
      { title: "5. Legal Basis", body: "Strictly necessary cookies rely on legitimate interest. Analytics and preference cookies rely on your consent where required by GDPR/LGPD." },
      {
        title: "6. How to Manage Cookies",
        list: [
          "Browser settings: Chrome, Firefox, Safari, Edge and Brave allow you to view, block and delete cookies.",
          "Google Analytics opt-out: install the official browser add-on.",
          "Do Not Track: we honor browser-level signals where technically feasible.",
        ],
      },
      { title: "7. Updates", body: "We may update this Cookie Policy as our services or applicable laws change. Significant changes are announced on this page with a new last-updated date." },
    ],
  },
  pt: {
    title: "Política de Cookies - BrokerTrusted | Cookies e Rastreamento 2026",
    description:
      "Política de Cookies da BrokerTrusted: tipos de cookies (essenciais, analytics, preferências), provedores terceiros, retenção e como gerenciar cookies no navegador.",
    heading: "Política de Cookies",
    intro:
      "Esta Política de Cookies explica o que são cookies e tecnologias similares, quais a BrokerTrusted utiliza, por que utilizamos, quem os define, por quanto tempo duram e como você pode controlá-los. Complementa nossa Política de Privacidade.",
    keywords: ["política de cookies", "cookies BrokerTrusted", "rastreamento", "LGPD cookies"],
    lastUpdated: lastUpdatedLabel.pt,
    sections: [
      { title: "1. O que são Cookies?", body: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo ao visitar um site. Permitem lembrar preferências, medir uso e oferecer funcionalidades essenciais. Tecnologias semelhantes incluem local storage, pixels e SDKs." },
      {
        title: "2. Tipos de Cookies que Usamos",
        list: [
          "Estritamente necessários: indispensáveis ao funcionamento (segurança, balanceamento, preferência de idioma). Não podem ser desativados.",
          "Analytics: Google Analytics 4 (_ga, _ga_*) mede tráfego de forma agregada e pseudonimizada.",
          "Preferências: armazenam seleção de idioma e opções de interface.",
          "NÃO usamos cookies de publicidade ou retargeting.",
        ],
      },
      {
        title: "3. Cookies de Terceiros",
        list: [
          "Google Analytics (Google Ireland Ltd / Google LLC) — medição de tráfego.",
          "Provedores de hospedagem/CDN podem definir cookies técnicos de segurança e performance.",
        ],
      },
      {
        title: "4. Retenção",
        list: [
          "Cookies de sessão: excluídos ao fechar o navegador.",
          "Cookies persistentes: de alguns dias até 24 meses.",
          "Google Analytics _ga: 13 meses por padrão.",
        ],
      },
      { title: "5. Base Legal", body: "Cookies estritamente necessários baseiam-se em legítimo interesse. Cookies de analytics e preferência baseiam-se no seu consentimento quando exigido pela LGPD/GDPR." },
      {
        title: "6. Como Gerenciar Cookies",
        list: [
          "Configurações do navegador: Chrome, Firefox, Safari, Edge e Brave permitem visualizar, bloquear e excluir cookies.",
          "Opt-out do Google Analytics: instale o complemento oficial do navegador.",
          "Do Not Track: respeitamos sinais do navegador quando tecnicamente viável.",
        ],
      },
      { title: "7. Atualizações", body: "Podemos atualizar esta Política conforme nossos serviços ou as leis aplicáveis evoluírem. Mudanças relevantes serão sinalizadas com nova data." },
    ],
  },
  es: {
    title: "Política de Cookies - BrokerTrusted | Cookies y Rastreo 2026",
    description:
      "Política de Cookies de BrokerTrusted: tipos de cookies (esenciales, analítica, preferencias), proveedores externos, conservación y cómo gestionarlas en el navegador.",
    heading: "Política de Cookies",
    intro:
      "Esta Política de Cookies explica qué son las cookies y tecnologías similares, cuáles utiliza BrokerTrusted, por qué, quién las coloca, cuánto duran y cómo puedes controlarlas. Complementa nuestra Política de Privacidad.",
    keywords: ["política de cookies", "cookies BrokerTrusted", "rastreo", "GDPR cookies"],
    lastUpdated: lastUpdatedLabel.es,
    sections: [
      { title: "1. ¿Qué son las Cookies?", body: "Las cookies son pequeños archivos de texto guardados en tu dispositivo al visitar un sitio web. Permiten recordar preferencias, medir el uso y ofrecer funcionalidades esenciales. Las tecnologías similares incluyen local storage, píxeles y SDKs." },
      {
        title: "2. Tipos de Cookies que Usamos",
        list: [
          "Estrictamente necesarias: imprescindibles para el funcionamiento (seguridad, balanceo, idioma). No pueden desactivarse.",
          "Analítica: Google Analytics 4 (_ga, _ga_*) mide el tráfico de forma agregada y seudonimizada.",
          "Preferencias: guardan el idioma y las opciones de interfaz.",
          "NO utilizamos cookies de publicidad ni de retargeting.",
        ],
      },
      {
        title: "3. Cookies de Terceros",
        list: [
          "Google Analytics (Google Ireland Ltd / Google LLC) — medición de tráfico.",
          "Proveedores de hosting/CDN pueden establecer cookies técnicas de seguridad y rendimiento.",
        ],
      },
      {
        title: "4. Conservación",
        list: [
          "Cookies de sesión: se eliminan al cerrar el navegador.",
          "Cookies persistentes: de unos días hasta 24 meses.",
          "Google Analytics _ga: 13 meses por defecto.",
        ],
      },
      { title: "5. Base Legal", body: "Las cookies estrictamente necesarias se basan en interés legítimo. Las cookies de analítica y preferencias se basan en tu consentimiento cuando lo exige el GDPR/LGPD." },
      {
        title: "6. Cómo Gestionar las Cookies",
        list: [
          "Ajustes del navegador: Chrome, Firefox, Safari, Edge y Brave permiten ver, bloquear y eliminar cookies.",
          "Opt-out de Google Analytics: instala el complemento oficial.",
          "Do Not Track: respetamos las señales del navegador cuando es técnicamente viable.",
        ],
      },
      { title: "7. Actualizaciones", body: "Podemos actualizar esta Política según evolucionen nuestros servicios o la legislación aplicable. Los cambios relevantes se indicarán con una nueva fecha de actualización." },
    ],
  },
};

// ---------- DISCLAIMER ----------
const disclaimer: PageBundle = {
  en: {
    title: "Disclaimer - BrokerTrusted | Editorial & Affiliate Disclosure 2026",
    description:
      "BrokerTrusted disclaimer: educational content only, no investment advice, affiliate links, accuracy limitations, third-party brokers and limitation of liability.",
    heading: "Disclaimer",
    intro:
      "This Disclaimer applies to all content published on BrokerTrusted, including reviews, rankings, comparisons, guides, news and market analysis. By using the site you acknowledge and accept the limitations described below.",
    keywords: ["disclaimer", "editorial disclosure", "affiliate disclosure", "BrokerTrusted disclaimer"],
    lastUpdated: lastUpdatedLabel.en,
    sections: [
      { title: "1. Informational Content Only", body: "BrokerTrusted is an independent editorial publication. Content is provided strictly for general informational and educational purposes and does not constitute personalized investment, financial, tax or legal advice." },
      { title: "2. No Recommendation", body: "Mention of a broker, instrument, platform or strategy is not a recommendation to open, fund or trade an account. Trading forex, CFDs and other leveraged products is high-risk and may not be suitable for every investor." },
      {
        title: "3. Affiliate Links",
        body: "Some links on BrokerTrusted are affiliate links. If you register with a broker through these links, we may receive a commission at no extra cost to you. This commercial relationship:",
        list: [
          "Does NOT influence editorial ratings or rankings.",
          "Does NOT change the price or trading conditions offered to you.",
          "Is fully disclosed in our Methodology.",
        ],
      },
      {
        title: "4. Accuracy & Currency of Information",
        list: [
          "Spreads, leverage, fees, bonuses and regulation may change at any time.",
          "BrokerTrusted reviews information periodically but does not guarantee it is always up to date.",
          "Always verify details directly with the broker.",
        ],
      },
      { title: "5. Third-Party Content", body: "BrokerTrusted may link to or reference third-party sites, tools, indicators and data providers. We do not control such third parties and accept no responsibility for their accuracy, policies or services." },
      { title: "6. Past Performance", body: "Past performance of any broker, strategy or market is not indicative of future results. Statistics, charts and examples are illustrative." },
      { title: "7. Jurisdictional Notice", body: "Some brokers or products mentioned may not be available or legal in your country. It is your responsibility to verify compliance with local laws before opening any account." },
      { title: "8. No Warranty", body: "Content is provided \"as is\" without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement." },
      { title: "9. Limitation of Liability", body: "To the maximum extent permitted by law, BrokerTrusted and its contributors are not liable for any loss or damage, including trading losses, arising from reliance on the content." },
    ],
  },
  pt: {
    title: "Disclaimer - BrokerTrusted | Isenção Editorial e Afiliados 2026",
    description:
      "Disclaimer da BrokerTrusted: conteúdo apenas informativo, sem aconselhamento de investimento, links de afiliados, limitações de precisão e responsabilidade.",
    heading: "Disclaimer",
    intro:
      "Este Disclaimer aplica-se a todo o conteúdo da BrokerTrusted, incluindo análises, rankings, comparações, guias, notícias e análises de mercado. Ao utilizar o site, você reconhece e aceita as limitações descritas abaixo.",
    keywords: ["disclaimer", "isenção editorial", "afiliados", "BrokerTrusted disclaimer"],
    lastUpdated: lastUpdatedLabel.pt,
    sections: [
      { title: "1. Apenas Informativo", body: "A BrokerTrusted é uma publicação editorial independente. O conteúdo é fornecido exclusivamente para fins informativos e educacionais e não constitui aconselhamento personalizado de investimento, financeiro, fiscal ou jurídico." },
      { title: "2. Sem Recomendação", body: "A menção a uma corretora, instrumento, plataforma ou estratégia não é recomendação para abrir, depositar ou operar conta. Operar Forex, CFDs e outros produtos alavancados é de alto risco e pode não ser adequado a todos os investidores." },
      {
        title: "3. Links de Afiliados",
        body: "Alguns links na BrokerTrusted são de afiliados. Se você se registrar em uma corretora por esses links, podemos receber comissão sem custo adicional. Essa relação comercial:",
        list: [
          "NÃO influencia avaliações ou rankings editoriais.",
          "NÃO altera o preço ou as condições oferecidas a você.",
          "É plenamente divulgada em nossa Metodologia.",
        ],
      },
      {
        title: "4. Precisão e Atualidade",
        list: [
          "Spreads, alavancagem, taxas, bônus e regulação podem mudar a qualquer momento.",
          "Revisamos as informações periodicamente, mas não garantimos que estejam sempre atualizadas.",
          "Confirme sempre os detalhes diretamente com a corretora.",
        ],
      },
      { title: "5. Conteúdo de Terceiros", body: "A BrokerTrusted pode linkar ou referenciar sites, ferramentas, indicadores e provedores de dados de terceiros. Não controlamos esses terceiros e não nos responsabilizamos por sua precisão, políticas ou serviços." },
      { title: "6. Desempenho Passado", body: "O desempenho passado de qualquer corretora, estratégia ou mercado não é indicativo de resultados futuros. Estatísticas, gráficos e exemplos são apenas ilustrativos." },
      { title: "7. Aviso Jurisdicional", body: "Algumas corretoras ou produtos mencionados podem não estar disponíveis ou ser legais em seu país. É sua responsabilidade verificar a conformidade com as leis locais antes de abrir conta." },
      { title: "8. Sem Garantia", body: "O conteúdo é fornecido \"como está\", sem garantia de qualquer tipo, expressa ou implícita, incluindo comerciabilidade, adequação a propósito específico e não violação." },
      { title: "9. Limitação de Responsabilidade", body: "Na máxima extensão permitida em lei, a BrokerTrusted e seus colaboradores não são responsáveis por qualquer perda ou dano, incluindo perdas em trading, decorrentes da confiança no conteúdo." },
    ],
  },
  es: {
    title: "Descargo - BrokerTrusted | Editorial y Afiliados 2026",
    description:
      "Descargo de BrokerTrusted: contenido educativo, no asesoramiento de inversión, enlaces de afiliados, limitaciones de precisión y responsabilidad.",
    heading: "Descargo de Responsabilidad",
    intro:
      "Este Descargo aplica a todo el contenido de BrokerTrusted, incluyendo reseñas, rankings, comparativas, guías, noticias y análisis. Al usar el sitio aceptas las limitaciones que se describen a continuación.",
    keywords: ["descargo", "disclaimer", "afiliados", "BrokerTrusted descargo"],
    lastUpdated: lastUpdatedLabel.es,
    sections: [
      { title: "1. Solo Información", body: "BrokerTrusted es una publicación editorial independiente. El contenido se ofrece exclusivamente con fines informativos y educativos y no constituye asesoramiento personalizado de inversión, financiero, fiscal o legal." },
      { title: "2. Sin Recomendación", body: "La mención de un bróker, instrumento, plataforma o estrategia no es una recomendación para abrir, financiar u operar una cuenta. Operar Forex, CFDs y otros productos apalancados es de alto riesgo y puede no ser adecuado para todos los inversores." },
      {
        title: "3. Enlaces de Afiliados",
        body: "Algunos enlaces son de afiliados. Si te registras en un bróker a través de ellos podemos recibir una comisión sin coste adicional para ti. Esta relación:",
        list: [
          "NO influye en las valoraciones ni rankings editoriales.",
          "NO altera el precio ni las condiciones que se te ofrecen.",
          "Se detalla en nuestra Metodología.",
        ],
      },
      {
        title: "4. Precisión y Actualidad",
        list: [
          "Spreads, apalancamiento, comisiones, bonos y regulación pueden cambiar en cualquier momento.",
          "Revisamos la información periódicamente, pero no garantizamos que esté siempre actualizada.",
          "Verifica los detalles directamente con el bróker.",
        ],
      },
      { title: "5. Contenido de Terceros", body: "BrokerTrusted puede enlazar o referenciar sitios, herramientas, indicadores y proveedores de datos de terceros. No controlamos a esos terceros ni respondemos por su exactitud, políticas o servicios." },
      { title: "6. Rendimiento Pasado", body: "El rendimiento pasado de cualquier bróker, estrategia o mercado no es indicativo de resultados futuros. Estadísticas, gráficos y ejemplos son ilustrativos." },
      { title: "7. Aviso Jurisdiccional", body: "Algunos brókers o productos mencionados pueden no estar disponibles ni ser legales en tu país. Es tu responsabilidad verificar el cumplimiento de la normativa local antes de abrir cuenta." },
      { title: "8. Sin Garantía", body: "El contenido se ofrece \"tal cual\" sin garantía de ningún tipo, expresa o implícita, incluida la comerciabilidad, idoneidad para un fin concreto y no infracción." },
      { title: "9. Limitación de Responsabilidad", body: "En la máxima medida permitida por la ley, BrokerTrusted y sus colaboradores no se responsabilizan de pérdidas o daños, incluidas pérdidas en trading, derivados de la confianza en el contenido." },
    ],
  },
};

// ---------- RISK WARNING ----------
const riskWarning: PageBundle = {
  en: {
    title: "Risk Warning - Forex & CFD Trading Risks 2026 | BrokerTrusted",
    description:
      "BrokerTrusted Risk Warning: 74–89% of retail CFD traders lose money. Understand leverage, volatility, margin calls, gapping and how to manage risk before trading.",
    heading: "Forex & CFD Risk Warning",
    intro:
      "Trading foreign exchange (Forex), Contracts for Difference (CFDs), futures, options and other leveraged products carries a high level of risk and is not suitable for every investor. Please read this Risk Warning carefully before trading.",
    keywords: ["risk warning", "forex risk", "CFD risk", "leverage risk", "margin call"],
    lastUpdated: lastUpdatedLabel.en,
    sections: [
      {
        title: "1. High Risk of Capital Loss",
        body: "According to disclosures published by European brokers regulated by ESMA, between 74% and 89% of retail investor accounts lose money when trading CFDs. You can lose part or all of your invested capital — and, depending on the broker, more than your initial deposit if negative balance protection is not provided.",
      },
      {
        title: "2. Leverage Magnifies Both Gains and Losses",
        list: [
          "Leverage allows you to control large positions with a small margin deposit.",
          "A small adverse market move can wipe out your account.",
          "Higher leverage increases the probability of margin calls and stop-outs.",
        ],
      },
      {
        title: "3. Market Volatility & Gapping",
        list: [
          "Forex and CFD markets can move sharply during news, central bank decisions or geopolitical events.",
          "Prices may gap over your stop-loss, resulting in execution at worse levels than expected.",
          "Liquidity can dry up during weekends, holidays and Asian sessions.",
        ],
      },
      {
        title: "4. Margin Calls & Stop-Outs",
        body: "If your equity falls below the broker's required margin, you may receive a margin call and your positions may be automatically closed at unfavorable prices. Always monitor margin level and use position sizing.",
      },
      {
        title: "5. Counterparty & Broker Risk",
        list: [
          "Trade only with brokers regulated by reputable authorities (FCA, ASIC, CySEC, CMA, BaCen, etc.).",
          "Check segregation of client funds, investor compensation schemes and negative balance protection.",
          "Off-shore or unlicensed brokers can expose you to fraud, withdrawal blocks and slippage abuse.",
        ],
      },
      {
        title: "6. Technology & Execution Risk",
        body: "Internet outages, platform downtime, requotes, slippage and latency can affect execution. Always have a contingency plan and use risk controls (stop-loss, take-profit, position size limits).",
      },
      {
        title: "7. Psychological Risk",
        body: "Overtrading, revenge trading, FOMO and lack of discipline are leading causes of retail losses. A documented trading plan, risk management rules and journaling are essential.",
      },
      {
        title: "8. Suitability",
        list: [
          "Only trade with money you can afford to lose entirely.",
          "Never trade with borrowed funds, emergency savings or money required for living expenses.",
          "Consider an independent financial advisor if you are unsure whether trading is suitable for you.",
        ],
      },
      {
        title: "9. Risk Management Best Practices",
        list: [
          "Risk no more than 1–2% of equity per trade.",
          "Use stop-loss orders on every position.",
          "Avoid maximum leverage; start with conservative levels (1:10–1:30).",
          "Diversify across instruments and strategies.",
          "Practice on a demo account before risking real capital.",
        ],
      },
      {
        title: "10. Regulatory Notice",
        body: "Some products and brokers are not available in all jurisdictions. CFDs are restricted or prohibited for retail clients in some countries (e.g. United States). Verify legality and tax treatment in your country before trading.",
      },
    ],
  },
  pt: {
    title: "Aviso de Risco - Trading Forex e CFDs 2026 | BrokerTrusted",
    description:
      "Aviso de Risco da BrokerTrusted: 74–89% dos traders de varejo perdem dinheiro com CFDs. Entenda alavancagem, volatilidade, margem e gestão de risco.",
    heading: "Aviso de Risco - Forex e CFDs",
    intro:
      "Operar câmbio (Forex), Contratos por Diferença (CFDs), futuros, opções e outros produtos alavancados envolve alto risco e pode não ser adequado para todos os investidores. Leia este Aviso de Risco com atenção antes de operar.",
    keywords: ["aviso de risco", "risco forex", "risco CFD", "alavancagem", "margem"],
    lastUpdated: lastUpdatedLabel.pt,
    sections: [
      {
        title: "1. Alto Risco de Perda de Capital",
        body: "Segundo divulgações de corretoras europeias reguladas pela ESMA, entre 74% e 89% das contas de investidores de varejo perdem dinheiro operando CFDs. Você pode perder parte ou todo o capital investido — e, dependendo da corretora, mais do que o depósito inicial caso não haja proteção contra saldo negativo.",
      },
      {
        title: "2. Alavancagem Amplifica Ganhos e Perdas",
        list: [
          "Alavancagem permite controlar grandes posições com pequena margem.",
          "Uma pequena variação contrária pode zerar a conta.",
          "Alavancagem alta aumenta a probabilidade de chamadas de margem e stop-out.",
        ],
      },
      {
        title: "3. Volatilidade e Gaps",
        list: [
          "Os mercados de Forex e CFDs podem se mover bruscamente em notícias, decisões de bancos centrais e eventos geopolíticos.",
          "Preços podem 'pular' o stop-loss, resultando em execução pior que a esperada.",
          "A liquidez pode reduzir em fins de semana, feriados e sessão asiática.",
        ],
      },
      {
        title: "4. Chamadas de Margem e Stop-Out",
        body: "Se o patrimônio cair abaixo da margem exigida, você pode receber chamada de margem e ter posições fechadas automaticamente em preços desfavoráveis. Monitore o nível de margem e dimensione a posição.",
      },
      {
        title: "5. Risco de Contraparte e Corretora",
        list: [
          "Opere apenas com corretoras reguladas por autoridades respeitadas (FCA, ASIC, CySEC, CVM, BaCen, etc.).",
          "Verifique segregação de fundos, esquemas de compensação e proteção contra saldo negativo.",
          "Corretoras offshore ou não licenciadas expõem você a fraudes, bloqueio de saques e abuso de slippage.",
        ],
      },
      {
        title: "6. Risco Tecnológico e de Execução",
        body: "Quedas de internet, indisponibilidade da plataforma, requotes, slippage e latência afetam a execução. Tenha plano de contingência e controles de risco (stop-loss, take-profit, limites de tamanho)." ,
      },
      {
        title: "7. Risco Psicológico",
        body: "Overtrading, trade de vingança, FOMO e falta de disciplina são as principais causas de perdas no varejo. Um plano de trading documentado, regras de gestão de risco e diário são essenciais.",
      },
      {
        title: "8. Adequação",
        list: [
          "Só opere com dinheiro que pode perder integralmente.",
          "Nunca opere com fundos emprestados, reserva de emergência ou dinheiro de despesas essenciais.",
          "Considere um consultor financeiro independente em caso de dúvida.",
        ],
      },
      {
        title: "9. Boas Práticas de Gestão de Risco",
        list: [
          "Arrisque no máximo 1–2% do patrimônio por operação.",
          "Use stop-loss em todas as posições.",
          "Evite alavancagem máxima; comece com níveis conservadores (1:10–1:30).",
          "Diversifique entre instrumentos e estratégias.",
          "Pratique em conta demo antes de arriscar capital real.",
        ],
      },
      {
        title: "10. Aviso Regulatório",
        body: "Alguns produtos e corretoras não estão disponíveis em todos os países. CFDs são restritos ou proibidos para varejo em algumas jurisdições (ex.: EUA). Verifique a legalidade e a tributação no seu país antes de operar.",
      },
    ],
  },
  es: {
    title: "Advertencia de Riesgo - Forex y CFDs 2026 | BrokerTrusted",
    description:
      "Advertencia de Riesgo de BrokerTrusted: el 74–89% de los traders minoristas pierde dinero con CFDs. Conoce el apalancamiento, la volatilidad y la gestión del riesgo.",
    heading: "Advertencia de Riesgo - Forex y CFDs",
    intro:
      "Operar Forex, Contratos por Diferencia (CFDs), futuros, opciones y otros productos apalancados implica un alto nivel de riesgo y puede no ser adecuado para todos los inversores. Lee esta Advertencia con atención antes de operar.",
    keywords: ["advertencia de riesgo", "riesgo forex", "riesgo CFD", "apalancamiento", "margen"],
    lastUpdated: lastUpdatedLabel.es,
    sections: [
      {
        title: "1. Alto Riesgo de Pérdida",
        body: "Según divulgaciones de brókers europeos regulados por ESMA, entre el 74% y el 89% de las cuentas de inversores minoristas pierden dinero operando CFDs. Puedes perder parte o la totalidad del capital — y, según el bróker, más que el depósito inicial si no hay protección de saldo negativo.",
      },
      {
        title: "2. El Apalancamiento Amplifica Ganancias y Pérdidas",
        list: [
          "El apalancamiento permite controlar grandes posiciones con poco margen.",
          "Un pequeño movimiento adverso puede liquidar la cuenta.",
          "Más apalancamiento aumenta la probabilidad de margin call y stop-out.",
        ],
      },
      {
        title: "3. Volatilidad y Gaps",
        list: [
          "Los mercados Forex y CFD pueden moverse bruscamente con noticias, decisiones de bancos centrales o geopolítica.",
          "El precio puede saltar tu stop-loss, ejecutándose a peor nivel del esperado.",
          "La liquidez puede caer en fines de semana, festivos y sesión asiática.",
        ],
      },
      {
        title: "4. Margin Call y Stop-Out",
        body: "Si tu patrimonio cae por debajo del margen exigido, puedes recibir un margin call y que tus posiciones se cierren automáticamente a precios desfavorables. Vigila el nivel de margen y dimensiona la posición.",
      },
      {
        title: "5. Riesgo de Contraparte y Bróker",
        list: [
          "Opera solo con brókers regulados por autoridades reputadas (FCA, ASIC, CySEC, CNMV, CMF, etc.).",
          "Verifica segregación de fondos, esquemas de compensación y protección de saldo negativo.",
          "Los brókers offshore o sin licencia te exponen a fraudes, bloqueo de retiros y abuso de slippage.",
        ],
      },
      {
        title: "6. Riesgo Tecnológico y de Ejecución",
        body: "Cortes de internet, caídas de plataforma, requotes, slippage y latencia afectan la ejecución. Ten un plan de contingencia y controles de riesgo (stop-loss, take-profit, límites de tamaño).",
      },
      {
        title: "7. Riesgo Psicológico",
        body: "Overtrading, trades de venganza, FOMO y falta de disciplina son causas principales de pérdidas en minoristas. Un plan de trading documentado, reglas de gestión del riesgo y un diario son esenciales.",
      },
      {
        title: "8. Idoneidad",
        list: [
          "Opera solo con dinero que puedas perder por completo.",
          "Nunca operes con dinero prestado, fondos de emergencia o gastos esenciales.",
          "Consulta a un asesor financiero independiente si tienes dudas.",
        ],
      },
      {
        title: "9. Buenas Prácticas de Gestión del Riesgo",
        list: [
          "Arriesga como máximo el 1–2% del patrimonio por operación.",
          "Usa stop-loss en todas las posiciones.",
          "Evita el apalancamiento máximo; empieza con niveles conservadores (1:10–1:30).",
          "Diversifica entre instrumentos y estrategias.",
          "Practica en cuenta demo antes de arriesgar capital real.",
        ],
      },
      {
        title: "10. Aviso Regulatorio",
        body: "Algunos productos y brókers no están disponibles en todas las jurisdicciones. Los CFDs están restringidos o prohibidos para minoristas en algunos países (ej. EE. UU.). Verifica la legalidad y fiscalidad en tu país antes de operar.",
      },
    ],
  },
};

// ---------- Other (team, methodology, careers, press) keep existing English copy ----------
const teamBundle: PageBundle = {
  en: {
    title: "BrokerTrusted Editorial Team",
    description: "Meet the BrokerTrusted analysts and editors behind our independent forex broker reviews, rankings and trading education.",
    heading: "BrokerTrusted Editorial Team",
    intro: "Our editorial team reviews forex brokers using transparent criteria focused on regulation, safety, trading costs, execution quality and platform reliability.",
    keywords: ["forex broker editorial team", "broker review analysts", "independent forex experts"],
    sections: [
      { title: "Independent Analysis", body: "BrokerTrusted separates research from promotion. Reviews are based on broker regulation, account conditions, platform testing, spreads, commissions, withdrawals and support quality." },
      { title: "Specialist Coverage", body: "Our coverage includes regulated forex brokers, ECN brokers, STP brokers, market makers, beginner platforms, professional accounts, mobile apps and risk-management education." },
    ],
  },
  pt: {
    title: "Equipe Editorial - BrokerTrusted",
    description: "Conheça os analistas e editores da BrokerTrusted por trás das análises independentes de corretoras Forex.",
    heading: "Equipe Editorial da BrokerTrusted",
    intro: "Nossa equipe avalia corretoras Forex com critérios transparentes: regulação, segurança, custos, execução e confiabilidade de plataforma.",
    keywords: ["equipe editorial forex", "analistas corretoras", "especialistas forex independentes"],
    sections: [
      { title: "Análise Independente", body: "Separamos pesquisa de promoção. As análises se baseiam em regulação, condições de conta, testes de plataforma, spreads, comissões, saques e suporte." },
      { title: "Cobertura Especializada", body: "Cobrimos corretoras reguladas, ECN, STP, market makers, plataformas para iniciantes, contas profissionais, apps mobile e educação em gestão de risco." },
    ],
  },
  es: {
    title: "Equipo Editorial - BrokerTrusted",
    description: "Conoce a los analistas y editores de BrokerTrusted detrás de nuestras reseñas independientes de brókers Forex.",
    heading: "Equipo Editorial de BrokerTrusted",
    intro: "Nuestro equipo evalúa brókers Forex con criterios transparentes: regulación, seguridad, costes, ejecución y fiabilidad de la plataforma.",
    keywords: ["equipo editorial forex", "analistas brókers", "expertos forex independientes"],
    sections: [
      { title: "Análisis Independiente", body: "Separamos investigación y promoción. Las reseñas se basan en regulación, condiciones de cuenta, pruebas de plataforma, spreads, comisiones, retiros y soporte." },
      { title: "Cobertura Especializada", body: "Cubrimos brókers regulados, ECN, STP, market makers, plataformas para principiantes, cuentas profesionales, apps móviles y educación en gestión del riesgo." },
    ],
  },
};

const methodologyBundle: PageBundle = {
  en: {
    title: "Forex Broker Review Methodology",
    description: "See how BrokerTrusted evaluates forex brokers using regulation, safety, spreads, fees, execution, platforms, withdrawals and support checks.",
    heading: "Forex Broker Review Methodology",
    intro: "Our methodology helps traders compare forex brokers on measurable trust, cost and usability factors rather than marketing claims.",
    keywords: ["forex broker methodology", "broker review criteria", "forex broker testing"],
    sections: [
      { title: "Safety First", body: "We prioritize regulatory status, licensing jurisdictions, investor protection, negative balance protection, segregated funds and transparent risk disclosures." },
      { title: "Trading Conditions", body: "Scores consider average spreads, commissions, swaps, execution speed, slippage, order types, platforms, account types and withdrawal experience." },
    ],
  },
  pt: {
    title: "Metodologia de Avaliação de Corretoras",
    description: "Veja como a BrokerTrusted avalia corretoras Forex com base em regulação, segurança, spreads, taxas, execução, plataformas, saques e suporte.",
    heading: "Metodologia de Avaliação",
    intro: "Nossa metodologia ajuda traders a comparar corretoras com base em confiança, custos e usabilidade mensuráveis — não em marketing.",
    keywords: ["metodologia corretoras forex", "critérios de análise", "teste de corretoras"],
    sections: [
      { title: "Segurança em Primeiro Lugar", body: "Priorizamos regulação, jurisdições de licença, proteção ao investidor, proteção contra saldo negativo, segregação de fundos e divulgações de risco." },
      { title: "Condições de Trading", body: "As notas consideram spreads médios, comissões, swaps, velocidade de execução, slippage, tipos de ordem, plataformas, tipos de conta e experiência de saque." },
    ],
  },
  es: {
    title: "Metodología de Reseña de Brókers",
    description: "Cómo evalúa BrokerTrusted a los brókers Forex: regulación, seguridad, spreads, comisiones, ejecución, plataformas, retiros y soporte.",
    heading: "Metodología de Reseña",
    intro: "Nuestra metodología ayuda a comparar brókers Forex con factores medibles de confianza, coste y usabilidad — no marketing.",
    keywords: ["metodología brókers forex", "criterios de reseña", "pruebas a brókers"],
    sections: [
      { title: "Seguridad Primero", body: "Priorizamos la regulación, jurisdicciones de licencia, protección al inversor, protección de saldo negativo, segregación de fondos y divulgaciones de riesgo." },
      { title: "Condiciones de Trading", body: "Las puntuaciones consideran spreads medios, comisiones, swaps, velocidad de ejecución, slippage, tipos de orden, plataformas, tipos de cuenta y experiencia de retiro." },
    ],
  },
};

const careersBundle: PageBundle = {
  en: {
    title: "Careers at BrokerTrusted",
    description: "Career opportunities for analysts, editors and researchers focused on forex broker reviews, regulation and trading education.",
    heading: "Careers at BrokerTrusted",
    intro: "BrokerTrusted works with researchers, editors and market specialists who understand forex trading, broker regulation and investor protection.",
    keywords: ["forex analyst careers", "broker review jobs", "financial content careers"],
    sections: [
      { title: "What We Look For", body: "We value analytical thinking, clear writing, regulatory awareness and practical understanding of forex platforms, spreads, account types and risk management." },
      { title: "Editorial Standards", body: "Every contributor follows our independent review standards, avoids conflicts of interest and supports transparent comparisons for traders." },
    ],
  },
  pt: {
    title: "Carreiras na BrokerTrusted",
    description: "Oportunidades para analistas, editores e pesquisadores em análises de corretoras Forex, regulação e educação financeira.",
    heading: "Carreiras na BrokerTrusted",
    intro: "Trabalhamos com pesquisadores, editores e especialistas de mercado que entendem Forex, regulação de corretoras e proteção ao investidor.",
    keywords: ["carreiras analista forex", "vagas análises de corretoras", "carreiras conteúdo financeiro"],
    sections: [
      { title: "O que Procuramos", body: "Valorizamos pensamento analítico, escrita clara, conhecimento regulatório e domínio prático de plataformas Forex, spreads, tipos de conta e gestão de risco." },
      { title: "Padrões Editoriais", body: "Todo colaborador segue nossos padrões de independência, evita conflitos de interesse e apoia comparações transparentes." },
    ],
  },
  es: {
    title: "Carreras en BrokerTrusted",
    description: "Oportunidades para analistas, editores e investigadores en reseñas de brókers Forex, regulación y educación financiera.",
    heading: "Carreras en BrokerTrusted",
    intro: "Trabajamos con investigadores, editores y especialistas que entienden Forex, regulación de brókers y protección al inversor.",
    keywords: ["carrera analista forex", "empleos reseñas brókers", "carreras contenido financiero"],
    sections: [
      { title: "Qué Buscamos", body: "Valoramos pensamiento analítico, escritura clara, conocimiento regulatorio y dominio práctico de plataformas Forex, spreads, tipos de cuenta y gestión del riesgo." },
      { title: "Estándares Editoriales", body: "Cada colaborador sigue nuestros estándares de independencia, evita conflictos de interés y apoya comparaciones transparentes." },
    ],
  },
};

const pressBundle: PageBundle = {
  en: {
    title: "BrokerTrusted Press & Media",
    description: "Press information for BrokerTrusted, an independent forex broker review and comparison platform covering regulated brokers and trading education.",
    heading: "BrokerTrusted Press & Media",
    intro: "BrokerTrusted publishes independent research on trusted forex brokers, broker regulation, trading costs, platform quality and market education.",
    keywords: ["BrokerTrusted press", "forex broker research", "forex media contact"],
    sections: [
      { title: "About BrokerTrusted", body: "BrokerTrusted helps traders compare regulated forex brokers through rankings, in-depth reviews, market analysis and educational guides." },
      { title: "Media Enquiries", body: "For commentary about forex broker regulation, trading platforms, spreads, broker safety or market education, contact the editorial team through the contact page." },
    ],
  },
  pt: {
    title: "Imprensa e Mídia - BrokerTrusted",
    description: "Informações para imprensa sobre a BrokerTrusted, plataforma independente de análise e comparação de corretoras Forex.",
    heading: "Imprensa e Mídia",
    intro: "A BrokerTrusted publica pesquisas independentes sobre corretoras Forex confiáveis, regulação, custos, plataformas e educação de mercado.",
    keywords: ["imprensa BrokerTrusted", "pesquisa corretoras forex", "mídia forex"],
    sections: [
      { title: "Sobre a BrokerTrusted", body: "Ajudamos traders a comparar corretoras Forex reguladas por meio de rankings, análises detalhadas, análise de mercado e guias educacionais." },
      { title: "Solicitações de Mídia", body: "Para comentários sobre regulação, plataformas, spreads, segurança ou educação de mercado, contate o time editorial pela página de Contato." },
    ],
  },
  es: {
    title: "Prensa y Medios - BrokerTrusted",
    description: "Información para prensa sobre BrokerTrusted, plataforma independiente de reseñas y comparación de brókers Forex.",
    heading: "Prensa y Medios",
    intro: "BrokerTrusted publica investigación independiente sobre brókers Forex de confianza, regulación, costes, plataformas y educación de mercado.",
    keywords: ["prensa BrokerTrusted", "investigación brókers forex", "medios forex"],
    sections: [
      { title: "Acerca de BrokerTrusted", body: "Ayudamos a comparar brókers Forex regulados mediante rankings, reseñas en profundidad, análisis de mercado y guías educativas." },
      { title: "Consultas de Medios", body: "Para comentarios sobre regulación, plataformas, spreads, seguridad o educación, contacta al equipo editorial desde la página de Contacto." },
    ],
  },
};

const allContent: Record<StaticPageKey, PageBundle> = {
  privacy,
  terms,
  cookies,
  disclaimer,
  "risk-warning": riskWarning,
  team: teamBundle,
  methodology: methodologyBundle,
  careers: careersBundle,
  press: pressBundle,
};

function resolveLang(raw: string): Lang {
  const lower = (raw || "en").toLowerCase();
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("es")) return "es";
  return "en";
}

export default function StaticInfoPage({ page }: { page: StaticPageKey }) {
  const { i18n } = useTranslation();
  const lang = resolveLang(i18n.language);
  const content = allContent[page][lang];
  const canonicalPath = page === "risk-warning" ? "/risk-warning" : `/${page}`;

  return (
    <div className="min-h-screen">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={`https://brokertrusted.com${canonicalPath}`}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{content.heading}</h1>
            {content.lastUpdated && (
              <p className="text-sm text-muted-foreground mb-6">{content.lastUpdated}</p>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{content.intro}</p>
            <div className="space-y-8">
              {content.sections.map((section) => {
                const anchor = `${page}-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <section key={section.title} aria-labelledby={anchor}>
                    <h2 id={anchor} className="text-2xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    {section.body && (
                      <p className="text-muted-foreground leading-relaxed mb-3">{section.body}</p>
                    )}
                    {section.list && (
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                        {section.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
