const nodemailer = require('nodemailer');

type Attachment = {
    "filename" : string, 
    "path" : string
}

type Contact = {
    "name" : string,
    "email" : string,
    "attachments" : Attachment[]
}

type MailConfig = {
    from: string,
    to: string, 
    attachments: Attachment[],
    subject: string, 
    text: string, 
    html: string
}

function main() : void  {
    
    // Contact list can be imported
    const contacts : Contact[] = [
        {
            "name": "John Doe",
            "email": "john_doe@gmail.com",
            "attachments": [ { "filename": "helloworld.pdf", "path": "C:/Users/Yourself/Documents/helloworld.pdf" } ]
        }
    ]

    try {
        const SENDER_CREDENTIALS : { user: string, password: string } = {
            user: "yourself@gmail.com",
            password: "p4ssw0rd@abc"
        } 

        const transport = nodemailer.createTransport({
            // Uses 'pool' attribute: The same connection is used to send up to 100 mails before being disposed.
            pool: true,
            // Sets the number of max connections per transport. Microsoft accepts up to 1 parallel connection for the same client.
            maxConnections: 1,
            // If true, a logger instance will log to console
            logger: true,
            // Outlook: smtp-mail.outlook.com, Gmail: gmail. For reference when using gmail as host, visit: https://nodemailer.com/usage/using-gmail/
            host: "smtp-mail.outlook.com",
            auth: {
                user: SENDER_CREDENTIALS.user,
                pass: SENDER_CREDENTIALS.password
            }, 
            tls: { rejectUnauthorized: false }

        })

        contacts.forEach(async (contact) => {
            const mailConfig : MailConfig = {
                from: SENDER_CREDENTIALS.user,
                to: contact.email,
                attachments: contact.attachments,
                subject: 'REPLACE THIS WITH YOUR DESIRED SUBJECT',
                text: 'REPLACE THIS WITH YOUR DESIRED EMAIL CONTENT',
                html: '<h1>REPLACE THIS WITH YOUR DESIRED EMAIL CONTENT</h1>'
            }

            await transport.sendMail(mailConfig);
        })

    } catch (error) {
        
        console.error(error);

    }

}

main();