package com.example.projeto_crud.service;

import com.example.projeto_crud.entity.Profissional;
import com.example.projeto_crud.repository.ProfissionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfissionalService {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    public List<Profissional> findAll() {
        return profissionalRepository.findAll();
    }

    public Optional<Profissional> findProfissional(Long id) {
        return profissionalRepository.findById(id);
    }

    public Profissional saveProfissional(Profissional profissional) {
        return profissionalRepository.save(profissional);
    }

    public Profissional updateProfissional(Long id, Profissional profissional) {
        profissional.setProfissional_id(id);

        return profissionalRepository.save(profissional);
    }

    public void deleteProfissional(Long id) {
        profissionalRepository.deleteById(id);
    }
}
