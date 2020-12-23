package ru.disshell.Store.mapper;

import org.mapstruct.InheritConfiguration;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import ru.disshell.Store.dto.ProductDto;
import ru.disshell.Store.model.Product;


@Mapper(componentModel = "spring")
public interface ProductMapper {

    ProductDto mapProductToDto(Product product);

    @InheritInverseConfiguration
    Product mapDtpToProduct(ProductDto product);
}
