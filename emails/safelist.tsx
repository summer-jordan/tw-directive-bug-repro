import * as React from 'react';

import { Email } from '../lib/Email'
import { twSafelistConfig } from '../lib/tw-config'

export default function Safelist() {
  return <Email twConfig={twSafelistConfig} />
}
