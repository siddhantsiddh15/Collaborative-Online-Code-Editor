# STEPS TO CREATE THE APP (take nfrom codedamn)

## Building the landing page

Hello everyone! Welcome to the first step of building a collaborative code editor. We will start by building the UI first and then switch between backend and frontend.

Instructions for this step:
This page will be your landing page, shown on the '/' route. You can start by breaking down the project structure into two parts, client and server (This has already been implemented in the starter files to get you started easily). Work only on the client folder in this step.

You can build homepage UI as shown

Few pointers to let you headstart:
     - clicking on create your “own room” link will create a random room code. We will be working on this in the next step.
    one person creates a room.
    others (more than 1) can join the room.
     - Add one field for room id.
     - Add another field for username.
     - Clicking on join button would take the user to the compiler page that we will be designing and implementing in the later steps
     - Make sure that you do not allow the user to route to the compiler page without either the room id or the username. This implies that the room id and username fields are NECESSARY for routing to the compiler page.
     - you can show the errors as a notification, alert, or using react toast. P.S: You can use react-hot-toast package for showing notifications

## Generating random room code

In this step we will be working on how to make a random room code on clicking the create your “own room” link

Here are a few pointers on how you can do it to:
 - In the frontend, you can make use of any node package like uuid to randomly generate a long string.
 - Make sure that this string i.e. room id gets generated once the user clicks on the “own room” link. For better UX, once the user generates a room id, show “success” as a notification, alert or a toast.
 - Once the user clicks join the room after entering the room id and username, route them to '/compiler/random-room-code'
 - The create room part is now complete, but what happens when someone tries to join this room? We’ll handle this in the backend part later on.

 ## INSTRUCTIONS

Building the compiler screen
In this step, we will be working on the compiler screen UI. You can Build the UI of the compiler screen as shown below.

### Here are a few pointers on how you can do it:
-- For the code editor part, you are free to choose any node package. The recommended ones are react-ace-editor or codemirror.
 - Make sure to allow the users to copy the room id by clicking on the copy room id button. Here's your hint on how to implement this.
 - For better UX, show a notification, alert or a toast claiming that the room ID was copied succesfully.
 - You can use dummy connected users for implementing the list of connected users part now.
 - Leave the “leave” button functionality for now.

