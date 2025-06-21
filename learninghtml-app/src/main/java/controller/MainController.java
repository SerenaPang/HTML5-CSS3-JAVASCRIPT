package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;




/**
 * This class does save user, update user, delete user, find all users in the
 * website.
 */
@Controller
public class MainController {


	@RequestMapping("/tutorial")
	public String home(Model page) {
		page.addAttribute("username", "Kity");
		page.addAttribute("color", "blue");
		return "tutorial.html";
	}

}