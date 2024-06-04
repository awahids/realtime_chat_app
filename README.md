### Realtime Chat App README
![Demo](https://raw.githubusercontent.com/awahids/realtime_chat_app/staging/public/img/demo.gif)

#### Overview

This Realtime Chat App is a web application that allows users to create chatrooms and communicate with each other in real-time. It utilizes Ruby on Rails for the backend, Action Cable for WebSocket communication, and Bootstrap for frontend styling.

#### Features

- **Chatroom Creation**: Users can create new chatrooms with unique names.
- **Real-time Messaging**: Users can send and receive messages within chatrooms in real-time.
- **Username Entry**: Users can enter their usernames before sending messages.
- **Responsive Design**: The application is responsive and works well on various devices.

#### Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/awahids/realtime_chat_app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd realtime_chat_app
    ```

3. Install dependencies using Bundler:

    ```bash
    bundle install
    ```

4. Set up the database configuration:

    - Open `config/database.yml` file and update the database configuration to use PostgreSQL:

      ```yaml
      default: &default
        adapter: postgresql
        encoding: unicode
        username: your_postgresql_username
        password: your_postgresql_password
        host: localhost
        port: 5432
        pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

      development:
        <<: *default
        database: realtime_chat_app_development

      test:
        <<: *default
        database: realtime_chat_app_test
      ```

    - Replace `your_postgresql_username` and `your_postgresql_password` with your PostgreSQL username and password.

5. Create the PostgreSQL databases:

    ```bash
    rails db:create db:migrate db:seed
    ```

6. Start the Rails server:

    ```bash
    rails server
    ```

7. Access the application in your web browser at `http://localhost:3000`.

#### Usage

- After starting the Rails server, navigate to `http://localhost:3000` in your web browser.
- Create a new chatroom by entering a unique name in the provided form and clicking "Create".
- Click on a chatroom name from the sidebar to join the chatroom.
- Enter your username and message content in the input fields provided and click "Send" to send messages.
- Messages will be displayed in real-time to all users in the chatroom.

#### Technologies Used

- **Ruby on Rails 7**: Backend framework for building web applications.
- **Action Cable**: WebSocket framework for real-time communication.
- **Bootstrap**: Frontend framework for responsive styling.
- **PostgreSQL 14**: Relational database management system used for storing data.

#### Contributing

Contributions to this project are welcome! Feel free to open issues or pull requests for bug fixes, feature enhancements, or other improvements.

#### License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

#### Author

This Realtime Chat App was created by [Your Name]. You can contact me at [awahid.safhadi@gmail.com] for any inquiries or feedback.

![Dashboard](https://raw.githubusercontent.com/awahids/realtime_chat_app/staging/public/img/dashboard.png)
