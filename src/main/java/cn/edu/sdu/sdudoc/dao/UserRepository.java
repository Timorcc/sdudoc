package cn.edu.sdu.sdudoc.dao;

import cn.edu.sdu.sdudoc.pojo.TestUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<TestUser,Long> {

    TestUser findByUsernameAndPassword(String username,String password);

}
