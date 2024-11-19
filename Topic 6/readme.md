Activity 6

Ryan Coon

CST-391

Professor Bobby Estey

August 6, 2023

Github source URL: https://github.com/rcoon1/CST-391/tree/main/Topic%206 

Part 3: External Data Source

Screenshots:

![Alt text](<Screenshot 2023-08-06 at 5.26.57 PM.png>)

Here we have the application up and trying to use the search function through out .JSON file.

![Alt text](<Screenshot 2023-08-06 at 6.00.21 PM.png>)

Here is the application up and running alongside our music api datasource.

![Alt text](<Screenshot 2023-08-06 at 6.00.54 PM.png>)

With the music api as the datasource, we can now use the search function correctly.

![Alt text](<Screenshot 2023-08-06 at 6.03.29 PM.png>)

Added a little bit to the console to make it easier to follow.

Summary of features added:

In this portion of the music app, we continued to build upon what we previously were working on. We took out the hard coded albums list from the app.js file and envoked a callback to our datasource that now contains the albums list. We first had it read through from a .JSON file, but we then hooked it up to our music api to get the album information from it.

useEffect- this hook allows us to use side effects in our components.

Mini App 2:

Screenshots:

![Alt text](<Screenshot 2023-08-06 at 7.44.41 PM.png>)

Here is the main page of the mini application

![Alt text](<Screenshot 2023-08-06 at 7.44.52 PM.png>)

Here we tried to click About us and got told we needed to login.

![Alt text](<Screenshot 2023-08-06 at 7.45.00 PM.png>)

Here is the about us after logging in.

![Alt text](<Screenshot 2023-08-06 at 7.45.11 PM.png>)

Contact us page after logging in.

![Alt text](<Screenshot 2023-08-06 at 7.45.20 PM.png>)

Here is the user page while being logged in.

![Alt text](<Screenshot 2023-08-06 at 7.45.29 PM.png>)

Friend mary after clicking her name.

![Alt text](<Screenshot 2023-08-06 at 7.45.34 PM.png>)

Friend Justine after clicking her name

![Alt text](<Screenshot 2023-08-06 at 7.45.40 PM.png>)

Friend Brianna after clicking her name.

![Alt text](<Screenshot 2023-08-06 at 7.45.49 PM.png>)

Friend David after clicking his name.

Summary of new features:

In this app we used a simple layout and utilized the routing library. After completing this mini application, you can really see the use on Link within out JavaScript/HTML. You use Link to command it where to take you upon button press.

Link- A \<Link\> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a \<Link\> renders an accessible \<a\> element with a real href that points to the resource it's linking to

PrivateRoute – these are routes used to protect routes so that unauthorized users are prevented from reaching the protected routes.

Part 4 Navigation Routing:

Screenshots:

![Alt text](<Screenshot 2023-08-06 at 9.18.23 PM.png>)

Here is the landing page with routing completed and running with our musicapi

![Alt text](<Screenshot 2023-08-06 at 9.18.49 PM.png>)

Here is the new album form(not Complete in this part)

![Alt text](<Screenshot 2023-08-06 at 9.19.58 PM.png>)

Here we searched for the keyword yellow.

Summary of new features:

In this part of our music app, we went through and added in routes like we did with the mini app. I feel this makes the code look a lot cleaner and more easy to follow. We broke down the renderedList method into separate components.