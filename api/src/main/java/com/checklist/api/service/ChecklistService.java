package com.checklist.api.service;

import com.checklist.api.entity.UserEntity;

public interface ChecklistService {
    UserEntity registerUser(UserEntity user);
}
