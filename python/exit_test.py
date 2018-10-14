import sys
from tkinter import*
# ask_yes_no.py
from tkinter import messagebox
root = Tk()

def exit_box():
    exit_title = 'EXIT'
    exit_text = 'Do you want to EXIT?'
    answer = messagebox.askquestion(exit_title, exit_text)

    if answer == 'yes':
        print('Exit')
    else:  # 'no'
        print('No Exit')

button9 = Button(root, text="EXIT", command=exit_box)
button9.pack()
