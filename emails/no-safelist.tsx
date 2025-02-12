import * as React from 'react';

import { Email } from '../lib/Email'
import { twBaseConfig } from '../lib/tw-config'

export default function NoSafelist() {
  return <Email twConfig={twBaseConfig} />
}
