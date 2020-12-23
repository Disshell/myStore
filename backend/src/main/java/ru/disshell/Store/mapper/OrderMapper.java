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
    OrderDetail mapToOrder(OrderRequest orderRequest, UserCred user);

    @Mapping(target = "id", source = "orderId")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "street", source = "street")
    @Mapping(target = "zipCode", source = "zipCode")
    @Mapping(target = "isShipped", source = "isShipped")
    @Mapping(target = "date", source = "date")
    @Mapping(target = "user", source = "user.login")
    @Mapping(target = "products", source = "products")
    OrderResponse mapToDto(OrderDetail order);
}
