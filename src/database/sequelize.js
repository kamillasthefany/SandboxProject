const { Sequelize } = require("sequelize");

const Usuario = require("../app/models/Usuario");
const Token = require("../app/models/Token");
const Cliente = require("../app/models/Cliente");
const Venda = require("../app/models/Venda");
const Aluno = require("../app/models/Aluno");

const sequelize = new Sequelize(
  process.env.DATABASE,
  'postgres',
  process.env.PASSWORD,
  {
    host: 'localhost',
    dialect:'postgres',
    define: {
      timestamps: true,
      underscored: true,
    },
    dialectOptions: {},
  }
);

Usuario.init(sequelize);
Token.init(sequelize);
// Cliente.init(sequelize);
//Venda.init(sequelize);
//Aluno.init(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Conectado com sucesso"))
  .catch((error) => console.error("Erro ao conectar: ", error));

module.exports = sequelize;
