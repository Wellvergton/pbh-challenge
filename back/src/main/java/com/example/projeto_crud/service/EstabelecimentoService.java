package com.example.projeto_crud.service;

import com.example.projeto_crud.entity.Estabelecimento;
import com.example.projeto_crud.repository.EstabelecimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstabelecimentoService {

    @Autowired
    private EstabelecimentoRepository estabelecimentoRepository;

    public List<Estabelecimento> findAll() {
        return estabelecimentoRepository.findAll();
    }

    public Optional<Estabelecimento> findEstabelecimento(Long id) {
        return estabelecimentoRepository.findById(id);
    }

    public Estabelecimento saveEstabelecimeto(Estabelecimento estabelecimento) {
        return estabelecimentoRepository.save(estabelecimento);
    }

    public Estabelecimento updateEstabelecimento(Long id, Estabelecimento estabelecimento) {
        estabelecimento.setEstabelecimento_id(id);

        return estabelecimentoRepository.save(estabelecimento);
    }

    public void deleteEstabelecimento(Long id) {
        estabelecimentoRepository.deleteById(id);
    }
}
