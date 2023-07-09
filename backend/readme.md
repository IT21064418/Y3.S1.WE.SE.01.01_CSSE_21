# Backend Build Instructions

## Setting Up the Development Environment

1. clone the github repository;

2. Execute the below command with the directory name of the chosen service:
   ``` 
   cd backend/<service_name>
   ```

   For the payment Service and Delivery service, execute the below command:
   ```
   cd backend/<service_name>/src/v1
   ```

3. when inside the respective service directory execute the below command;

    1. `npm i` - installs all the necessary packages for the service.
    2. `npm start` - nodemon will start the server for the service

4. do the 2nd and 3rd steps for all the services (advised to begin with gateway service first);

### Docker Containers

1. setup docker in the local machine (docker documentation - `https://docs.docker.com/engine/install/`)

2. get the rabbitMq Docker image and run the container by executing the following command,
   ```
    docker run -d -h rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8.1-management
   ```

4. All the services have Dockerfiles inside their directories. build them individually if required. Its highly reccomended to build the `docker-compose.yml` in the root directory since it give all the containerized services.

5. While in the root directory(backend) run these commands,

    1. Build the docker image:
       ```
       doocker-compose build
       ```
    3. Start the containers:
       ```
       docker-compose up
       ```
    5. If you want to run the containers in the background, you can add the -d flag to the docker-compose up command.This will start the containers in detached mode and free up your console.
       ```
       docker-compose -d up
       ```
    7. When you want to Stop the containers:
       ```
       docker-compose down
       ```

    #### Note

    Before running the docker-compose up command, make sure that there are no other services running on the ports specified in your docker-compose.yml file. If there are, you may need to change the port numbers in your configuration.

