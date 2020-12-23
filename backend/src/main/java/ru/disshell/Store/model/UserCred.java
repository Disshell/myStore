package ru.disshell.Store.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCred {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String login;
    private String password;
    private String role;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<OrderDetail> orders;
}
