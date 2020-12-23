package ru.disshell.Store.service;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.disshell.Store.dto.AuthenticationResponse;
import ru.disshell.Store.dto.LoginRequest;
import ru.disshell.Store.dto.RegisterRequest;
import ru.disshell.Store.exception.StoreException;
import ru.disshell.Store.model.UserCred;
import ru.disshell.Store.repository.UserRepository;
import ru.disshell.Store.security.JwtProvider;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;

    @Transactional
    public void signup(RegisterRequest registerRequest){
        UserCred user = new UserCred();
        user.setLogin(registerRequest.getLogin());
        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);
    }

    public AuthenticationResponse login(LoginRequest loginRequest) {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getLogin(),
                loginRequest.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        jwtProvider.generateToken(authenticate);
        String token = jwtProvider.generateToken(authenticate);
            return new AuthenticationResponse(token, loginRequest.getLogin(), authenticate.getAuthorities().toString() );
    }

    @Transactional(readOnly = true)
    UserCred getCurrentUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.
                getContext().getAuthentication().getPrincipal();
        return userRepository.findByLogin(principal.getUsername())
                .orElseThrow(() -> new StoreException("User name not found - " + principal.getUsername()));
    }
}
