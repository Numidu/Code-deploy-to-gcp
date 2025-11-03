package com.example.user_service.usercontroller;

import com.example.user_service.model.User;
import com.example.user_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/get")
    public String getAllUsers(){
        return  "ok";
    }

    @PostMapping("/set")
    public  User saveUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public  User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElse(null);
    }
}
