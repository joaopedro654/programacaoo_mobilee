// userModel.js

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    static async findByCredentials(username, password) {
      // Aqui você pode implementar a lógica para buscar o usuário no banco de dados
      // e verificar se as credenciais estão corretas
      // Retorne true se as credenciais forem válidas ou false caso contrário
      return false;
    }
  }
  
  module.exports = User;
  