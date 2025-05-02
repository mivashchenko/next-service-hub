export class EmailProvider {
    static init(config: any) {
        console.log('Initializing Email with config:', config);
    }

    static email = {
        send: async () => console.log('email sent'),
    };
}