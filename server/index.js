import express  from 'express'
import dotenv from 'dotenv'
import connectToDB from './database.js'
import productsRoutes from './routes/productRoutes.js'


dotenv.config()
connectToDB()
const app = express()
app.use(express.json())


const port =  process.env.PORT || 5000


app.use('/api/products',productsRoutes)





app.listen(port, () => {
  console.log(`server listening on port ${port}`) 
})