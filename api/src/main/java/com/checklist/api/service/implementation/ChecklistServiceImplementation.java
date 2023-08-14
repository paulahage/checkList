package com.checklist.api.service.implementation;

import com.checklist.api.entity.UserEntity;
import com.checklist.api.repository.ChecklistRepository;
import com.checklist.api.service.ChecklistService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChecklistServiceImplementation implements ChecklistService {
    private final ChecklistRepository checklistRepository;

    public ChecklistServiceImplementation(ChecklistRepository checklistRepository) {
        this.checklistRepository = checklistRepository;
    }

    @Override
    public UserEntity registerUser(UserEntity user){
        return checklistRepository.save(user);
    }

    @Override
    public Optional<UserEntity> getUser(Long id){
        return checklistRepository.findById(id);
    }
}
