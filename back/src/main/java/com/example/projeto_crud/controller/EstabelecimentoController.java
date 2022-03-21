package com.example.projeto_crud.controller;

import com.example.projeto_crud.entity.Estabelecimento;
import com.example.projeto_crud.service.EstabelecimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/estabelecimento")
public class EstabelecimentoController {

    @Autowired
    private EstabelecimentoService estabelecimentoService;

    @GetMapping("/list")
    public ResponseEntity<List<Estabelecimento>> findAll() {
        return ResponseEntity.ok(estabelecimentoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estabelecimento> findEstabelecimento(@PathVariable Long id) {
        Optional<Estabelecimento> estabelecimento = estabelecimentoService.findEstabelecimento(id);

        return estabelecimento.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Estabelecimento> saveEstabelecimento(@RequestBody Estabelecimento estabelecimento,
                                                               HttpServletRequest request) {
        Estabelecimento savedEstabelecimento = estabelecimentoService.saveEstabelecimeto(estabelecimento);
        String uri = request.getRequestURL() + "/" + savedEstabelecimento.getEstabelecimento_id();

        return ResponseEntity.created(URI.create(uri)).body(savedEstabelecimento);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estabelecimento> updateEstablecimento(@PathVariable Long id,
                                                                @RequestBody Estabelecimento estabelecimento) {
        return ResponseEntity.ok(estabelecimentoService.updateEstabelecimento(id, estabelecimento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Estabelecimento> deleteEstabelecimento(@PathVariable Long id) {
        estabelecimentoService.deleteEstabelecimento(id);

        return ResponseEntity.noContent().build();
    }
}
