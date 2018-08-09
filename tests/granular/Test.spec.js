// Import Vue and the component being tested
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function');
  })
})