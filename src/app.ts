import config from './config/config';
import packageJson from '../package.json';
import {prisma} from './modules/common/prisma.service';
import {sendStatistic} from './modules/common/telemetry';
import {createServer} from './server';
import {getLogger} from './modules/common/logger.service';
import StatusCodes from './modules/common/status-codes';

const log = getLogger('app');

async function main() {
    const {apolloServer, app} = createServer();
    await apolloServer.start();
    apolloServer.applyMiddleware({app, path: config.server.graphql.path});

    // 404 vulnerability https://nvd.nist.gov/vuln/detail/cve-2019-3498
    // should be last "app.use" in the middleware chain
    app.use((req, res) => {
        res.status(StatusCodes.NOT_FOUND).json({
            status: 'error',
            message: 'Not found'
        });
    });

    app.listen({port: config.server.port}, () => {
        log.info(`*** ${packageJson.name} ready at http://127.0.0.1:${config.server.port}${apolloServer.graphqlPath} ***`);
    });

    const CLEAR_EXPIRED_SESSIONS_INTERVAL = 10000;
    setInterval(async () => {
        const deletedSessions = await prisma.accountSession.deleteMany({
            where: {
                expiresAt: {lt: new Date()}
            }
        });
        if (deletedSessions.count > 0) {
            log.debug(`Deleted ${deletedSessions.count} expired sessions`);
        }
    }, CLEAR_EXPIRED_SESSIONS_INTERVAL);

    await sendStatistic();
}

main().catch(console.error);
