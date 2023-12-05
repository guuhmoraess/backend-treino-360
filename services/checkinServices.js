const AlunoModel = require('../models/usersModels');
const AcademiaModel = require('../models/academiaModel');

async function fazerCheckIn(req, res) {
  const { academia: nomeAcademia, aluno: nomeAluno } = req.query;

  if (!nomeAcademia || !nomeAluno) {
      return res.status(400).json({ error: 'Parâmetros aluno e academia são obrigatórios' });
  }

  try {
      const alunoEncontrado = await AlunoModel.findOne({ nome: nomeAluno });
      const academiaEncontrada = await AcademiaModel.findOne({ nome: nomeAcademia });

      if (!alunoEncontrado || !academiaEncontrada) {
          return res.status(404).json({
              aluno: nomeAluno,
              academia: nomeAcademia,
              isCheckInSuccess: false
          });
      }

      return res.status(200).json({
          aluno: alunoEncontrado.nome,
          academia: academiaEncontrada.nome,
          isCheckInSuccess: true,
      });
  } catch (error) {
      console.error('Erro ao fazer check-in:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { fazerCheckIn };
