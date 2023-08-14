package com.checklist.api.controller;

import com.checklist.api.entity.UserEntity;
import com.checklist.api.service.ChecklistService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/checklist")
public class ChecklistController {
    private final ChecklistService checklistService;

    public ChecklistController(ChecklistService checklistService) {
        this.checklistService = checklistService;
    }

    @PostMapping("/signin")
    public UserEntity registerUser(@RequestBody UserEntity user){
        return checklistService.registerUser(user);
    }

    @GetMapping("/getUser/{id}")
    public Optional<UserEntity> getUser(@PathVariable ("id") Long id){
        return checklistService.getUser(id);
    }
}
