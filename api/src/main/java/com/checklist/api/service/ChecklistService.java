package com.checklist.api.service;

import com.checklist.api.entity.UserEntity;

import java.util.Optional;

public interface ChecklistService {
    UserEntity registerUser(UserEntity user);
    Optional<UserEntity> getUser(Long id);
}
