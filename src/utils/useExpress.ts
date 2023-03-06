import express from 'express'

const app = express()

const router = express.Router()

router.get('/api', (req, res) => {

})

router.post('/apipost', (req, res) => {
  req.url
  res.json('222')
  res.redirect('/')
})

app.use('/api', router)

app.listen(3000, () => {
  console.log('listening on port 3000')
})