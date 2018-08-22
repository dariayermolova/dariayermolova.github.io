import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

import java.util.concurrent.TimeUnit;


public class suite {
    public WebDriver driver;
  @BeforeClass
    public  void getDriver() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        System.out.println("Before Suite");
    }

   @AfterClass
      public void After() {
        driver.quit();
        System.out.println("After Suite");
    }



}
