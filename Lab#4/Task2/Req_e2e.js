const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  // Create a new WebDriver instance
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();

  try {
    // TODO Step 1: Navigate to the Login Page
    await driver.get('http://127.0.0.1:5500/Task2/webapp');
    // TODO Step 2: Login with Valid Credentials
    let nameInput = await driver.findElement(By.name("username"));
    await nameInput.sendKeys("tomsmith");
    let passwordinput = await driver.findElement(By.name("password"));
    await passwordinput.sendKeys("SuperSecretPassword!");
    let bottominput = await driver.findElement(By.id("idbutton")).click();
    //bottominput.sendKeys('"info"', Key.ENTER);
    // TODO Step 3: Verify Successful Login
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("testid"))), 1000);
    // TODO Step 4: Logout
    await driver.findElement(By.id("idout")).click();
    // TODO Step 5: Verify Logout
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("loginForm"))), 1000);

    // TODO Step 6: Login with Invalid Credentials
    await driver.sleep(1000);
    nameInput2 = await driver.findElement(By.name("username"));
    await nameInput2.sendKeys("tomsm2ith");
    passwordinput2 = await driver.findElement(By.name("password"));
    await passwordinput2.sendKeys("SuperSecretPassword!");
    await driver.findElement(By.id("idbutton")).click();
    await driver.sleep(1000);
    // TODO Step 7: Verify Invalid Login Attempt
    await driver.sleep(1000);
    flash = await driver.findElement(By.id("flash"));
    flashTest = flash.getText();
    if (flashTest == "Your username or password is incorrect.") {
      console.log("passed");
    }
    else {
      console.log("failed");

    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the WebDriver session
    await driver.quit();
  }
})();
