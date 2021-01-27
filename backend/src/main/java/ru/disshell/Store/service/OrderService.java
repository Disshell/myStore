package ru.disshell.Store.service;

import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;

import java.util.List;

public interface OrderService {

    List<OrderResponse> getAllOrders();

    void save(OrderRequest orderRequest);

    OrderResponse edit(Long id, OrderRequest orderRequest);

    Long delete(Long id);

    List<OrderResponse> getOrdersByUsername(String username);
}
