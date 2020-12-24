package ru.disshell.Store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private Long orderId;
    private String name;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private Boolean isShipped;
    private Instant date;
    private String user;
    private String cart;
}

