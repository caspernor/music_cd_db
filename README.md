# Music CDs Collection

This project is an in-memory front-end application that allows users to add and manage a collection of music CDs. Users can add CDs to a table and delete entries as needed, with all data stored temporarily in the table itself. No permanent data structure is used, so all entries will disappear upon page reload.

## Features

- **Add Music CDs**: Users can input an author, title, and year to add a CD entry.
- **Display in Table Format**: Each entry is dynamically added to an HTML table.
- **Delete Functionality**: Users can delete individual CD entries from the table.
- **Temporary Storage**: Data exists only in the table during the session and is lost upon page reload.
- **Dynamic Element Creation**: Uses JavaScript's `createElement` method to dynamically create and append table rows and cells.

## Setup and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/caspernor/music_cd_db.git
   cd music_cd_db
