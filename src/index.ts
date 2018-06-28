import { Flow } from './lib/bakeryjs/Flow';
import { FlowCatalog } from './lib/bakeryjs/FlowCatalog';
import { Program } from './lib/bakeryjs/Program';
import FlowSchemaReader from './lib/bakeryjs/FlowSchemaReader';
import ComponentProvider from './lib/bakeryjs/ComponentProvider';
import {MilanBuilder} from './lib/bakeryjs/builders/MilanBuilder';

const catalog = new FlowCatalog(
    new FlowSchemaReader(`${__dirname}/flows/flows.ts`),
    new ComponentProvider(`${__dirname}/components/`),
    new MilanBuilder()
);

const program = new Program();

catalog.getFlow(process.argv[2])
    .then((flow: Flow) => program.run(flow))
    .catch((error: Error) => console.error(error));