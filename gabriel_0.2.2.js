//Faça a modelagem e definição de um objeto que represente o usuário de um sistema. O sistema é um sistema de blog. O objeto deve ter dados básicos de cadastro do usuário e também deve ter informações relacionadas aos artigos que foram postados pelo usuário e os artigos que ainda estão em processo de escrita. Além disso, o objeto deve conter dados relacionados aos comentários de outros usuários na postagem. 

const usuarios = [
  {
    id: 1,
    login :'Marcos Etimologico',
    senha:'@1231230@',
    historicoPostagens:
      [
        {
          postsAprovados,
        },
        {
          postsSubmetidos
        },
        {
          comentarios
        }
      ]
  },
  {
    id: 2,
    login: 'Venceslau',
    senha:'239423581',
    historicoPostagens:
      [
        {
          postsAprovados1,
        },
        {
          postsSubmetidos1
        },
        {
          comentarios1
        }
      ]
  },
  {
    id: 3,
    login: 'Aldair',
    senha:'101039482',
    historicoPostagens:
      [
        {
          postsAprovados2,
        },
        {
          postsSubmetidos2
        },
        {
          comentarios2
        }
      ]
  }
];


const postsAprovados = [
  {
    titulo: 'Que dor',
    data_publicacao: '2020-08-08',
    status: 'PUBLICADO',
    comentarios:[
      {
        nome:'Venceslau', 
        comentario:'Boa'
       },
       {
        nome: 'Aldair',
        comentario:'Lixo'
       }
    ]
  }  
];
const postsSubmetidos = [
  {
    titulo: 'MILAGRES DE MÃE DINA',
    data_publicacao: '2022-10-10',
    status: 'AGUARDANDO APROVACAO',
  }
];

