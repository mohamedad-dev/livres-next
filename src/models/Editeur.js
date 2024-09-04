import mongoose from 'mongoose'

const editeurSchema = mongoose.Schema(
  {
    maisonedit: String,
    siteweb: String,
    email: String,
  },
  {
    timestamps: true,
  }
)

const Editeur =
  mongoose.models.Editeur || mongoose.model('Editeur', editeurSchema)
export default Editeur
