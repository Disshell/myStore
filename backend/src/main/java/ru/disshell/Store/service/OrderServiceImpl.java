package ru.disshell.Store.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;
import ru.disshell.Store.mapper.OrderMapper;
import ru.disshell.Store.model.OrderDetail;
import ru.disshell.Store.model.UserCred;
import ru.disshell.Store.repository.OrderRepository;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final AuthServiceImpl authService;

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getAllOrders(){
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::mapToDto)
                .collect(toList());
    }

    @Override
    @Transactional
    public void save(OrderRequest orderRequest){
        orderRepository.save(orderMapper.mapToOrder(orderRequest, authService.getCurrentUser()));
    }

    @Override
    @Transactional
    public OrderResponse edit(Long id, OrderRequest orderRequest) {
        Optional<OrderDetail> edit = orderRepository.findById(id);
        OrderDetail order = edit.get();
        order.setCity(orderRequest.getCity());
        order.setDate(orderRequest.getDate());
        order.setIsShipped(orderRequest.getIsShipped());
        order.setName(orderRequest.getName());
        order.setProducts(orderRequest.getCart());
        order.setState(orderRequest.getState());
        order.setStreet(orderRequest.getStreet());
        order.setZipCode(orderRequest.getZipCode());
        orderRepository.save(order);
        return orderMapper.mapToDto(order);
    }

    @Override
    @Transactional
    public Long delete(Long id){
        orderRepository.deleteById(id);
        return  id;
    }

    @Override
    @Transactional(readOnly = true)
public List<OrderResponse> getOrdersByUsername(String username){
        UserCred curUser = authService.getCurrentUser();
        if (curUser.getLogin().equals(username)) {
            return orderRepository.findAllByUser(curUser)
                    .stream()
                    .map(orderMapper::mapToDto)
                    .collect(toList());
        }
        else
            return null;
    }


}
