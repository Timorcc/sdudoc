package cn.edu.sdu.sdudoc.service;

import cn.edu.sdu.sdudoc.pojo.TestUser;

public interface UserService {

    TestUser checkUser(String username ,String password);
}
