import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Produtos from '../models/Produtos';

export default {
    async index(request: Request, response: Response) {

        const produtosRepository = getRepository(Produtos);

        const produtos = await produtosRepository.find();
            //{}condicao
        return response.json(produtos);
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;
        
        const produtosRepository = getRepository(Produtos);

        const produto = await produtosRepository.findOneOrFail(id);
        return response.json(produto);
    },

    async create (request: Request, response: Response) {
        const {
            nomeProduto,
            unidadeMedida,
            fotoProduto,
        } = request.body;
    
        const produtosRepository = getRepository(Produtos);

        //condicional
        //produto

        const produtoExist = await produtosRepository.find({ nomeProduto })
        
        if (produtoExist.length > 0) {
            return response.status(400).json({ Error: "Produto já cadastrado." })
        }

        //fim condicional

        const produtos = produtosRepository.create({
            nomeProduto,
            unidadeMedida,
            fotoProduto,
        });
    
        await produtosRepository.save(produtos);
    
        return response.status(201).json(produtos);
    },

    async update(request: Request, response: Response) {
        const {
            nomeProduto,
            unidadeMedida,
            fotoProduto,
        } = request.body;

        const dados = {
            nomeProduto,
            unidadeMedida,
            fotoProduto};

        const { id } = request.params;

        const produtosRepository = getRepository(Produtos);

        const produto = await produtosRepository.update(id, dados);
        return response.send('Produto alterado com sucesso');
    },

    async delete (request: Request, response: Response) {
        const { id } = request.params;

        const produtosRepository = getRepository(Produtos);

        const Produto = await produtosRepository.delete(id);
        return response.send('Produto excluído com sucesso');
      }
}
