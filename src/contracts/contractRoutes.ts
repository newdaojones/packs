// contractRoutes.ts
import Router from 'koa-router';
import { Context } from 'koa';

interface CreateEditionRequestBody {
  name: string;
  symbol: string;
  editionSize: number;
  royaltyBPS: number;
  fundsRecipient: string;
  defaultAdmin: string;
  description: string;
  animationURI: string;
  imageURI: string;
}

interface CreateDropRequestBody {
  name: string;
  symbol: string;
  defaultAdmin: string;
  editionSize: number;
  royaltyBPS: number;
  fundsRecipient: string;
  metadataURIBase: string;
  metadataContractURI: string;
}

const contractRoutes = new Router();

contractRoutes.post('/create-edition', async (ctx: Context) => {
  const body = ctx.request.body as CreateEditionRequestBody;
  const {
    name,
    symbol,
    editionSize,
    royaltyBPS,
    fundsRecipient,
    defaultAdmin,
    description,
    animationURI,
    imageURI,
  } = body;

  // Call the createEdition function here with the extracted data
  // ...

  // Set response
  ctx.body = {
    success: true,
    message: 'Edition created successfully',
  };
});

contractRoutes.post('/create-drop', async (ctx: Context) => {
  const body = ctx.request.body as CreateDropRequestBody;
  const {
    name,
    symbol,
    defaultAdmin,
    editionSize,
    royaltyBPS,
    fundsRecipient,
    metadataURIBase,
    metadataContractURI,
  } = body;

  // Call the createDrop function here with the extracted data
  // ...

  // Set response
  ctx.body = {
    success: true,
    message: 'Drop created successfully',
  };
});

export default contractRoutes;
