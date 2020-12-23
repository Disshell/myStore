package ru.disshell.Store.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;
import ru.disshell.Store.mapper.OrderMapper;
import ru.disshell.Store.model.OrderDetail;
import ru.disshell.Store.repository.OrderRepository;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final AuthService authService;

    @Transactional(readOnly = true)
    public List<OrderResponse> getAllOrders(){
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::mapToDto)
                .collect(toList());
    }

    @Transactional
    public void save(OrderRequest orderRequest){
        orderRepository.save(orderMapper.mapToOrder(orderRequest, authService.getCurrentUser()));
    }

}
