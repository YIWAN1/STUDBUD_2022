<div align="center">

  # STUDBUD

  📚 A web app to help students manage their study sessions.

  [**Live Demo —— Activate based on installation instructions →**](http://localhost:8888/)

  ![Devices Mockup](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/TheDevicesMockup.png?raw=true)

</div>


****
## Table of Contents
* [Background](#background)
* [Installation Instructions](#installation-instructions---steps-guide-to-activate-studbud-web-page)
* [Can not open the web page?](#all-steps-are-correct-but-still-cant-open-it-%EF%B8%8F-%EF%B8%8F)
* [Features and Usage Introduction](#features-and-usage-introduction)
* [The function of ‘Open all groups of links’ is not working?](#still-can-not-open-all-reading-link-after-click-%EF%B8%8F-%EF%B8%8F-%EF%B8%8F)
* [Acknowledgement](#-acknowledgement-)


## Background 
DesCo has identified a gap in the market for a platform which focuses on managing individual study sessions. They require a web-based application that combines planning and content functionality, to equip students with the tools they need for a productive study session. Background research through competitor analysis has shown that online tools to help plan and manage study sessions fall into the following categories
1. Planning Tools (e.g. study calendars, time schedules) 
2. Content Tools (e.g. flash cards, quiz apps) 

In order to publish a functional application, it is necessary to focus on three main areas, each with appropriate functionality.

1.[Task Management](#task-management)
* Task List 
* Kanban Board

2.[Time Management](#time-management)
* Stopwatch Timer 
* Flow Time Tracker 

3.[Content Management](#content-management)
* Music Player 
* Reading List Creator 

For the users' convenience, many shortcut functions have been added.

4.[Quick Navigation Operation](#quick-navigation--operation)
* Quick navigation bar 
* Quick operation button 

<br/>

## Installation instructions —— 🔥 Steps Guide to activate STUDBUD web page 

### Step 1. Download & Import
1. Inside repo, click on the “Code" button and `download ZIP` in the dropdown. 
 ![DownloadZIP](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/DownloadZIP.jpg?raw=true)

<br/>

2. Dragging the whole downloaded folder into an open window of the text editor.
 ![ImportFolder](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/ImportFolder.jpg?raw=true)

<br/>

### Step 2. Instal a template plugin 

 *💠 This is a template plugin that makes it easier to implement interactive page displays and data change*


1. Install template to run by running the command:
   ```sh 
   npm install --save @templatejs/runtime  
   ```
2. Install the template compiler plugin by running the command:
   ```sh 
   npm install --save-dev parcel-plugin-template
   ```	 

<br/>

### Step 3. Delete the `.parcel-cache` folder  and `node_modules` folder

   ![Delete folders](https://raw.githubusercontent.com/YIWAN1/STUDBUD-PNG/2e5ff9e212fe8af334cb13aea677320f7a0cddb5/image/Delete%20folders.jpg)

<br/>

### Step 4. Install the SASS package by running the command:
   ```sh 
   npm install sass
   ```	

<br/>

### Step 5. Start the web page using the command: 
   ```sh 
   npm run start
   ```	
<br/>

### Step 6. Open [**Live Demo →**](http://localhost:8888/)   ——	The web page is blank….No worries😉

<br/>

### Step 7. Run your server with the following command:
   ```sh
   npm run dev
   ```	

<br/>

### Step 8. Return and refresh web page [**Live Demo →**](http://localhost:8888/)  

<br/>

### 🎉 The website created is now right in front of you !!!🥳🥳🥳

<br/>

## All steps are correct but still can't open it ⁉️ 🤔️
If the web page can not open, please ensure you cloned the full code. The computer may not recognise some codes and therefore hide them.
This situation has happened on my computer, which hid the `parcelrc` file.

<br/>

## Features and Usage Introduction
#### Quick Navigation & Operation：
* Quick navigation bar ：
   * Show the name of each component when the user clicks on the icon, and the component starts running after pressed
   ![Quick_navigation_bar](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/Quick_navigation_bar.JPEG?raw=true)
#  
* Quick operation button ：
   * Right-click `Delete` task table and Left double-click `Edit` task. It can be executed in all four columns🤗.
   ![Quick operation button](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/Delete&Edit.JPEG?raw=true)
<br/>
 
#### Task Management：
* Task List ：
    * Click ➕ button to Input your individual task and further define: • `Due date` • `Priority rating` • `Estimated time to complete`
    * Can see the corresponding icon about `Priority rating(⬇️Low/➖Med/⬆️High)` after input.        
    ![Tasklist](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/TaskList.jpg?raw=true)   
#  
* Kanban Board ：
   * User can `Drag` and `Drop` tasks from 'To Do' column to 'On progress' column and then to the 'Done' Column
   ![Kanban Board](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/Drag&Drop.JPEG?raw=true)
<br/>
   
 
#### Time Management：
* Stopwatch Timer ：
    * The left button is `⏸Stop`, The middle one is `⏹start&End` and the right one is `⤴️Reset-to-Start`
    * You can see the current time elapsed
    ![Stopwatch Timer](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/StopwatchTimer.jpg?raw=true)    
#  
* Flow Time Tracker ：
    *  Input the task name you want to track time in the top bar, click  `🖋` to save the task table into the 'On Progress' column
    *  Click  `▶️` to start the tracking timer for this round — The middle icon  `🖋`  indicates the tracking of working hours
    *  If you want to take a break you can click on the icon on the far right `☕️`, this will enable the tracking of break times
    *  Situation A: If you are interrupted while tracking time, you can press the leftmost icon `⚠️` to end this round of timer tracking
    *  Situation B: If you are not interrupted but want to end the round of timer tracking. Just Click on `⏹`，this round of tracking timings will be ended.
    *  You will see the overall log of time tracked in the column
    ![FlowTimeTracker](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/FlowTimeTracker.jpg?raw=true)    
<br/>
    

#### Content Management：
* Music Player ：
    * `⏸Play` and Switch `⏪Previous` and `⏩Next` song 
    ![Music_Player](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/Music_Player.jpg?raw=true)
#  
* Reading List Creator ：
    *  `➕ Add`, Right-click `Edit` and Left double-click `Delete` links to reference materials
    ![Add&Delete&EditTask](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/Add&Delete&EditTask.jpg?raw=true)
    * can `Open single Link` and `↗️ open all groups of links` at once
    ![OpenSingle&OpenAll](https://github.com/YIWAN1/STUDBUD-PNG/blob/main/image/OpenSingle&OpenAll.jpg?raw=true)  
<br/>


## Still can not open all reading link after clicking `↗️` ⁉️ 🤔️
If this icon appears on your web page, your browser has default blocked pop-ups, make sure you have selectted 'Always allow’.😉
<div align="center">
    <img src="https://raw.githubusercontent.com/YIWAN1/STUDBUD-PNG/6bc2206148f6f0a766b678cce9375ee0e01236d8/image/%20blockpopups.jpg" alt="blockpopups">
</div>

****
## 🥰 Acknowledgement 💫
Thanks to tutors provided me with Guidelines and suggestions and to the classmates and friends who gave me feedback on my projects.
This project exists thanks to all the people who contribute❣️ 
<br/>
