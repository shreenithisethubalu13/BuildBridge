package com.example.demo.service;

import com.example.demo.entity.ConstructionTask;
import com.example.demo.entity.ContractorAssignment;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.AssignmentStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ContractorAssignmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AssignmentService {

    private final ContractorAssignmentRepository repository;

    public ContractorAssignment save(ContractorAssignment assignment) {
        return repository.save(assignment);
    }

    public List<ContractorAssignment> getAll() {
        return repository.findAll();
    }

    public ContractorAssignment getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Assignment not found"));
    }

    public ContractorAssignment update(Long id, ContractorAssignment assignment) {

        ContractorAssignment existing = getById(id);

        existing.setTask(assignment.getTask());
        existing.setContractor(assignment.getContractor());
        existing.setAssignedDate(assignment.getAssignedDate());
        existing.setHourlyRate(assignment.getHourlyRate());
        existing.setHoursAllocated(assignment.getHoursAllocated());
        existing.setStatus(assignment.getStatus());

        return repository.save(existing);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // ===== Workflow Methods =====

    public List<ContractorAssignment> getByContractor(SystemUser contractor) {
        return repository.findByContractor(contractor);
    }

    public List<ContractorAssignment> getByTask(ConstructionTask task) {
        return repository.findByTask(task);
    }

    public List<ContractorAssignment> getByStatus(AssignmentStatus status) {
        return repository.findByStatus(status);
    }

    public ContractorAssignment updateStatus(Long assignmentId,
                                             AssignmentStatus status) {

        ContractorAssignment assignment = getById(assignmentId);

        assignment.setStatus(status);

        return repository.save(assignment);
    }
}