# Matrix Digital Rain

A web-based version of the digital rain from the Matrix.

<img width="1438" height="898" alt="MatrixDigitalRainDemo" src="https://github.com/user-attachments/assets/ca02faa1-9166-4481-bb50-3b861e14a9fa" />

## Try it out: https://devahedron.github.io/MatrixDigitalRain/

You can also download this repo and open the HTML file to use it.

## Features:
- Fades out by default
- Settings panel (hidden by default)
- Fade toggle
- Debug toggle (shows each positions timer in the matrix)<br>
(if a timer is not a single digit number it will visually spill to the neighboring timer)
- Pause/Unpause buttons<br><br>
Image of debugging turned on:
<img width="1438" height="898" alt="DebugDemo" src="https://github.com/user-attachments/assets/3c793a88-351d-4fa8-bbf4-d718f3ee5942" />

## How it works:
For the font, I used a Minecraft looking font because it looks nice and fun. Each position can store a character and a timer value. This is done by creating a matrix with two levels of arrays for the x and y positions and another array for the timer and character of a given position. The font-size is based of the width of the screen so it always fits exactly to the screen size. In the code if you change the number of columns, the font size will also change with it. Text is drawn on a canvas using JavaScript functions. I made a function to draw a given character onto the canvas based on the row and column it was stored in. I am pretty new to web development, so this wasn't super easy for me. I have no doubt there are many improvements to be made, but it was very fun to make and it is very fun to look at!

## Credits:
I used Monocraft by Idrees Hassan for the font and used Google Fonts for the settings icon. Shout out to Idrees Hassan's Monocraft font. It looks great and both the pixelation and the monospacing made it work well with my grid structure. It is very cool and you should go check it out:<br>
### Monocraft: https://github.com/IdreesInc/Monocraft<br>
### Google Fonts: https://fonts.google.com/icons
