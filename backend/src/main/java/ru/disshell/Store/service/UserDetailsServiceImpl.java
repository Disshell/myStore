package ru.disshell.Store.service;

import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.disshell.Store.model.UserCred;
import ru.disshell.Store.repository.UserRepository;

import java.util.Collection;
import java.util.Optional;

import static java.util.Collections.singletonList;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserCred> userOptional = userRepository.findByLogin(username);
        UserCred user = userOptional.orElseThrow(
                () -> new UsernameNotFoundException("No user " +
                        "Found with username : " + username)
        );

        return new org.springframework.security
                .core.userdetails.User(user.getLogin(), user.getPassword(),true, true, true, true, getAuthorities(user.getRole()));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        return singletonList(new SimpleGrantedAuthority("ROLE_" + role));
    }
}