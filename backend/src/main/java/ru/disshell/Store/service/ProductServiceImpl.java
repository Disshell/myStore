package ru.disshell.Store.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.ProductDto;
import ru.disshell.Store.mapper.ProductMapper;
import ru.disshell.Store.model.Product;
import ru.disshell.Store.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    @Transactional
    public ProductDto save(ProductDto productDto) {
        Product save = productRepository.save(productMapper.mapDtpToProduct(productDto));
        productDto.setProductId(save.getProductId());
        return productDto;
    }


    @Override
    @Transactional(readOnly = true)
    public List<ProductDto> getAll() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::mapProductToDto)
                .collect(toList());
    }

    @Override
    @Transactional
    public ProductDto edit(Long productId, ProductDto productDto) {
        Optional<Product> edit = productRepository.findById(productId);
        Product product = edit.get();
        product.setCategory(productDto.getCategory());
        product.setDescription(productDto.getDescription());
        product.setImg(productDto.getImg());
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        productRepository.save(product);
        return productMapper.mapProductToDto(product);
    }

    @Override
    @Transactional
    public long delete(Long productId){
        productRepository.deleteById(productId);
        return productId;
    }
}


