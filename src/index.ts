
import 'reflect-metadata'
import express from 'express'
import { userRouter } from '@/modules/users'

const port = process.env.PORT || 3000

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})