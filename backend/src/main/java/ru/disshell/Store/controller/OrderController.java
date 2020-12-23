package ru.disshell.Store.controller;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.disshell.Store.dto.OrderRequest;
import ru.disshell.Store.dto.OrderResponse;
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
    public ResponseEntity<List<OrderResponse>> getAllPosts() {
        return status(HttpStatus.OK).body(orderService.getAllOrders());
    }

}
