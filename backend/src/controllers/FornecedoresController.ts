import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Fornecedores from '../models/Fornecedores';

export default {
    async index(request: Request, response: Response) {

        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedores = await fornecedoresRepository.find();
            //{}condicao
        return response.json(fornecedores);
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;
        
        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedor = await fornecedoresRepository.findOneOrFail(id);
        return response.json(fornecedor);
    },

    async create (request: Request, response: Response) {
        const {
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor,
        } = request.body;

        const fornecedoresRepository = getRepository(Fornecedores);

        //condicional
        //email

        const emailExist = await fornecedoresRepository.find({ emailFornecedor })
        
        if (emailExist.length > 0) {
            return response.status(400).json({ Error: "Email já cadastrado." })
        }

        //telefone

        const telExist = await fornecedoresRepository.find({ telefoneFornecedor })
        
        if (telExist.length > 0) {
            return response.status(400).json({ Error: "Telefone já cadastrado." })
        }

        //fim condicional

        const fornecedores = fornecedoresRepository.create({
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor,
        });
    
        await fornecedoresRepository.save(fornecedores);
    
        return response.status(201).json(fornecedores);
    },

    async update(request: Request, response: Response) {
        const {
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor
        } = request.body;

        const dados = {
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor
        };

        const { id } = request.params;

        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedor = await fornecedoresRepository.update(id, dados);
        return response.send('Fornecedor alterado com sucesso');
    },

    async delete (request: Request, response: Response) {
        const { id } = request.params;

        const fornecedoresRepository = getRepository(Fornecedores);

        const Fornecedor = await fornecedoresRepository.delete(id);
        return response.send('Fornecedor excluído com sucesso');
      }
}
