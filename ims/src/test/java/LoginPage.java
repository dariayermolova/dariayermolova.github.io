import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

public class LoginPage extends suite {

    private String urlLogin = "https://my.solidopinion.com/signin";
    private By fieldEmail = By.id("email");
    private By fieldPass = By.id("password");
    private By buttonLogin = By.id("go_login_page");
    private String email = "daria.yermolova@nure.ua";
    private String pass = "D21UDOW2";

    private By emailOnProfile = By.id("text_visible_email");
    private By dropdownLogout = By.className("dropdown-toggle");
    private By buttonLogout = By.className("signout");


    @Test
    public void LoginInMySo() {
        driver.get(urlLogin);
        Assert.assertTrue(driver.getTitle().contains("SolidOpinion"), "Title isn't contains 'SolidOpinion'");
        driver.findElement(fieldEmail).sendKeys(email);
        driver.findElement(fieldPass).sendKeys(pass);
        driver.findElement(buttonLogin).click();
        System.out.println("LoginPage = method1");

    }

    @Test
    public void Logout() {

        WebDriverWait waitDropdown = new WebDriverWait(driver, 10);
        waitDropdown.until(ExpectedConditions.visibilityOfElementLocated(dropdownLogout));
        WebDriverWait waitEmail = new WebDriverWait(driver, 20);
        waitEmail.until(ExpectedConditions.visibilityOfElementLocated(emailOnProfile));
        driver.findElement(emailOnProfile);
        Assert.assertTrue( driver.findElement(emailOnProfile).getText().contains(email), "Email is not displayed on page");

        driver.findElement(dropdownLogout).click();
        driver.findElement(buttonLogout).click();
        System.out.println("LoginPage = method2");

    }


}
