package ru.disshell.Store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private Long OrderId;
    private String name;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private Boolean isShipped;
    private Instant date;
    private String products;
}
