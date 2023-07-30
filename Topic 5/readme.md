Activity 5: React

Ryan Coon

CST-391

Professor Bobby Estey

July 30, 2023

**Topic 5 source file URL:** [**https://github.com/rcoon1/CST-391/tree/main/Topic%205**](https://github.com/rcoon1/CST-391/tree/main/Topic%205)

***Activity Summary Page:***

![Alt text](<Screenshot 2023-07-30 at 2.57.25 PM-1.png>)

![Alt text](<Screenshot 2023-07-30 at 2.57.39 PM-1.png>)

![Alt text](<Screenshot 2023-07-30 at 2.57.49 PM.png>)

Here are 3 screenshots of the music app cards. I tried to get the ok button to go to a webpage of one of the popular music videos from the album listed. I could not get it to work.

**Write a one-paragraph summary of the new features that have been added. Define new terminology that was used in the lesson.**

In this activity, we created our first React app that displays our favorite music albums within a card view. We deleted all of the base source files and created an index.js to begin. We initialized const App function to display JSX code to the browser. This way we do not have to have a .html file and all views are created withing the js files. To get the app to render, we imported the ReactDOM and added a reactdomrender to the end of the file. We utilized props to allow for easier implementation for multiple cards. We created a card.js to house the properties of the card with props.

**Statechanger:**

![Alt text](<Screenshot 2023-07-30 at 4.46.31 PM.png>)

Here is the homescreen when loading up.

![Alt text](<Screenshot 2023-07-30 at 4.46.48 PM.png>)

Here is the same screen with the real time click updates.

![Alt text](<Screenshot 2023-07-30 at 4.47.24 PM.png>)

Here you can see that you can edit the messages by typing into the textbox.

***Part 2:***

![Alt text](<Screenshot 2023-07-30 at 5.26.58 PM.png>)

Here is the look of the newly revised Music app after using state and properties.

**Write a one-paragraph summary of the new features that have been added. Define new terminology that was used in the lesson.**

In part two of this activity, we revised and modified the previous music app from part one to include states and properties. In React, props are defined by the parent to then be used to affect the look of the child. We used a hook in the setAlbumList to handle the albumList. The states are changed via UI user interaction and is changed via the handler.