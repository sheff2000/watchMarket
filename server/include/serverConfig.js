import 'dotenv/config';
export const configServer = {
    port: process.env.PORT || 5001,
    db_login: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_connect_string: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@test-projects-cluster.qqhcelg.mongodb.net/?retryWrites=true&w=majority&appName=test-projects-cluster`
};