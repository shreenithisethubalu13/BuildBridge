package com.example.demo.config;

import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.Role;
import com.example.demo.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

// @Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final SystemUserRepository systemUserRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (systemUserRepository.count() == 0) {

            systemUserRepository.save(
                    SystemUser.builder()
                            .username("client")
                            .email("client@buildbridge.com")
                            .password(passwordEncoder.encode("client123"))
                            .fullName("Default Client")
                            .role(Role.CLIENT)
                            .build()
            );

            systemUserRepository.save(
                    SystemUser.builder()
                            .username("contractor")
                            .email("contractor@buildbridge.com")
                            .password(passwordEncoder.encode("contractor123"))
                            .fullName("Default Contractor")
                            .role(Role.CONTRACTOR)
                            .build()
            );

            systemUserRepository.save(
                    SystemUser.builder()
                            .username("supervisor")
                            .email("supervisor@buildbridge.com")
                            .password(passwordEncoder.encode("supervisor123"))
                            .fullName("Default Supervisor")
                            .role(Role.SUPERVISOR)
                            .build()
            );

            System.out.println("Default users created successfully.");
        }
    }
}