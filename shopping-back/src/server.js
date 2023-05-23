import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import jwt from 'jsonwebtoken'
import expjwt from 'express-jwt'
import { User, Item } from './database'

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(expjwt({ secret: 'senhasecreta', credentialsRequired: false }))

app.post('/login', async function(req, res) {
  const { login, password } = req.body

  const user = await User.findOne({ where: { login } })

  if (!user || user.password !== password) {
    return res.send({ ok: false })
  }

  const token = jwt.sign({ id: user.id }, 'senhasecreta')

  res.send({ ok: true, token })
})

app.get('/items', async function(req, res) {
  const userId = req.user && req.user.id
  if (!userId) return res.sendStatus(403)

  const items = await Item.findAll({ where: { userId } })
  res.send(items)
})

app.post('/newitem', async function(req, res) {
  const userId = req.user && req.user.id
  if (!userId) return res.sendStatus(403)

  const { item } = req.body
  const newItem = await Item.create({
    name: item.name,
    amount: item.amount,
    userId,
  })

  res.send({ id: newItem.id })
})

app.post('/removeitem', async function(req, res) {
  const userId = req.user && req.user.id
  if (!userId) return res.sendStatus(403)

  const { id } = req.body

  const item = await Item.findOne({ where: { id } })
  if (item) {
    item.destroy()
  }

  res.sendStatus(200)
})

app.listen(8080)
