package com.example.demo.service;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.InquiryStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ProjectInquiryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InquiryService {

    private final ProjectInquiryRepository repository;

    public ProjectInquiry save(ProjectInquiry inquiry) {
        return repository.save(inquiry);
    }

    public List<ProjectInquiry> getAll() {
        return repository.findAll();
    }

    public ProjectInquiry getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project Inquiry not found"));
    }

    public ProjectInquiry update(Long id, ProjectInquiry inquiry) {

        ProjectInquiry existing = getById(id);

        existing.setSiteName(inquiry.getSiteName());
        existing.setProjectType(inquiry.getProjectType());
        existing.setLocation(inquiry.getLocation());
        existing.setBhkCount(inquiry.getBhkCount());
        existing.setFloorCount(inquiry.getFloorCount());
        existing.setBudget(inquiry.getBudget());
        existing.setDuration(inquiry.getDuration());
        existing.setStartDate(inquiry.getStartDate());
        existing.setEndDate(inquiry.getEndDate());
        existing.setStatus(inquiry.getStatus());

        return repository.save(existing);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // ===== Workflow Methods =====

    public List<ProjectInquiry> getByClient(SystemUser client) {
        return repository.findByClient(client);
    }

    public List<ProjectInquiry> getByContractor(SystemUser contractor) {
        return repository.findByContractor(contractor);
    }

    public List<ProjectInquiry> getByStatus(InquiryStatus status) {
        return repository.findByStatus(status);
    }

    public ProjectInquiry assignContractor(Long inquiryId, SystemUser contractor) {

        ProjectInquiry inquiry = getById(inquiryId);

        inquiry.setContractor(contractor);
        inquiry.setStatus(InquiryStatus.ASSIGNED);

        return repository.save(inquiry);
    }

    public ProjectInquiry updateStatus(Long inquiryId, InquiryStatus status) {

        ProjectInquiry inquiry = getById(inquiryId);

        inquiry.setStatus(status);

        return repository.save(inquiry);
    }
}