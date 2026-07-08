package com.example.demo.service;

import com.example.demo.dto.AuthRequestDto;
import com.example.demo.dto.AuthResponseDto;
import com.example.demo.dto.RegisterDto;
import com.example.demo.entity.SystemUser;
import com.example.demo.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final SystemUserRepository systemUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // Register User
    public AuthResponseDto register(RegisterDto request) {

        if (systemUserRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        if (systemUserRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        SystemUser user = SystemUser.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .fullName(request.getFullName())
                .build();

        systemUserRepository.save(user);

        String token = jwtService.generateToken(user.getUsername());

        return AuthResponseDto.builder()
                .id(user.getId())
                .token(token)
                .username(user.getUsername())
                .role(user.getRole())
                .build();
    }

    // Login User
    public AuthResponseDto login(AuthRequestDto request) {

        SystemUser user = systemUserRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("Invalid Username"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        String token = jwtService.generateToken(user.getUsername());

        return AuthResponseDto.builder()
                .id(user.getId())
                .token(token)
                .username(user.getUsername())
                .role(user.getRole())
                .build();
    }
}