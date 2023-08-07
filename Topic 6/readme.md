Activity 6

Ryan Coon

CST-391

Professor Bobby Estey

August 6, 2023

Github source URL:

Part 3: External Data Source

Screenshots:

![](RackMultipart20230807-1-s05neg_html_17769341fcf68f48.png)

Here we have the application up and trying to use the search function through out .JSON file.

![](RackMultipart20230807-1-s05neg_html_76e4ffac0b9cbb06.png)

Here is the application up and running alongside our music api datasource.

![](RackMultipart20230807-1-s05neg_html_fcffffdf728680b5.png)

With the music api as the datasource, we can now use the search function correctly.

![](RackMultipart20230807-1-s05neg_html_5e3bc216aca8f1de.png)

Added a little bit to the console to make it easier to follow.

Summary of features added:

In this portion of the music app, we continued to build upon what we previously were working on. We took out the hard coded albums list from the app.js file and envoked a callback to our datasource that now contains the albums list. We first had it read through from a .JSON file, but we then hooked it up to our music api to get the album information from it.

useEffect- this hook allows us to use side effects in our components.

Mini App 2:

Screenshots:

![](RackMultipart20230807-1-s05neg_html_a399d502619e526d.png)

Here is the main page of the mini application

![](RackMultipart20230807-1-s05neg_html_f059b150c82c8f4.png)

Here we tried to click About us and got told we needed to login.

![](RackMultipart20230807-1-s05neg_html_a4ed89110f2e332f.png)

Here is the about us after logging in.

![](RackMultipart20230807-1-s05neg_html_aa747aa285609ec3.png)

Contact us page after logging in.

![](RackMultipart20230807-1-s05neg_html_29b62a20c0c92bfc.png)

Here is the user page while being logged in.

![](RackMultipart20230807-1-s05neg_html_2f2b590170e93ad1.png)

Friend mary after clicking her name.

![](RackMultipart20230807-1-s05neg_html_d7d055ab760412be.png)

Friend Justine after clicking her name

![](RackMultipart20230807-1-s05neg_html_9edac5e1d2d28377.png)

Friend Brianna after clicking her name.

![](RackMultipart20230807-1-s05neg_html_c1f69afc9f08facc.png)

Friend David after clicking his name.

Summary of new features:

In this app we used a simple layout and utilized the routing library. After completing this mini application, you can really see the use on Link within out JavaScript/HTML. You use Link to command it where to take you upon button press.

Link- A \<Link\> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a \<Link\> renders an accessible \<a\> element with a real href that points to the resource it's linking to

PrivateRoute – these are routes used to protect routes so that unauthorized users are prevented from reaching the protected routes.

Part 4 Navigation Routing:

Screenshots:

![](RackMultipart20230807-1-s05neg_html_5b798092528d77da.png)

Here is the landing page with routing completed and running with our musicapi

![](RackMultipart20230807-1-s05neg_html_1846eed7abb2e95.png)

Here is the new album form(not Complete in this part)

![](RackMultipart20230807-1-s05neg_html_b655232a61a5e425.png)

Here we searched for the keyword yellow.

Summary of new features:

In this part of our music app, we went through and added in routes like we did with the mini app. I feel this makes the code look a lot cleaner and more easy to follow. We broke down the renderedList method into separate components.