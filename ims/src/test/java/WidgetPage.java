import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.ArrayList;

public class WidgetPage extends suite {

    private String urlWidgets = "http://my.solidopinion.com/demo/?sitename=prod40118";
    private String commentsTest = "test";
    private String email = "daria.yermolova@nure.ua";
    private String pass = "D21UDOW2";
    private String name = "autotest";
    private By fieldPost = By.xpath("//div[@id='comment_data']");
    private By iframe = By.xpath("//div[@class='so_comments']//iframe");
    private By buttonSo = By.xpath("//span[@class='icon-so']");
    private By fieldEmail = By.id("email");
    private By fieldPass = By.id("password");
    private By buttonLogin = By.id("go_login");
    private By dropdownName = By.id("top_menu_list");
    private By logoutButton = By.xpath("//a[@id='logout']");
    private By topComments = By.className("top_comments");
    private By allComments = By.xpath("//span[@data-i18n='com.all_comments']");
    private By fieldEmailSignup = By.xpath("//input[@name='email']");
    private By fieldNameSignup = By.xpath("//input[@name='name']");
    private By checkboxAgree = By.xpath("//input[@class='i-agree']");
    private By signupButton = By.className("go_frontend_login");

    @Test
    public void t1LoginInWidget() {
         driver.get(urlWidgets);
         WebDriverWait waitFrame = new WebDriverWait(driver, 20);
         waitFrame.until((ExpectedConditions.visibilityOfElementLocated(iframe)));
         driver.switchTo().frame(driver.findElement(iframe));

         Assert.assertEquals(driver.findElement(topComments).getText(), "TOP Comments", "Page isn't displayed top comments");
         Assert.assertEquals(driver.findElement(allComments).getText(), "All Comments", "Page isn't displayed all comments");

         WebDriverWait waitField = new WebDriverWait(driver, 20);
         waitField.until((ExpectedConditions.presenceOfAllElementsLocatedBy(fieldPost)));
         driver.findElement(fieldPost).sendKeys(commentsTest);

         driver.findElement(buttonSo).click();

         ArrayList<String> tabs2 = new ArrayList<String> (driver.getWindowHandles());
         System.out.println(tabs2.get(1));
         driver.switchTo().window(tabs2.get(1));

         Assert.assertTrue(driver.getTitle().contains("SolidOpinion"), "Title isn't contains 'SolidOpinion'");

         WebDriverWait waitEmail = new WebDriverWait(driver, 20);
         waitEmail.until((ExpectedConditions.elementToBeClickable(fieldEmail)));
         driver.findElement(fieldEmail).sendKeys(email);
         driver.findElement(fieldPass).sendKeys(pass);
         driver.findElement(buttonLogin).click();

         ArrayList<String> tabs3 = new ArrayList<String> (driver.getWindowHandles());
         System.out.println(tabs3.get(0));
         driver.switchTo().window(tabs3.get(0));

         WebDriverWait waitFrame2 = new WebDriverWait(driver, 20);
         waitFrame2.until((ExpectedConditions.visibilityOfElementLocated(iframe)));
         driver.switchTo().frame(driver.findElement(iframe));

         WebDriverWait waitDropdown = new WebDriverWait(driver, 30);
         waitDropdown.until((ExpectedConditions.visibilityOfElementLocated(dropdownName)));
         driver.findElement(dropdownName).click();


         driver.findElement(logoutButton).click();
    }

    @Test
    public void t2SignupInWidget() {
        String randomEmail = "automateapitest.owner+" + Math.random()*100 + "@gmail.com";
        driver.findElement(fieldEmailSignup).sendKeys(randomEmail);

        driver.findElement(fieldNameSignup).sendKeys(name);

        driver.findElement(checkboxAgree).click();
        driver.findElement(signupButton).click();

    }
}
