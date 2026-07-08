package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryRequestDto {

    private String siteName;
    private String projectType;
    private String location;
    private Integer bhkCount;
    private Integer floorCount;
    private BigDecimal budget;
    private String duration;
    private LocalDate startDate;
    private LocalDate endDate;

}