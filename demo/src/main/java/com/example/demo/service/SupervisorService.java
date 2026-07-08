package com.example.demo.service;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.enums.InquiryStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ProjectInquiryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupervisorService {

    private final ProjectInquiryRepository inquiryRepository;

    // Get all projects assigned to supervisor
    public List<ProjectInquiry> getProjects() {

        return inquiryRepository.findAll();

    }

    // Update Status
    public ProjectInquiry updateStatus(Long id, InquiryStatus status) {

        ProjectInquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found"));

        inquiry.setStatus(status);

        return inquiryRepository.save(inquiry);

    }

}