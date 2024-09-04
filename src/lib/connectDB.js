import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('connexion a la base de donnée réussie')
  } catch (error) {
    throw new Error('errur de connexion a la base de données')
  }
}

export default connectDB
