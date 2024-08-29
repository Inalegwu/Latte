import { parentPort } from "node:worker_threads"
import { parseWorkerMessageWithSchema } from "@shared/utils";
import { z } from "zod";

const schema = z.object({});

const port = parentPort

if (!port) throw new Error("Illegal State: No Parent Port");

console.log({ message: "starting worker" });

port.on("message", (message) => parseWorkerMessageWithSchema
	(schema, message).match(({ data }) => { 
		console.log({ data }); 
	}, 
		({ message }) => { 
			console.error({ message }); 
		}))