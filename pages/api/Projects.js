// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { FaPython } from 'react-icons/fa'

const PROJECTS = [
  {"title": "Ejemplo 1", "image": "/placeholder.png", "tags": [ "python", "react", "tailwind" ]},
  {"title": "Ejemplo 1", "image": "/placeholder.png", "tags": [ "python", "react", "tailwind" ]},
  {"title": "Ejemplo 1", "image": "/placeholder.png", "tags": [ "nextjs", "react", "tailwind" ]}
]

export default function handler(req, res) {
  res.status(200).json({ 'projects': PROJECTS })
}
