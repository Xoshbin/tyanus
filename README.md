# Tyanus - Touch Typing Web App

Tyanus is a modern touch typing web application built with Laravel, Inertia, and React. It provides an interactive and engaging platform for users to improve their typing skills through various courses and lessons.
Visit https://tyanus.com/ to try it out
## Features

- Interactive typing lessons and exercises
- Multiple keyboard layouts support (English and Kurdish)
- Real-time typing speed and accuracy tracking
- User progress tracking and statistics
- Customizable typing tests
- Responsive design for various devices

## Technologies Used

- Laravel 10.x
- Inertia.js
- React
- Tailwind CSS
- MySQL
- Redis
- Meilisearch

## Requirements

- PHP 8.1 or higher
- Composer
- Node.js and npm
- MySQL
- Redis

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tyanus.git
   cd tyanus
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Install JavaScript dependencies:
   ```
   npm install
   ```

4. Copy the example environment file and modify it according to your needs:
   ```
   cp .env.example .env
   ```

5. Generate an application key:
   ```
   php artisan key:generate
   ```

6. Run database migrations:
   ```
   php artisan migrate
   ```

7. Seed the database with courses and lessons:
   ```
   php artisan db:seed
   ```

8. Build assets:
   ```
   npm run build
   ```

## Usage

1. Start the Laravel development server:
   ```
   php artisan serve
   ```

2. Access the application in your web browser at `http://localhost:8000`

3. Register a new account or log in to start improving your typing skills!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-sourced software licensed under the [GNU Lesser General Public License v3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl-3.0.en.html).
