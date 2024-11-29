# Snake Game

A **Snake Game** built using **HTML**, **CSS**, and **JavaScript** with a responsive design for both **mobile** and **desktop** platforms. The game allows users to control the snake using either **keyboard arrow keys** or **on-screen buttons**, depending on the screen size. It also includes features such as **speed adjustment**, **score tracking**, and the ability to **pause and resume** the game.

## Live Demo

Play the game directly in your browser by clicking the link below:

[**Play Snake Game**](https://snakegame03.netlify.app)

## Features

- **Responsive Controls**:
  - On **desktop** (screen width > 1000px), use **keyboard arrow keys** to control the snake.
  - On **mobile** (screen width < 1000px), on-screen **touch buttons** are provided for easier control.

- **Speed Control**:
  - Adjust the game speed by selecting **Slow**, **Medium**, or **Fast** options.
  - Speed settings are saved to **localStorage**, so they persist across sessions.

- **Pause and Resume**:
  - The game can be paused by pressing the **Pause** button or using the **Spacebar** or **'K'** key.
  - To resume, click **Resume** or press the **Spacebar** or **'K'** key again.

- **Score Tracking**:
  - Displays both **current score** and **high score**.
  - High scores are saved and tracked using **localStorage**.

- **Star Rating**:
  - A **star rating** system is displayed based on the **high score**.

- **Game Over**:
  - The game ends when the snake collides with its own body or the game boundaries.

- **Smooth Gameplay**:
  - Intuitive movement with either **keyboard arrows** or **on-screen buttons**.

## How to Play

1. **Control the Snake**:
   - On **desktop**: Use **arrow keys** to control the snake's direction (Up, Down, Left, Right).
   - On **mobile**: Use the on-screen **arrow buttons**.

2. **Pause/Resume**: 
   - **Pause** the game by pressing the **Pause** button or using the **Spacebar/K** key.
   - **Resume** by pressing the **Resume** button or the **Spacebar/K** key again.

3. **Eat the Food**: 
   - The snake grows longer as it eats food, and your score will increase.

4. **Avoid Collisions**:
   - The game ends if the snake collides with its own body or the board's boundaries.

## Installation

To run the Snake Game locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/shivlalsharma/snake-game.git
    cd snake-game
    ```

2. Open the `index.html` file in your browser.

   Alternatively, you can set up a local server (e.g., using **VS Code Live Server**) to view the game in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.