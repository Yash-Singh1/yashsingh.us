import TinaCMS from 'tinacms';
import { tinaConfig } from '../schema';

// Importing the TinaProvider directly into your page will cause Tina to be added to the production bundle.
// Instead, import the tina/provider/index default export to have it dynamically imported in edit-mode
/**
 *
 * @private Do not import this directly, please import the dynamic provider instead
 */
const TinaProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore -- query isn't even given in example
  return <TinaCMS {...tinaConfig}>{children}</TinaCMS>;
};

export default TinaProvider;
