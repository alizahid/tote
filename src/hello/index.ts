import { Func, joi } from 'tote-lib'

class Hello extends Func {
  schema = {
    query: joi.object({
      number: joi.number()
    })
  }

  invoke() {
    const {
      query: { number = 2 }
    } = this.request

    return {
      hello: 'world',
      result: number * 2
    }
  }
}

export default Func.bootstrap(Hello)
