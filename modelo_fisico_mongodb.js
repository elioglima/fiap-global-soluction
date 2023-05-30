/* 
    vision_db nome do banco de dados
*/
db = db.getSiblingDB("vision_db");

/* criacao de collections */
db.createCollection("user");
db.createCollection("category");
db.createCollection("registers");
db.createCollection("crw_analise");

/* 
    user collection de cadastro dos usuarios
*/
db.user.insert([
  {
    id: ObjectId("646c30fb6a2c1540564c6c83"),
    name: "Elio Lima",
    mail: "elio.lima@fiap.com.br",
    password: "Ab@102030",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    id: ObjectId("646c3bde34b5bc935d80c35a"),
    name: "Andrei Vedovato",
    mail: "andrei.vedovato@fiap.com.br",
    password: "Ab@102030",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    id: ObjectId("646c30fb6a2c1540564c6c83"),
    name: "Rafaela Rosso",
    mail: "rafaela.rosso@fiap.com.br",
    password: "Ab@102030",
    created_at: new Date(),
    updayed_at: new Date(),
  },
]);

/* 
    insere categorias para analise do crawler 
*/
db.category.insert([
  {
    id: ObjectId("646c30a16a2c1540564c6c82"),
    description: "Alertas",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    id: ObjectId("646c2fdec86fd9ee1482dbf8"),
    description: "Fome",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    id: ObjectId("646c2b210b57e2bd6bdb8871"),
    description: "Desastres",
    created_at: new Date(),
    updayed_at: new Date(),
  },
]);

/* 
    register collections com valores tratados pelo crawler 
*/
db.register.insert([
  {
    category_id: ObjectId("646c30a16a2c1540564c6c82"),
    title:
      "Governo Lula diz que há 14 mil pontos de risco de deslizamento no país",
    description:
      "Segundo o ministro da Integração e Desenvolvimento Regional, Waldez Góes, que coordena o grupo de resposta à crise no litoral norte, o governo estuda medidas como a 'desapropriação necessária' de pessoas em locais identificados como passíveis de deslizamento ...",
    city: "Regioes",
    country: "Brasil",
    region: "Regioes",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    category_id: ObjectId("646c30a16a2c1540564c6c82"),
    title: "Rompimento de barragem provoca inundações e alagamento no Ceará",
    description:
      "O rompimento de uma barragem particular, causado pelas fortes chuvas que elevaram o nível do rio Cariús, no sul do Ceará, provocou inundações e alagamento de ruas, casas, comércios e escolas do município de Farias Brito.",
    city: "Ceará",
    country: "Brasil",
    region: "Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    category_id: ObjectId("646c30a16a2c1540564c6c82"),
    title:
      "Tragédia no Litoral Norte: veja o antes e depois de locais atingidos pela chuva",
    description:
      "SDe acordo com informações da Polícia Civil, o temporal resultou em um trágico saldo de pelo menos 36 vidas perdidas, sendo 35 em São Sebastião e uma em Ubatuba. Até o momento da última atualização desta reportagem, nenhuma das vítimas teve sua identidade divulgada.",
    city: "São Paulo",
    country: "Brasil",
    region: "Litoral Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
    updayed_at: new Date(),
  },
  {
    category_id: ObjectId("646c30a16a2c1540564c6c82"),
    title:
      "Região Norte do Brasil é a mais impactada pela insegurança alimentar",
    description:
      "A fome que avança pelo Brasil atinge percentualmente mais os moradores da Região Norte: 71,6% sofrem com a insegurança alimentar e a fome extrema faz parte do cotidiano de 25,7% das famílias — índice maior que a média nacional de aproximadamente 15%.",
    city: "Regioes",
    country: "Brasil",
    region: "Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
    updayed_at: new Date(),
  },
]);

/* 
    crw_analise collection de entrada do crawler 
*/
db.crw_analise.insert([
  {
    title:
      "Governo Lula diz que há 14 mil pontos de risco de deslizamento no país",
    description:
      "Segundo o ministro da Integração e Desenvolvimento Regional, Waldez Góes, que coordena o grupo de resposta à crise no litoral norte, o governo estuda medidas como a 'desapropriação necessária' de pessoas em locais identificados como passíveis de deslizamento ...",
    city: "Regioes",
    country: "Brasil",
    region: "Regioes",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
  },
  {
    title: "Rompimento de barragem provoca inundações e alagamento no Ceará",
    description:
      "O rompimento de uma barragem particular, causado pelas fortes chuvas que elevaram o nível do rio Cariús, no sul do Ceará, provocou inundações e alagamento de ruas, casas, comércios e escolas do município de Farias Brito.",
    city: "Ceará",
    country: "Brasil",
    region: "Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
  },
  {
    title:
      "Tragédia no Litoral Norte: veja o antes e depois de locais atingidos pela chuva",
    description:
      "SDe acordo com informações da Polícia Civil, o temporal resultou em um trágico saldo de pelo menos 36 vidas perdidas, sendo 35 em São Sebastião e uma em Ubatuba. Até o momento da última atualização desta reportagem, nenhuma das vítimas teve sua identidade divulgada.",
    city: "São Paulo",
    country: "Brasil",
    region: "Litoral Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
  },
  {
    title:
      "Região Norte do Brasil é a mais impactada pela insegurança alimentar",
    description:
      "A fome que avança pelo Brasil atinge percentualmente mais os moradores da Região Norte: 71,6% sofrem com a insegurança alimentar e a fome extrema faz parte do cotidiano de 25,7% das famílias — índice maior que a média nacional de aproximadamente 15%.",
    city: "Regioes",
    country: "Brasil",
    region: "Norte",
    url_reference: "https://urlreference.foto.com.br/image.jpeg",
    created_at: new Date(),
  },
]);
