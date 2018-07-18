# CSCI318 - Software Engineering Practices & Principle Group Project	Group 1

Expense Recording web application, lets users record their day-to-day expenses.

## Usage
-Option 1- Host with xampp (provided in deliverable)

1. Open xampp folder
2. Execute xampp-control
3. Start apache

-Option 2- React script start

1. Install NodeJS
2. Open Project>app folder and run CMD or Powershell
3. Run " npm start "
## Alternative
If option 1 above does not work normally, check for the following instruction.

1. Install xampp directly from https://www.apachefriends.org/
2. Open Project>app folder and run CMD or Powershell
3. Run " npm build " or " npm run build "
4. Copy and paste everything inside the build folder to \xampp\htdocs   (Delete all files inside the htdocs folder first)
5. Edit \xampp\apache\conf\httpd.conf , search for "xampp/htdocs"
6. Copy and paste the followings under "AllowOverride All" 

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

7. It should be now looks like:

    
    #AllowOverride controls what directives may be placed in .htaccess files.
    #It can be "All", "None", or any combination of the keywords:
    #AllowOverride FileInfo AuthConfig Limit
    
    AllowOverride All

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

    
    #Controls who can get stuff from this server.
    

8. Start apache as in option 1 with installed xampp
## Operations
Once you get in the page of "Expense Record", you can do some expense recording with the web application.

To create new record, get to the create option (Option will blue out when selected), insert date, category, description and amount, then click "Create" button. A newly added record will appear immediately in the table.

To update new record, get to the update option, insert the id of the record to be changed and insert data to be changed, leave the text boxes blank if you want to keep the original data, click "Update" button when you are done.

To delete record, get to the delete option, insert the id of the record to be deleted, click "Delete" button and a confirm window will prompt up, confirm to delete. Insert "-1" as id to have all records deleted.

Filtering and sorting is available in the table, simply click the head row items to sort, input to the text box to filter.

The above operations are concerned as CRUD operations.

You can view or edit localStorage using Google Chrome browser to alter data directly but it is not recommended.


## Author

[TamiyaKC](https://github.com/TamiyaKC)
