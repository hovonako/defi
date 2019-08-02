import * as functions from './_lib';

import lookForBinder from './lookforbinder';
import chain from './chain';
import defaultBinders from './defaultbinders';

export default Object.assign({}, functions, {
    lookForBinder,
    chain,
    defaultBinders
});
