import { factory } from './ConfigLog4j';
const log = factory.getLogger('MyClass');
class MyClass {

  log(): boolean{
    log.info('It Works!');
    return true;
  }

}
export default MyClass;
