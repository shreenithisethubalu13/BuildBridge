package com.example.demo.repository;

import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.entity.enums.InquiryStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectInquiryRepository extends JpaRepository<ProjectInquiry, Long> {

    List<ProjectInquiry> findByClient(SystemUser client);

    List<ProjectInquiry> findByContractor(SystemUser contractor);

    List<ProjectInquiry> findByStatus(InquiryStatus status);

    long countByStatus(InquiryStatus status);
}