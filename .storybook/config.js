import { configure } from '@kadira/storybook';

import '../src/index.less';

function loadStories() {
  require('../src/components/PGLabel/stories');
}

configure(loadStories, module);
