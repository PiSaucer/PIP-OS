import os
import time
import webbrowser
import datetime
import sys
from tkinter import*
from tkinter import messagebox
from tkinter import Tk, Menu
root = Tk()

def my_callback():
    print("THE BUTTON WAS CLICKER!")
def exit_box():
        exit_title = 'EXIT'
        exit_text = 'Do you want to EXIT?'
        answer = messagebox.askquestion(exit_title, exit_text, icon='warning')

        if answer == 'yes':
            print('Exit')
            time.sleep(3)
            exit()
        else:  # 'no'
            print('No Exit')
            time.sleep(3)
# Create main menu bar
menu_bar = Menu(root)

# Create the submenu (tearoff is if menu can pop out)
file_menu = Menu(menu_bar, tearoff=0)

# Add commands to submenu
file_menu.add_command(label="Console Menu", command=my_callback)
file_menu.add_command(label="EXIT", command=exit_box)

# Add the "File" drop down sub-menu in the main menu bar
menu_bar.add_cascade(label="File", menu=file_menu)

root.config(menu=menu_bar)
root.mainloop()
