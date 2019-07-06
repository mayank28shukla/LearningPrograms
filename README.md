
Hi Krishna, 
  
To click inside canvas, we have to use x-,y- coordinates.  
In order to get x-, y- coordinates, follow the below steps: 
1. Find an xpath of any element outside the canvas, and use ``` moveToElement(element) ``` function to move cursor to that particular element. 
2. Now in order to locate that particular x-, y- coordinate of that area, we have to try multiple combinations of inputs inside ```moveByOffset(x, y)``` until it locates the accurate area. For example, generally for top left, you can try x=600 or more, and for y=100 more or less, and then you can click. I have given sample code for your reference. It will work for you. 
```Actions act=new Actions(driver);
   act.moveToElement(element)     
      .moveByOffset(600, 100)  
      .click() 
      .build() 
      .perform();
```
