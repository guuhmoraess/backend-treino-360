
const CheckinService = require('../services/checkinServices');

class CheckinController {
  static async realizarCheckin(req, res) {
    const academiaNome = req.query.academia;
    const alunoNome = req.query.aluno;

    try {
      const resultadoCheckin = await CheckinService.realizarCheckin(academiaNome, alunoNome);
      res.status(200).json(resultadoCheckin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = CheckinController;
