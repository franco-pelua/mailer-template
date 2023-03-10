# Automatic mailer using Node.js, Typescript and Nodemailer

This scripts allows to send mails to multiple receivers at once, with a predetermined message or html template that can be customized if desired. 

# Usage requirements

Node.js installed
NPM installed (comes with Node.js)

Typescript comes bundled in the project, but if it raises any errors relating to not finding such module, it is recommended to install it globally:
`npm i -g typescript` 

# Docs

Once you installed (folder downloaded) and ran 'npm install', you can proceed to edit fields (variables) such as contacts, SENDER_CREDENTIALS, host and auth (tranport's props) and mailConfig's props: subject, text and html. 

It is recommended to only edit the script.ts file and not thescript.js file, because running this script will automatically update script.js accordingly to your changes in script.ts

In script.ts you will find types that describe the structure of every variable that must be changed with your own information, such as contact list and SENDER_CREDENTIALS, here I will briefly explain each of those fields in case those types left something unclear for you:

line 26 (script.ts) - contacts: an array of objects, each object being a contact and containing name, email and attachments properties. attachments property must contain an array of objects, each object being an attachment and containing filename and path properties. The path property must be a valid path for the file that you want to attach, for instance "C:/Users/John/Desktop/myFile.pdf". This list of contacts can be imported from another file for as long as it follows the previously explained structure.

line 35 (script.ts) - SENDER_CREDENTIALS: an object containing user and password properties. These credentials must represent a valid account from a webmail service such as Outlook or Gmail. Mails will be emitted from this account. Consider that Google uses OAuth2 to avoid potential malicious scripts to exploit its services, that's why if you use 2FA you need to create an application password linked to your gmail account to properly use this script. In case you do not use 2FA, you can simply enable "Less Secure Apps" mode in your account. Further reading: https://community.nodemailer.com/using-gmail/

line 40 > line 45 (script.ts) - tranport's host property: The value of this prop should be updated based on the webmail service the credentials are from. For instance, if the sender mail account is from Outlook, then this host property should be updated to "smtp-mail.outlook.com", but if it is a Gmail account, it should be updated to "gmail".

line 59 (script.ts) - Contains the subject of your mails. Can be changed freely. 

line 60 (script.ts) - Contains your mail content as raw text. Can be changed freely. 

line 61 (script.ts) - Contains your mail content as HTML, here you can mix your text content with HTML tags in order to style it. Can be changed freely. 

