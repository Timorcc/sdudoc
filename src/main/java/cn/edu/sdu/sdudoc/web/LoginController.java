package cn.edu.sdu.sdudoc.web;

import cn.edu.sdu.sdudoc.pojo.TestUser;
import cn.edu.sdu.sdudoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class LoginController {
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpSession session,
                        Model model){
        System.out.println("--------------");
        System.out.println("username:"+username);
        System.out.println("password:"+password);
      TestUser user= userService.checkUser(username,password);
      if(user!=null){
          user.setPassword(null);
          session.setAttribute("user",user);
          return "success";
      }else{
          model.addAttribute("message","用户名或密码错误");
          return "failed";
      }
    }
    @PostMapping("/logintest")
    public String success(){
        return "success";
    }
}
