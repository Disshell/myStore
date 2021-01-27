package ru.disshell.Store.service;

import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto save(ProductDto productDto);

    List<ProductDto> getAll();

    ProductDto edit(Long productId, ProductDto productDto);

    long delete(Long productId);
}
