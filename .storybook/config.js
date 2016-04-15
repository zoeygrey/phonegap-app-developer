import { configure } from '@kadira/storybook';

import '../src/index.less';

function loadStories() {
  require('../src/components/PGLabel/stories');
  require('../src/components/PGButton/stories');
}

configure(loadStories, module);
