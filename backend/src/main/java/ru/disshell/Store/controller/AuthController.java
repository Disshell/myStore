package ru.disshell.Store.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.disshell.Store.dto.AuthenticationResponse;
import ru.disshell.Store.dto.LoginRequest;
import ru.disshell.Store.dto.RegisterRequest;
import ru.disshell.Store.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup (@RequestBody RegisterRequest registerRequest){
        authService.signup(registerRequest);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @PostMapping("/login")
    public AuthenticationResponse login (@RequestBody LoginRequest loginRequest){
        return authService.login(loginRequest);
    }

}
