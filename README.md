---

# Test Execution Report Web App

This project is a **Test Execution Report Web App** that generates a modern and responsive HTML table from a CSV file using **Node.js**, **Express**, **Bootstrap**, and **DataTables**. It includes functionalities such as pagination, column visibility control, and export options for Excel and PDF files. The application is designed to display test results or any tabular data in a user-friendly manner.

## Features

- **CSV to Responsive Table**: Automatically parses CSV data and renders it as a responsive HTML table.
- **Modern UI**: Styled with **Bootstrap** and custom CSS to provide a modern, clean look.
- **Pagination Control**: Users can control the number of rows displayed per page (25, 50, 100).
- **Show/Hide Columns**: Users can toggle column visibility, with highlighted dropdown items to indicate selected columns.
- **Export to Excel/PDF**: Supports exporting the table data to Excel and PDF formats.
- **Interactive DataTable**: Includes built-in sorting, filtering, and searching with **DataTables**.

## Project Structure

```
|-- app.js                   # Main server file (Node.js + Express)
|-- public/
|   |-- css/
|   |   |-- bootstrap.min.css # Bootstrap CSS
|   |   |-- jquery.dataTables.min.css  # DataTables CSS
|   |   |-- buttons.dataTables.min.css # DataTables Buttons CSS
|   |   |-- style.css         # Custom styles
|   |-- js/
|       |-- jquery-3.6.0.min.js      # jQuery
|       |-- bootstrap.bundle.min.js  # Bootstrap JS
|       |-- jquery.dataTables.min.js # DataTables JS
|       |-- buttons.dataTables.min.js # DataTables Buttons JS
|       |-- jszip.min.js             # JSZip for Excel export
|       |-- pdfmake.min.js           # PDFMake for PDF export
|       |-- vfs_fonts.js             # Fonts for PDFMake
|-- views/
|   |-- index.ejs             # EJS template for the main page
|-- README.md                 # Project description and instructions
|-- package.json              # Project dependencies and metadata
```

## Prerequisites

To run this project, ensure that you have the following installed on your machine:

- **Node.js** (v12.x or higher)
- **npm** (v6.x or higher)

You will also need **git** if you are cloning this repository from GitHub.

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/test-execution-report.git
cd test-execution-report
```

### Step 2: Install Dependencies

Navigate to the project folder and install the required Node.js dependencies:

```bash
npm install
```

### Step 3: Start the Application

Once the dependencies are installed, start the Node.js server:

```bash
node app.js
```

By default, the application will run on `http://localhost:3000`. You can open this URL in your browser to view the web app.

### Step 4: Add Your CSV File

To add your data, place the CSV file you want to use inside the `output` folder and ensure it is parsed with the `*` delimiter.

For example:

```
output/data.csv
```

### Step 5: Access the Report

Access the report through `http://localhost:3000` and interact with the table:

- **Pagination**: Adjust the number of rows displayed per page (25, 50, 100).
- **Show/Hide Columns**: Select which columns to display.
- **Export**: Export the table to Excel or PDF by clicking the corresponding buttons.

## Example Data (CSV)

The web app expects CSV files with the `*` delimiter (star symbol). Here is an example of the format:

```csv
Test Case ID*Test Case Name*Status*Execution Time (ms)
1*Login Test*Passed*500
2*Logout Test*Failed*400
3*Purchase Flow*Passed*1200
```

## Customization

### Changing the Theme

- Modify the `public/css/style.css` file to change the theme, fonts, or colors of the report.
- You can also update the DataTable configuration (e.g., for pagination, column definitions) inside `views/index.ejs`.

### Export Formats

This app supports exporting the data in **Excel** and **PDF** formats. You can extend this feature by adding more export options or configuring the DataTables plugin to support other formats.

## Dependencies

- **[Express](https://expressjs.com/)**: Web framework for Node.js
- **[DataTables](https://datatables.net/)**: jQuery plugin for creating responsive and interactive tables
- **[Bootstrap](https://getbootstrap.com/)**: CSS framework for responsive design
- **[jQuery](https://jquery.com/)**: JavaScript library for simplifying DOM manipulation
- **[JSZip](https://stuk.github.io/jszip/)**: Library for creating .zip files and Excel files
- **[pdfmake](https://pdfmake.github.io/docs/)**: PDF generator for client-side web applications

## Screenshots

### Main View
![Test Execution Report Main View](screenshot1.png)

### Export Options
![Export to Excel/PDF](screenshot2.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the creators of [DataTables](https://datatables.net/) and [Bootstrap](https://getbootstrap.com/) for their awesome libraries!

---
