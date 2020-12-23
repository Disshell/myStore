package ru.disshell.Store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.disshell.Store.model.OrderDetail;
import ru.disshell.Store.model.UserCred;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findAllByUser(UserCred user);
}
