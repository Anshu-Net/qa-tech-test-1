const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");

//function to launch browser and application.
async function Challenge(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("localhost:3000");
    await driver.findElement(By.xpath("//span[contains(.,'Render the Challenge')]")).click();
//Loop to create array of elements from dom
    var arr1=[];
    for (var i = 0; i < 10; i++) {
        var ele=driver.findElement(By.xpath("(//td[@data-test-id])[i]"));
        arr1.push(ele);
    }
    var arr2=[];
    for (var i = 10; i < 19; i++) {
        var ele=driver.findElement(By.xpath("(//td[@data-test-id])[i]"));
        arr2.push(ele);
    }
    var arr3=[];
    for (var i = 19; i < 28; i++) {
        var ele=driver.findElement(By.xpath("(//td[@data-test-id])[i]"));
        arr3.push(ele);
    }

    // Function to return the index of the array where the sum of integers at the index on the left is equal to the sum of integers on the right.
    function findCenterElement(arr) 
    {
        let right_sum = 0, left_sum = 0;
  
        for (let i = 1; i < arr.length; i++)
            right_sum += arr[i];
  
            for (let i = 0, j = 1; j < arr.length; i++, j++) 
            {
                right_sum -= arr[j];
                left_sum += arr[i];
      
                if (left_sum === right_sum)
                    return arr[i + 1];
            }
  
        return -1;
    }
  //value from array
    var ans1=findCenterElement(arr1);
    var ans2=findCenterElement(arr2);
    var ans3=findCenterElement(arr3);
  //Index of value
    var pos1 = arr1.indexOf(ans1);
    var pos2 = arr2.indexOf(ans2);
    var pos3 = arr3.indexOf(ans3);
 //Enter index into input box and click submit
    await driver.findElement(By.xpath("//input[@data-test-id='submit-1']")).sendKeys(pos1);
    await driver.findElement(By.xpath("//input[@data-test-id='submit-2']")).sendKeys(pos2);
    await driver.findElement(By.xpath("//input[@data-test-id='submit-3']")).sendKeys(pos3);
    await driver.findElement(By.xpath("//input[@data-test-id='submit-4']")).sendKeys("Anshuman Gupta");
    await driver.findElement(By.xpath("//span[contains(.,'Submit Answers')]")).click();

    var success= await driver.findElement(By.xpath("(//div[contains(.,'Congratulations you have succeeded. Please submit your challenge')])[6]"));

    await driver.findElement(By.xpath("//span[contains(.,'Close')]")).click();

    
}
Challenge();