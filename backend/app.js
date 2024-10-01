import express from 'express';
import cors from 'cors';
import { sequelize } from './database/conecta.js';
import { Livro } from './models/Livro.js';
import { Cliente } from './models/Cliente.js';
import { Avaliacao } from './models/Avaliacao.js';
import { Admin } from './models/Admin.js';
import routes from './routes.js';

const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Sistema de Controle da Gráfica Avenida');
});

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com Banco de Dados realizada com Sucesso');

    // Sincronizando a tabela Admin primeiro
    await Admin.sync({ force: true });
    console.log("Tabela de Admins: Ok");

    // Sincronizando as outras tabelas
    await Cliente.sync({ alter: true });
    console.log("Tabela de Clientes: Ok");

    await Livro.sync({ alter: true });
    console.log("Tabela de Livros: Ok");

    await Avaliacao.sync({ alter: true });
    console.log("Tabela de Avaliações: Ok");

  } catch (error) {
    console.error('Erro ao conectar o banco de dados:', error);
  }
}

conecta_db();

app.listen(port, () => {
  console.log(`API da Gráfica Rodando na Porta: ${port}`);
});
