# How to reproduce

1. `npm install`
2. `npm run test-storybook` -> shows "[@vue/compiler-core] decodeEntities option is passed but will be ignored in non-browser builds."
3. remove export story with template from `App.stories.ts`
4. `npm run test-storybook` again -> message is gone