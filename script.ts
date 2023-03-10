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

async function main() : Promise<void>  {
    
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
            pool: true,
            maxConnections: 1,
            logger: true,
            // Outlook: smtp-mail.outlook.com, Gmail: gmail. For reference when using gmail as host, visit: https://nodemailer.com/usage/using-gmail/
            host: "gmail",
            auth: {
                user: SENDER_CREDENTIALS.user,
                pass: SENDER_CREDENTIALS.password
            }, 
            tls: { rejectUnauthorized: false }

        })

        for(const contact of contacts) {
            const mailConfig : MailConfig = {
                from: SENDER_CREDENTIALS.user,
                to: contact.email,
                attachments: contact.attachments,
                subject: 'REPLACE THIS WITH YOUR DESIRED SUBJECT',
                text: 'REPLACE THIS WITH YOUR DESIRED EMAIL CONTENT',
                html: '<h1>REPLACE THIS WITH YOUR DESIRED EMAIL CONTENT</h1>'
            }

            await transport.sendMail(mailConfig);
        }

    } catch (error) {
        
        console.error(error);

    }

}

main();