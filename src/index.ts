import { fossilize } from "@tralsejr/dino-docs-api";
import { fossilsToExpressMiddleware } from "@tralsejr/dino-docs-api/kits";
import { Plugin } from "@tralsejr/routex";

export const DinoDocs = (): Plugin => ({
  meta: {
    name: "DinoDocs",
    type: "middleware",
    builtin: "middleware",
  },
  subscriber: async (app, filePath, rootPath, _) => {
    const fossils = await fossilize(filePath);
    fossilsToExpressMiddleware(app, fossils, rootPath);
  },
});
