package com.checklist.api.repository;

import com.checklist.api.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChecklistRepository extends JpaRepository<UserEntity, Long> {
}
