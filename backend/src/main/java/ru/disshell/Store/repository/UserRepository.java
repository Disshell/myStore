package ru.disshell.Store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.disshell.Store.model.UserCred;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserCred, Long> {
    Optional<UserCred> findByLogin(String login);
}
