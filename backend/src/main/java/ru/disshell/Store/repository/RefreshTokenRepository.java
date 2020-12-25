package ru.disshell.Store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.disshell.Store.model.RefreshToken;
import javax.swing.text.html.Option;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findByToken(String token);

    void deleteByToken(String token);

}
