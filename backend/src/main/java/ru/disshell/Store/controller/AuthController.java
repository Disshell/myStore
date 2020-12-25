package ru.disshell.Store.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.disshell.Store.dto.AuthenticationResponse;
import ru.disshell.Store.dto.LoginRequest;
import ru.disshell.Store.dto.RefreshTokenRequest;
import ru.disshell.Store.dto.RegisterRequest;
import ru.disshell.Store.model.RefreshToken;
import ru.disshell.Store.service.AuthService;
import ru.disshell.Store.service.RefreshTokenService;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup (@RequestBody RegisterRequest registerRequest){
        authService.signup(registerRequest);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @PostMapping("/login")
    public AuthenticationResponse login (@RequestBody LoginRequest loginRequest){
        return authService.login(loginRequest);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(RefreshTokenRequest refreshTokenRequest) {
        refreshTokenService.deleteRefreshToken(refreshTokenRequest.getRefreshToken());
        return ResponseEntity.status(HttpStatus.OK).body("Refresh Token Deleted Successfully!!");
    }
}
