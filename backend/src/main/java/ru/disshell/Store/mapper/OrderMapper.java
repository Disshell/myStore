package ru.disshell.Store.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;
import ru.disshell.Store.model.OrderDetail;
import ru.disshell.Store.model.UserCred;

import java.time.Instant;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(target = "date", expression = "java(java.time.Instant.now())")
    @Mapping(target = "user", source = "user")
    @Mapping(target = "products", source = "orderRequest.cart")
    OrderDetail mapToOrder(OrderRequest orderRequest, UserCred user);


    @Mapping(target = "user", source = "user.login")
    @Mapping(target = "cart", source = "products")
    OrderResponse mapToDto(OrderDetail order);
}
