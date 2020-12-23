package ru.disshell.Store.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    private String name;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private Boolean isShipped;
    private Instant date;
    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "userId")
    private UserCred user;
    private String products;
}
