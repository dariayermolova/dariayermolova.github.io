import org.openqa.selenium.By;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

public class SignupPage extends suite{
    private By fieldName  = By.xpath("//input[@id='name']");
    private By fieldEmail = By.xpath("//input[@id='email']");
    private By fieldPass  = By.xpath("//input[@id='password']");
    private By fieldReenterPass = By.xpath("//input[@id='password2']");
    private By buttonSignup = By.id("go_signup");
    private String urlSignup = "https://my.solidopinion.com/signup";
    private String pass = "123456";
    private By commentator = By.id("go_profile");
    private By deleteProfile = By.className("remove_account");
    private By popupYes = By.xpath("//div[@id='modalWindowWarning']//div[@class='modal-footer']//button[@class='btn btn-primary save_data']");
    private By dropdownLogout = By.className("dropdown-toggle");
    private By buttonLogout = By.className("signout");

    @Test
    public void t1signupInMySo() {
        driver.get(urlSignup);
        Assert.assertTrue(driver.getTitle().contains("SolidOpinion"), "Title isn't contains 'SolidOpinion'");

        WebDriverWait waitName = new WebDriverWait(driver, 10);
        waitName.until((ExpectedConditions.elementToBeClickable(fieldName)));
        String randomName = "randomname" + Math.random()*100000;
        System.out.println(randomName);
        driver.findElement(fieldName).sendKeys(randomName);
        String randomEmail = "automateapitest.owner+" + Math.random()*100000 + "@gmail.com";

        driver.findElement(fieldEmail).sendKeys(randomEmail);

        driver.findElement(fieldPass).sendKeys(pass);
        driver.findElement(fieldReenterPass).sendKeys(pass);
        driver.findElement(buttonSignup).click();
    }


    @Test
    public void t2Logout() {

        WebDriverWait waitDropdown = new WebDriverWait(driver, 10);
        waitDropdown.until(ExpectedConditions.visibilityOfElementLocated(dropdownLogout));

        driver.findElement(commentator).click();
        driver.findElement(deleteProfile).click();
        driver.findElement(popupYes).click();
        driver.findElement(dropdownLogout).click();
        driver.findElement(buttonLogout).click();
        System.out.println("LoginPage = method2");

    }
}
