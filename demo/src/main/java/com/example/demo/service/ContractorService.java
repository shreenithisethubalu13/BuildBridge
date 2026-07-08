package com.example.demo.service;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ProjectInquiryRepository;
import com.example.demo.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContractorService {

    private final ProjectInquiryRepository inquiryRepository;
    private final SystemUserRepository userRepository;

    public List<ProjectInquiry> getAssignedProjects(String username) {

        SystemUser contractor = userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Contractor not found"));

        return inquiryRepository.findByContractor(contractor);

    }

}