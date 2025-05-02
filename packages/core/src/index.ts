// packages/core/src/ServiceHub.ts
type Config = {
    auth?: any;
    email?: any;
    subscription?: any;
};

class ServiceHubClass {
    private static instance: ServiceHubClass;
    private config?: Config;

    private constructor() {
        // private to enforce singleton
    }

    static getInstance(): ServiceHubClass {
        if (!ServiceHubClass.instance) {
            ServiceHubClass.instance = new ServiceHubClass();
        }
        return ServiceHubClass.instance;
    }

    init(config: Config) {
        if (this.config) {
            console.warn('[ServiceHub] Already initialized. Ignoring re-init. 2');
            return;
        }
        this.config = config;
        // You can also pre-init SDKs here if needed
    }

    get auth() {
        if (!this.config?.auth) throw new Error('Auth service not configured');
        return this.config.auth.provider;
    }

    get email() {
        if (!this.config?.email) throw new Error('Email service not configured');
        return this.config.email.provider;
    }

    get subscription() {
        if (!this.config?.subscription) throw new Error('Subscription service not configured');
        return this.config.subscription.provider;
    }
}

// Export singleton instance
export const ServiceHub = ServiceHubClass.getInstance();