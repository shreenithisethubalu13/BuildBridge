package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "daily_work_logs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class DailyWorkLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "inquiry_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private ProjectInquiry project;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "supervisor_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private SystemUser supervisor;

    @Column(name = "log_date", nullable = false)
    private LocalDate logDate;

    @Column(name = "labor_count", nullable = false)
    private Integer laborCount;

    @Column(name = "weather_condition", length = 50)
    private String weatherCondition;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "progress_increment", nullable = false)
    private Integer progressIncrement;
}