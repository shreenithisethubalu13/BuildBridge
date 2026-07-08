package com.example.demo.entity;

import com.example.demo.entity.enums.InquiryStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "project_inquiries")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectInquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String siteName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id", nullable = false)
    private SystemUser client;

    @Column(nullable = false)
    private String projectType;

    @Column(nullable = false)
    private String location;

    private Integer bhkCount;

    private Integer floorCount;

    @Column(precision = 15, scale = 2)
    private BigDecimal budget;

    private String duration;

    private LocalDate startDate;

    private LocalDate endDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "contractor_id")
    private SystemUser contractor;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private InquiryStatus status = InquiryStatus.PENDING;
}