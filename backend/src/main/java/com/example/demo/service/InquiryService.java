package com.example.demo.service;

import com.example.demo.dto.InquiryRequestDto;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.InquiryStatus;
import com.example.demo.entity.enums.Role;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ProjectInquiryRepository;
import com.example.demo.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InquiryService {

    private final ProjectInquiryRepository repository;
    private final SystemUserRepository userRepository;

    // Create Inquiry
    public ProjectInquiry save(InquiryRequestDto request) {

        SystemUser client = userRepository.findAll()
                .stream()
                .filter(user -> user.getRole() == Role.CLIENT)
                .findFirst()
                .orElseThrow(() ->
                        new ResourceNotFoundException("No Client Found"));

        ProjectInquiry inquiry = ProjectInquiry.builder()
                .siteName(request.getSiteName())
                .client(client)
                .projectType(request.getProjectType())
                .location(request.getLocation())
                .bhkCount(request.getBhkCount())
                .floorCount(request.getFloorCount())
                .budget(BigDecimal.valueOf(request.getBudget()))
                .duration(request.getDuration())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .status(InquiryStatus.PENDING)
                .build();

        return repository.save(inquiry);
    }

    // Get All
    public List<ProjectInquiry> getAll() {
        return repository.findAll();
    }

    // Get By ID
    public ProjectInquiry getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found"));
    }

    // Update
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

    // Delete
    public void delete(Long id) {
        repository.deleteById(id);
    }

    // Client Projects
    public List<ProjectInquiry> getByClient(SystemUser client) {
        return repository.findByClient(client);
    }

    // Contractor Projects
    public List<ProjectInquiry> getByContractor(SystemUser contractor) {
        return repository.findByContractor(contractor);
    }

    // Status Filter
    public List<ProjectInquiry> getByStatus(InquiryStatus status) {
        return repository.findByStatus(status);
    }

    // My Projects
    public List<ProjectInquiry> getMyProjects(String username) {

        SystemUser client = userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        return repository.findByClient(client);
    }

    // Get Contractors
    public List<SystemUser> getAllContractors() {
        return userRepository.findByRole(Role.CONTRACTOR);
    }

    // Assign Contractor
    public ProjectInquiry assignContractor(Long inquiryId, Long contractorId) {

        ProjectInquiry inquiry = getById(inquiryId);

        SystemUser contractor = userRepository.findById(contractorId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Contractor not found"));

        inquiry.setContractor(contractor);
        inquiry.setStatus(InquiryStatus.ASSIGNED);

        return repository.save(inquiry);
    }

    // Update Status
    public ProjectInquiry updateStatus(Long inquiryId, InquiryStatus status) {

        ProjectInquiry inquiry = getById(inquiryId);

        inquiry.setStatus(status);

        return repository.save(inquiry);
    }

    // Dashboard Counts
    public long totalProjects() {
        return repository.count();
    }

    public long pendingProjects() {
        return repository.countByStatus(InquiryStatus.PENDING);
    }

    public long assignedProjects() {
        return repository.countByStatus(InquiryStatus.ASSIGNED);
    }

    public long completedProjects() {
        return repository.countByStatus(InquiryStatus.COMPLETED);
    }
}