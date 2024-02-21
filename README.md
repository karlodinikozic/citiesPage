# Cities Page

## Running the Project



## Installation

To get started with the Chuck Norris Joke App API, follow these steps:

1. Clone the repository from GitHub:

   ```shell
   git clone https://github.com/karlodinikozic/citiesPage.git
   ```

2. Navigate to the project directory:

   ```shell
   cd citiesPage
   ```

3. Install the required dependencies using Yarn:

   ```shell
   npm install
   ```


### Running Backend and Frontend Separately

1. Navigate to the `backend` directory for backend setup and follow the instructions in the backend README file for setup and execution.

2. Proceed to the `frontend` directory for frontend setup and follow the instructions in the frontend README file for setup and execution.

### Running with Docker

To run the project using Docker, ensure you have Docker installed on your system.

1. Make sure you have environment files (`backend/.env` and `frontend/.env`) properly configured.

2. Run the following command in the root directory of the project:

      ```shell
     docker-compose up --build
      ```



This command builds the Docker images and starts the containers based on the configurations specified in the `docker-compose.yml` file.

3. Access the application using your web browser. The frontend should be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Environment Files

Ensure that proper environment files are configured for both the backend and frontend components. These files are crucial for the correct functioning of the application.

- For the backend, make sure `backend/.env` contains necessary environment variables.
- For the frontend, ensure `frontend/.env` is properly configured.

Refer to the README files within each component directory for guidance on setting up environment variables.

## Additional Information

For more detailed instructions on setting up and running the backend and frontend components, please refer to their respective README files located within the `backend` and `frontend` directories.
