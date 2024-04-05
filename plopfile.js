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
        destination: './packages/components/{{dashCase componentName}}',
        abortOnFail: true,
      },
    ],
  })
}
