import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Compras from '../models/Compras';
import Fornecedores from '../models/Fornecedores';
import Produtos from '../models/Produtos';

export default {
    async index(request: Request, response: Response) {

        const comprasRepository = getRepository(Compras);

        const compras = await comprasRepository.find();
            //{}condicao
        return response.json(compras);
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;
        
        const comprasRepository = getRepository(Compras);

        const compra = await comprasRepository.findOneOrFail(id);
        return response.json(compra);
    },

    async create (request: Request, response: Response) {
        console.log(request.files);

        const {
            dataEmissao,
            quantidade,
            valorUnitario,
        } = request.body;
    
        const comprasRepository = getRepository(Compras);

        const compras = comprasRepository.create({
            dataEmissao,
            quantidade,
            valorUnitario,
        });
    
        await comprasRepository.save(compras);
    
        return response.status(201).json(compras);
    },

    async update(request: Request, response: Response) {
        const {
            dataEmissao,
            quantidade,
            valorUnitario
        } = request.body;

        const dados = {
            dataEmissao,
            quantidade,
            valorUnitario
        };

        const { id } = request.params;

        const comprasRepository = getRepository(Compras);

        const compra = await comprasRepository.update(id, dados);
        return response.send('Compra alterada com sucesso!');
    },

    async delete (request: Request, response: Response) {
        const { id } = request.params;

        const comprasRepository = getRepository(Compras);

        const Compra = await comprasRepository.delete(id);
        return response.send('Compra excluída com sucesso!');
      }
}
