import * as encoding from 'lib0/encoding'
import { MessageType } from '../types'
import { OutgoingMessage } from '../OutgoingMessage'

export class QueryAwarenessMessage extends OutgoingMessage {
  type = MessageType.QueryAwareness

  get() {
    encoding.writeVarUint(this.encoder, this.type)
    return encoding.toUint8Array(this.encoder)
  }
}