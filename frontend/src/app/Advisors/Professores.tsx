"use client";
import styles from "./page.module.css";
import ProfessorCard from "./advisors";

interface Professor {
  nome: string;
  disciplina: string;
  descricao: string;
  foto: string;
  linkedin?: string;
  lattes?: string;
}

export default function Professores() {
  const professores: Professor[] = [
{
  nome: "Rodrigo Remor Oliveira",
  disciplina: "POO",
  descricao: "Sou professor efetivo no Instituto Federal de Educação, Ciência e Tecnologia Sul-Rio-Grandense (IFSul), campus Sapucaia do Sul. Possuo mestrado em Computação Aplicada (2013) pela Universidade do Vale do Rio dos Sinos (Unisinos), e graduação em Engenharia de Computação (2008) pela Universidade Federal do Rio Grande (FURG). Também tenho formação técnica em desenvolvimento de software pelo Instituto Federal do Rio Grande do Sul (IFRS). Como professor busco realizar transformação social fomentando o conhecimento e aproximando a instituição de ensino e o arranjo produtivo local a fim de criar oportunidades e formar profissionais cada vez mais qualificados para o mundo da TI. Sou também colaborador do Grupo de Pesquisa Aplicada em Computação Móvel e Ubíqua e realizo pesquisas nas áreas de Indústria 4.0, Saúde 4.0 e Internet das Coisas. Sou membro do comitê científico do 'Workshop de Tecnologia no Ensino Médio (TecBASE/SBC)' e atuo como revisor dos periódicos internacionais 'Journal of Intelligent Systems', 'International Journal of Production Research' e 'IEEE Systems Journal'. Minhas principais áreas de interesse são: Linguagens de Programação, Computação Ubíqua e Pervasiva, Internet das Coisas, Sistemas Baseados em Localização, Web 3 e Blockchain.",
  foto: "/images/image.jpg",
  linkedin: "https://www.linkedin.com/in/rodrigoremor/",
  lattes: "http://lattes.cnpq.br/1886580308224807",
},

  ];

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>Nossos Professores</h1>

      <div className={styles.grid}>
        {professores.map((p, i) => (
          <ProfessorCard
            key={i}
            nome={p.nome}
            disciplina={p.disciplina}
            descricao={p.descricao}
            foto={p.foto}
            linkedin={p.linkedin}
            lattes={p.lattes}
            onClose={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
