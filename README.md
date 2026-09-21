# 24-Hour Digital Clock

A simple **24-hour digital clock built with HTML, CSS, and JavaScript**.

The clock allows the user to manually set the hours, minutes, and seconds, then continuously updates every second like a real digital watch.

## Features

* Manual time adjustment
* Real-time clock updates
* 24-hour time format (`HH:MM:SS`)
* Automatically resets to `00:00:00` after `23:59:59`
* Prevents multiple timers from running simultaneously
* Leading zeros for hours, minutes, and seconds

## Technologies

* HTML5
* CSS3
* JavaScript

## JavaScript Concepts Used

This project was built to practice:

* DOM manipulation
* `getElementById()`
* Functions
* Variables with `let` and `const`
* `Number()`
* `Math.floor()`
* Modulo operator (`%`)
* `setInterval()`
* `clearInterval()`
* `String()`
* `padStart()`
* Event handling with `onclick`

## How It Works

The entered hours, minutes, and seconds are first converted into a single value representing the total number of seconds.

For example:

```text
02:30:15
```

is converted into:

```text
9015 seconds
```

The clock then increases this value by one every second and converts it back into hours, minutes, and seconds for display.

The 24-hour reset is handled using:

```javascript
totalSeconds = totalSeconds % 86400;
```

Since one day contains:

```text
24 × 60 × 60 = 86400 seconds
```

the clock automatically returns to:

```text
00:00:00
```

after:

```text
23:59:59
```

## Project Structure

```text
24-hour-digital-clock/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone the repository:

```bash
git clone (https://github.com/MT-Taybii/Casio-Watch-Using-JS)
```

2. Open the project folder.

3. Open `index.html` in your browser.

Or use **Live Server** in VS Code.

## Purpose

This project is part of my JavaScript learning journey and focuses on understanding **time-based logic, DOM manipulation, functions, and JavaScript intervals**.

## License

This project is licensed under the **MIT License**.
