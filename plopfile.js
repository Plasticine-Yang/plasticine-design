export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
        validate: (input) => {
          if (!input) {
            return 'Please enter component name!'
          }

          return true
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/**',
        destination: './packages/components/{{kebabCase componentName}}',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: './packages/styles/components/{{kebabCase componentName}}/index.scss',
        templateFile: 'plop-templates/styles/component/index.scss.hbs',
      },
      {
        type: 'append',
        path: './packages/styles/components/index.scss',
        template: "@forward '{{kebabCase componentName}}';",
        // 贪婪匹配最后一行
        pattern: /.*;(?!.*;)/s,
      },
    ],
  })
}
