package ru.disshell.Store.controller;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;
import ru.disshell.Store.dto.ProductDto;
import ru.disshell.Store.service.OrderService;

import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/api/order")
@AllArgsConstructor
@Slf4j
public class OrderController {

    public final OrderService orderService;

    @PostMapping
    ResponseEntity<Void> createOrder(@RequestBody OrderRequest orderRequest){
          orderService.save(orderRequest);
          return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<OrderResponse>> getAllOrder() {
        return status(HttpStatus.OK).body(orderService.getAllOrders());
    }
    @GetMapping("/{login}")
    public ResponseEntity<List<OrderResponse>> getOrdersByUsername(@PathVariable String login) {
        return status(HttpStatus.OK).body(orderService.getOrdersByUsername(login));
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<OrderResponse> updateOrder(@PathVariable Long id, @RequestBody OrderRequest orderRequest){
        return ResponseEntity.status(HttpStatus.OK).body( orderService.edit(id, orderRequest));
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Long> deleteOrder(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body( orderService.delete(id));
    }

}
