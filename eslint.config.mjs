import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      vue: {
        overrides: {
          'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            { registeredComponentsOnly: false, ignores: ['apexchart'] },
          ],
          'vue/prop-name-casing': ['error', 'camelCase'],
          'vue/max-attributes-per-line': [
            'error',
            { singleline: 1, multiline: { max: 1 } },
          ],
        },
      },
      plugins: {
        tailwindcss: require('eslint-plugin-tailwindcss')
      },
      rules: {
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/migration-from-tailwind-2': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'vue/no-setup-props-destructure': 'off',
        'vue/attributes-order': [
          'error',
          {
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              'UNIQUE',
              'TWO_WAY_BINDING',
              'OTHER_DIRECTIVES',
              'OTHER_ATTR',
              'EVENTS',
              'CONTENT',
            ],
            alphabetical: true,
          },
        ],
        'vue/singleline-html-element-content-newline': [
          'error',
          {
            ignoreWhenNoAttributes: false,
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea'],
          },
        ],
        'unused-imports/no-unused-vars': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-imports': 'error',
        'import/newline-after-import': 'error',
        'regexp/no-obscure-range': 'off',
      },
    },
  ),
)
