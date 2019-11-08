package cn.edu.sdu.sdudoc.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class IndexController {


    @GetMapping("/{id}/{name}")
    public String index(@PathVariable Integer id,@PathVariable String name) {

        System.out.println("------index------");
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
