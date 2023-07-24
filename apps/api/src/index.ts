import 'dotenv/config'
import server from './server'
import { Logger } from './utils/logger';

(async () => {
    server.listen(process.env.PORT, () => {
        Logger.info(`Server started on port http://localhost:${process.env.PORT}`);
    });
})();