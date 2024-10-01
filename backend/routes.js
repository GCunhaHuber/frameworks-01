import { Router } from "express"
import { livroCreate, livroDelete, livroDestaqueUpdate, livroIndex, livroPesquisa, livroShow, livroUpdate } from "./controllers/livroController.js"
import { clienteCreate, clienteIndex } from "./controllers/clienteController.js"
import { loginCliente } from "./controllers/loginController.js"
import { avaliacaoCreate, avaliacaoDestroy, avaliacaoLivro, avaliacaoGraphEstrelas, avaliacaoIndex, dadosGerais } from "./controllers/avaliacaoController.js"
import { loginAdmin } from "./controllers/adminLoginController.js"
import { adminCreate, adminIndex } from "./controllers/adminController.js"
import { verificaToken } from "./middlewares/verificaToken.js"

const router = Router()

router.get("/livros", livroIndex)
      .post("/livros", verificaToken, livroCreate)
      .put("/livros/:id", verificaToken, livroUpdate)
      .delete("/livros/:id", verificaToken, livroDelete)
      .get("/livros/:id", livroShow)
      .get("/livros/pesquisa/:palavra", livroPesquisa)
      .put("/livros/destacar/:id", verificaToken, livroDestaqueUpdate)

router.get("/clientes", clienteIndex)
      .post("/clientes", clienteCreate)

router.post("/login", loginCliente)

router.get('/avaliacoes', avaliacaoIndex)
      .post('/avaliacoes', avaliacaoCreate)
      .delete('/avaliacoes/:id', avaliacaoDestroy)
      .get('/avaliacoes/livros/:id', avaliacaoLivro)
      .get('/avaliacoes/dados/estrelas', avaliacaoGraphEstrelas)

router.get('/dadosGerais', dadosGerais)

router.get('/admin', adminIndex)
      .post('/admin', adminCreate)

router.post("/loginAdmin", loginAdmin)

export default router