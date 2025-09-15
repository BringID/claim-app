import { TTier } from "@/types"

const tiers: TTier[] = [
  {
    min: 20,
    max: Infinity,
    name: 'Max',
    id: '1',
    value: '10M',
    description: 'Maximum Sybil resistance, most trusted proofs'
  },
  {
    min: 10,
    max: 19,
    name: 'Advanced',
    id: '2',
    value: '1M',
    description: 'Stronger verification, harder to fake'
  },
  {
    min: 5,
    max: 9,
    name: 'Basic',
    id: '3',
    value: '100K',
    description: 'Entry-level verification, easy to fake',
  },
]

export default tiers