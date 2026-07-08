package com.example.demo.repository;

import com.example.demo.entity.ConstructionTask;
import com.example.demo.entity.ContractorAssignment;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.AssignmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContractorAssignmentRepository extends JpaRepository<ContractorAssignment, Long> {

    List<ContractorAssignment> findByContractor(SystemUser contractor);

    List<ContractorAssignment> findByTask(ConstructionTask task);

    List<ContractorAssignment> findByStatus(AssignmentStatus status);

}