import HelloWorld from './HelloWorld.vue'

export default { title: 'Hello World' }
export const helloWorldComponent = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Welcome!"/>'
})
