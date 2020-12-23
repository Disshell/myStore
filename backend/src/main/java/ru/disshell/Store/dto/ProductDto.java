package ru.disshell.Store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.disshell.Store.model.Product;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {
    private Long productId;
    private String name;
    private String category;
    private String description;
    private String price;
    private String img;
}
