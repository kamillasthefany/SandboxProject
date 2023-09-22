const Aluno = require('../models/Aluno');

const Alunos = {
    async all(request, response) {
        try {
            const alunos = await Aluno.findAll();
            return response.status(200).json(alunos);
        }
        catch (error) {
            return response.status(500).json(error);
        }

    },
    async create(request, response) {

        try {
            const { nome, telefone, data_nascimento, peso, altura, objetivo, observacao } = request.body;
            console.log('campos', nome, telefone, data_nascimento, peso, altura, objetivo, observacao)
            const aluno = await Aluno.create({ nome, telefone, data_nascimento, peso, altura, objetivo, observacao, professor_id: 1, deletado: false });
            return response.status(201).json(aluno);
        }
        catch (error) {
            console.log('erro', error)
            return response.status(500).json(error);
        }

    },
};

module.exports = Alunos;