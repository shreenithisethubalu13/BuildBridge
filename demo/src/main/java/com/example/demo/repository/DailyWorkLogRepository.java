package com.example.demo.repository;

import com.example.demo.entity.DailyWorkLog;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface DailyWorkLogRepository extends JpaRepository<DailyWorkLog, Long> {

    List<DailyWorkLog> findByProject(ProjectInquiry project);

    List<DailyWorkLog> findBySupervisor(SystemUser supervisor);

    List<DailyWorkLog> findByLogDate(LocalDate logDate);

}