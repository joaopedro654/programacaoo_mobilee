// userController.js

const User = require('./userModel');

class UserController {
  static async login(req, res) {
    const { username, password } = req.body;

    try {
      const isValidCredentials = await User.findByCredentials(username, password);

      if (isValidCredentials) {
        res.status(200).json({ success: true, message: 'Login realizado com sucesso!' });
      } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = UserController;
