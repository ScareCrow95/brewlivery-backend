export const clientMap = {
  /**@type {Map<string,{state:('init' | 'idle'| 'transit-to'| 'transit-await'
   * |'transit-deliverd'|'transit-back'),client:string, id:string,lat:number,lng:number, orderId:string, status:('flying'|'landing'|'take-off'|'stop') }>} */
  drones: new Map(),
  clients: new Map(),
  admins: new Map(),
}
