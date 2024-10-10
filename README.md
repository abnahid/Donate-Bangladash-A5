# Donate Bangladesh

<img src="assets/logo.png" alt="Donate Bangladesh Logo" width="100"/>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Functionalities](#functionalities)
- [Challenges](#challenges)
- [How to Run the Project](#how-to-run-the-project)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Introduction
**Donate Bangladesh** is a simple, responsive donation website designed to allow users to make donations and track their donation history. This project was built as part of Assignment 5, focusing on implementing key functionalities like a sticky navbar, dynamic donation updates, and transaction history using pure HTML, CSS, and JavaScript without the use of external frameworks or libraries.

## Features
- Visually appealing and professional design.
- Sticky navbar with navigation options.
- Three donation cards with customizable donation input.
- Dynamic donation updates and validation.
- History section to track donations made by the user.
- Responsive design to adapt to different screen sizes.

## Functionalities
1. **Navbar**:
   - Central logo with "Blog" button on the left and "Account Balance", "Donation", and "History" buttons.
   - Sticky behavior to stay on top of the page during scrolling.

2. **Donation Cards**:
   - Displays donation title, current donation amount, and input field for user donation.
   - Dynamic update of donation amount and account balance upon successful donation.

3. **History Section**:
   - Displays the date, time, donation name, and amount for each transaction.
   - Initially hidden, and toggles with the "History" button.

4. **Donation and History Toggle**:
   - Users can switch between the Donation and History sections with a button click.
   - Active button toggles to indicate the current view.

5. **Input Validation**:
   - Ensures valid donation amounts and checks against the account balance.
   - Displays a modal on successful donation or alerts for invalid input.

6. **Blog Page**:
   - Separate `blog.html` with answers to key DOM-related questions.

## Challenges
- Implemented a sticky navbar using CSS `position: sticky`.
- Created a static modal for successful donations.
- Reusable JavaScript functions for balance update and notification handling.
- Input validation to prevent invalid or excessive donations.
- Responsive design tested on mobile and desktop screens.

## How to Run the Project
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/donate-bangladesh.git
    ```
2. Navigate to the project folder:
    ```bash
    cd donate-bangladesh
    ```
3. Open `index.html` in your browser to view the application.

## Screenshots
![Home Page](screenshots/home-page.png)
![Donation Cards](screenshots/donation-cards.png)
![History Section](screenshots/history-section.png)

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## Contact
For any inquiries or suggestions, feel free to reach out at:
- **Email**: abnahid580@gmail.com
- **GitHub**: [abnahid](https://github.com/abnahid)
