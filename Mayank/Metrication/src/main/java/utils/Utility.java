package utils;

import java.io.File;
import java.lang.reflect.Method;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

public class Utility 
{
	public static ExtentReports report;
	public static ExtentTest logger;
	
	public static String captureScreenshot(WebDriver driver, String screenShotName)
	{
		try{
			File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			
			String destination="E:\\EclipseOxygen\\Mayank\\Screenshots\\"+screenShotName+".png";
			
			File dest=new File(destination);
			
			FileUtils.copyFile(src,dest);
			
			return destination;
		}
		catch(Exception e)
		{
			System.out.println("Exception occurred while taking screenshot "+e.getMessage());
			return e.getMessage();
		}
	}
	
	public static void reportCreation(Method method)
	{
		report=new ExtentReports("E:\\EclipseOxygen\\Mayank\\TestReport.html", false);
		report.loadConfig(new File(System.getProperty("user.dir")+"\\extent-config.xml"));
		logger=report.startTest(method.getAnnotation(Test.class).description());
	}
}
