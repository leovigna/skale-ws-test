declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ETH_HTTP_URL: string;
            ETH_WS_URL: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
