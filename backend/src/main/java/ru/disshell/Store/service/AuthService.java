package ru.disshell.Store.service;

import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.dto.AuthenticationResponse;
import ru.disshell.Store.dto.LoginRequest;
import ru.disshell.Store.dto.RefreshTokenRequest;
import ru.disshell.Store.dto.RegisterRequest;

public interface AuthService {
    void signup(RegisterRequest registerRequest);

    AuthenticationResponse login(LoginRequest loginRequest);

    AuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
