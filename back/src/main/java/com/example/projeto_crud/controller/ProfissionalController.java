package com.example.projeto_crud.controller;

import com.example.projeto_crud.entity.Profissional;
import com.example.projeto_crud.service.ProfissionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/profissional")
public class ProfissionalController {

    @Autowired
    private ProfissionalService profissionalService;

    @GetMapping(path = "/list")
    public ResponseEntity<List<Profissional>> findAll() {
        return ResponseEntity.ok(profissionalService.findAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Profissional> findProfissional(@PathVariable Long id) {
        Optional<Profissional> profissional = profissionalService.findProfissional(id);

        return profissional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Profissional> saveProfissional(@RequestBody Profissional profissional,
                                                         HttpServletRequest request) {
        Profissional savedProfissional = profissionalService.saveProfissional(profissional);
        String uri = request.getRequestURL().toString() + "/" + savedProfissional.getProfissional_id();

        return ResponseEntity.created(URI.create(uri)).body(savedProfissional);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Profissional> updateProfissional(@PathVariable Long id,
                                                           @RequestBody Profissional profissional) {
        return ResponseEntity.ok(profissionalService.updateProfissional(id, profissional));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Profissional> deleteProfissional(@PathVariable Long id) {
        profissionalService.deleteProfissional(id);

        return ResponseEntity.noContent().build();
    }
}
