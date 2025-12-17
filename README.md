# Password Generator

A simple and interactive web-based password generator that creates secure, random passwords with customizable options.

## Features

Key Features:

- Generate random passwords with a single click
- Customizable password length (1-100 characters)
- Toggle alphabets (uppercase and lowercase) inclusion
- Toggle numbers (0-9) inclusion
- Toggle special characters inclusion
- One-click copy to clipboard functionality
- Dark theme UI with clean, intuitive design
- Real-time password generation
- Visual feedback when password is copied

## Tech Stack

- HTML5 - Structure and markup
- CSS3 - Styling and responsive design
- JavaScript - Password generation logic and interactivity

## Installation

1. Clone the repository:
git clone https://github.com/piyushhirwani235/password_generator.git

2. Navigate to the project directory:
cd password_generator

3. Open index.html in your web browser

## Usage

1. Set Password Length: Use the number input field to set your desired password length (default: 12 characters)

2. Choose Character Types: Select which types of characters to include:
   - Alphabets (A-Z, a-z)
   - Numbers (0-9)
   - Special Characters (! @#$%^&*()_+-=[]{}|;: ,.<>?)

3. Generate Password: Click the Generate button to create a new password

4. Copy Password: Click the copy button next to the generated password to copy it to your clipboard

## Project Structure

password_generator/
├── index.html - Main HTML file with structure
├── script.js - JavaScript logic for password generation
├── style.css - CSS styling for the application
└── README.md - Project documentation

## How It Works

1. The application builds a character pool based on your selections (alphabets, numbers, special characters)
2. It randomly selects characters from this pool for the specified length
3. The generated password is displayed in the output box
4. You can copy the password to your clipboard with a single click

## Error Handling

- If no character type is selected, the application will display: "Select at least one option"
- Password length can be set between 1 and 100 characters

## Browser Compatibility

- Chrome/Chromium
- Firefox
- Safari
- Edge

## Future Enhancements

Possible features for future versions:

- Password strength indicator
- Exclude ambiguous characters option
- Password history
- Custom character set input
- Export password as file
- Dark/Light theme toggle

## License

This project is open source and available for personal and educational use.

## Author

piyushhirwani235 (https://github.com/piyushhirwani235)

## Contributing

Feel free to fork this project, make improvements, and submit pull requests!