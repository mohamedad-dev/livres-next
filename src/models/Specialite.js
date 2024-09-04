import mongoose from 'mongoose'

const specialiteSchema = mongoose.Schema(
  {
    nomspecialite: String,
  },
  {
    timestamps: true,
  }
)

const Specialite =
  mongoose.models.Specialite || mongoose.model('Specialite', specialiteSchema)
export default Specialite
