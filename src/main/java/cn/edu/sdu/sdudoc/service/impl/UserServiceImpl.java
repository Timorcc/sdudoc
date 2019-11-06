package cn.edu.sdu.sdudoc.service.impl;

import cn.edu.sdu.sdudoc.dao.UserRepository;
import cn.edu.sdu.sdudoc.pojo.TestUser;
import cn.edu.sdu.sdudoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public TestUser checkUser(String username, String password) {
        return userRepository.findByUsernameAndPassword(username,password);
    }
}
