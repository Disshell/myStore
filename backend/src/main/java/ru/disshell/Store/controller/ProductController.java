package ru.disshell.Store.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.disshell.Store.dto.ProductDto;
import ru.disshell.Store.model.Product;
import ru.disshell.Store.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@AllArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;
    @PostMapping
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(productService.save(productDto));
    }

    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(){
       return ResponseEntity
               .status(HttpStatus.OK)
               .body(productService.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long id, @RequestBody ProductDto productDto){
        return ResponseEntity.status(HttpStatus.OK).body( productService.edit(id, productDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteProduct(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(productService.delete(id));
    }





}
