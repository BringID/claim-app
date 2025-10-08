import { TTier } from "@/types"

const tiers: TTier[] = [
  {
    min: 20,
    max: Infinity,
    name: 'Max',
    id: '1',
    value: '2.5M',
    description: 'Maximum Sybil resistance'
  },
  {
    min: 10,
    max: 19,
    name: 'Advanced',
    id: '2',
    value: '500K',
    description: 'Stronger verification'
  },
  {
    min: 5,
    max: 9,
    name: 'Basic',
    id: '3',
    value: '100K',
    description: 'Entry-level verification',
  },
]

export default tiers