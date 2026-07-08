package com.example.demo.service;

import com.example.demo.entity.DailyWorkLog;
import com.example.demo.entity.ProjectInquiry;
import com.example.demo.entity.SystemUser;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.DailyWorkLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LogReportingService {

    private final DailyWorkLogRepository repository;

    public DailyWorkLog save(DailyWorkLog log) {
        return repository.save(log);
    }

    public List<DailyWorkLog> getAll() {
        return repository.findAll();
    }

    public DailyWorkLog getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Work Log not found"));
    }

    public DailyWorkLog update(Long id, DailyWorkLog log) {

        DailyWorkLog existing = getById(id);

        existing.setProject(log.getProject());
        existing.setSupervisor(log.getSupervisor());
        existing.setLogDate(log.getLogDate());
        existing.setLaborCount(log.getLaborCount());
        existing.setWeatherCondition(log.getWeatherCondition());
        existing.setNotes(log.getNotes());
        existing.setProgressIncrement(log.getProgressIncrement());

        return repository.save(existing);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // ===== Reporting Methods =====

    public List<DailyWorkLog> getByProject(ProjectInquiry project) {
        return repository.findByProject(project);
    }

    public List<DailyWorkLog> getBySupervisor(SystemUser supervisor) {
        return repository.findBySupervisor(supervisor);
    }

    public List<DailyWorkLog> getByLogDate(LocalDate logDate) {
        return repository.findByLogDate(logDate);
    }
}