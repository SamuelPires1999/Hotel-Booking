import Express from 'express';

const main = async () => {
    const app = Express();
    app.use(Express.json());

    app.listen(3000, () => {
        console.log('App is listening on port 3000');
    });
};

main();
