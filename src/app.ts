import { FfmegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';

export class App {
  async run() {
    new FfmegExecutor(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();
app.run();
