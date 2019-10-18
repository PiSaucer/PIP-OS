ClrHome
Disp "What Would You Like To Do?"
Disp "[1]PIP-BOY Info"
Disp "[2]Update"
Disp "[3]Clock"
Disp "[4]STAT" 
Disp "[5]INV"
Disp "[6]DATA"
Disp "[7]MAP"
Disp "[8]RADIO"
Disp "[9]EXIT"
Input ":",X
If X=1 
Then
Disp "****PIP-OS(R) V7.1.0.8****"
Disp "COPYRIGHT 2075 ROBCO(R)"
Disp "LOADER V1.1"
Disp "EXEC VERSION 41.10"
Disp "64K RAM SYSTEM"
Disp "38911 BYTES FREE"
Disp "NO HOLOTAPE FOUND"
Disp "LOAD ROM(1): DEITRIX 303"
Disp "**************************"
Wait 2
Disp ""
Disp "Wanna check for update?"
Disp "1: to check for update"
Disp "2: Menu"
Pause 
prgmPIPOS
Else
If X=2 
Then
Disp "Update"
Pause 
prgmPIPOS
Else
If X=3
Then
Disp getTime
Pause 
prgmPIPOS
Else
If X=4 
Then
Disp "STAT"
Pause 
prgmPIPOS
Else
If X=5 
Then
Disp "INV"
Pause 
prgmPIPOS
Else
If X=6 
Then
Disp "DATA"
Pause 
prgmPIPOS
Else
If X=7 
Then
Disp "MAP"
Pause 
prgmPIPOS
Else
If X=8 
Then
Disp "RADIO"
Pause 
prgmPIPOS
Else
If X=9
Then
Disp "Exiting..."
Stop
Else
Disp "Make a Main Menu Goto"
