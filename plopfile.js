module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component was generated',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name, please: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'generators/templates/index.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.spec.tsx',
        templateFile: 'generators/templates/index.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'generators/templates/styles.ts.hbs',
      },
    ],
  })
}
