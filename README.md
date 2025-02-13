# Abstractify

Abstractify is a Spring Boot application that leverages Hugging Face APIs to provide summarization and question-answering functionalities for PDF documents. The application includes a frontend built with React for ease of use.

## Features

- **PDF Summarization**: Extracts and summarizes the text from PDF files.
- **Creative Summarization**: Provides a more creative and detailed summary of the PDF content.
- **Question-Answering**: Answers questions based on the content of the uploaded PDF.
- **Creative Question-Answering**: Provides creative answers to questions based on the PDF content.

## Technologies Used

### Backend
- Spring Boot
- Hugging Face APIs
- Apache PDFBox
- Springdoc OpenAPI
- RestTemplate

### Frontend
- React
- Axios
- Styled Components

## Getting Started

### Prerequisites

- Java 21
- Maven
- Node.js
- NPM or Yarn

### Installation

#### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/Hrushikesh17/Abstractify.git
    cd Abstractify
    ```

2. Configure Hugging Face API Key:
   Add your Hugging Face API key to the `application.properties` file:
   ```properties
   huggingface.api.key=your_hugging_face_api_key
