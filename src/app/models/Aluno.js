const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      professor_id: DataTypes.INTEGER,
      telefone: DataTypes.STRING,
      peso: DataTypes.DECIMAL,
      altura: DataTypes.INTEGER,
      objetivo: DataTypes.STRING,
      observacao: DataTypes.STRING,
      deletado: DataTypes.BOOLEAN,
      data_nascimento: DataTypes.DATE,
    },
      {
        sequelize: connection,
        tableName: 'alunos',
      });

    return this;
  }
}

module.exports = Aluno;